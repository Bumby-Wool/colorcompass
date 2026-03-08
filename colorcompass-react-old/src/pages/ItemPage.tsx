import React from "react";
import { useParams } from "react-router-dom";
import { ColorSelector } from "../components/colors/ColorSelector";
import { CheckoutButton } from "../components/CheckoutButton";
import { ExtraOptions } from "../components/item/ExtraOptions";
import { OptionGroup } from "../components/item/OptionGroup";
import { OptionRow } from "../components/item/OptionRow";
import { VariantSelector } from "../components/item/VariantSelector";
import { SvgCanvas } from "../components/svg/SvgCanvas";
import type { SvgStyle } from "../components/svg/SvgCanvas";
import { itemData } from "../data/itemData";
import { usePatterns } from "../hooks/usePatterns";
import type { Item, ItemExtra, ItemOption, ItemVariant, Pattern } from "../types/builder";
import { cloneValue } from "../utils/clone";

// Default style to hide SVG elements when they are not part of the selected variant/options.
const HIDE_STYLE: SvgStyle = { display: "none" };

// Treat options as zipper color selectors when the option or its selected type requests it.
function isZipperOption(option: ItemOption | ItemExtra): boolean {
  if (option.colorSelector === "zipper") {
    return true;
  }
  return option.selectedType?.colorSelector === "zipper";
}

// Resolve which SVG element ids the option currently controls.
function getOptionElements(option: ItemOption | ItemExtra): string[] {
  if (option.selectedType?.elements) {
    return option.selectedType.elements;
  }
  return option.elements ?? [];
}

// Gather all SVG ids used by any option or extra so we can start hidden.
function collectAllElementIds(item: Item): string[] {
  const ids = new Set<string>();

  item.variants.forEach((variant) => {
    variant.options.forEach((option) => {
      option.elements?.forEach((id) => ids.add(id));
      option.types?.forEach((type) => type.elements.forEach((id) => ids.add(id)));
    });

    variant.extras?.forEach((extra) => {
      extra.elements?.forEach((id) => ids.add(id));
      extra.types?.forEach((type) => type.elements.forEach((id) => ids.add(id)));
    });
  });

  return Array.from(ids);
}

// Clone and initialize a variant with default types and colors.
function initializeVariant(variant: ItemVariant, patterns: Pattern[], zippers: Pattern[]): ItemVariant {
  const next = cloneValue(variant);

  next.options = next.options.map((option) => {
    if (option.types && option.types.length > 0) {
      option.selectedType = option.types[0];
    }

    if (option.colorSelector !== "none") {
      const palette = isZipperOption(option) ? zippers : patterns;
      option.color = option.color ?? palette[0];
    }

    return option;
  });

  next.extras = next.extras?.map((extra) => {
    if (extra.types && extra.types.length > 0) {
      extra.selectedType = extra.types[0];
    }

    extra.show = extra.show ?? false;
    if (extra.show && extra.colorSelector !== "none") {
      const palette = isZipperOption(extra) ? zippers : patterns;
      extra.color = extra.color ?? palette[0];
    }

    return extra;
  });

  return next;
}

// Build a map of SVG id to style based on selected options/extras.
function buildOptionStyles(item: Item | undefined, variant: ItemVariant | null): Record<string, SvgStyle> {
  if (!item || !variant) {
    return {};
  }

  const styles: Record<string, SvgStyle> = {};
  const allElementIds = collectAllElementIds(item);
  allElementIds.forEach((id) => {
    styles[id] = HIDE_STYLE;
  });

  variant.options.forEach((option) => {
    const elements = getOptionElements(option);
    if (!elements.length || !option.color || option.colorSelector === "none") {
      return;
    }

    elements.forEach((id) => {
      styles[id] = { fill: option.color?.patternId.fill };
    });
  });

  variant.extras?.forEach((extra) => {
    const elements = getOptionElements(extra);
    if (!elements.length || !extra.show || !extra.color || extra.colorSelector === "none") {
      return;
    }

    elements.forEach((id) => {
      styles[id] = { fill: extra.color?.patternId.fill };
    });
  });

  return styles;
}

// Item detail page that mirrors the legacy builder UI.
export function ItemPage(): React.JSX.Element {
  const { itemId } = useParams();
  // Resolve the item definition from the route param.
  const item = React.useMemo(
    () => itemData.find((entry) => entry.link === `/items/${itemId}`),
    [itemId],
  );
  // Load pattern palettes used for fills and zipper textures.
  const { patterns, zippers, isLoading, error } = usePatterns();
  const [selectedVariant, setSelectedVariant] = React.useState<ItemVariant | null>(null);

  // Merge patterns for SVG defs injection.
  const allPatterns = React.useMemo(() => [...patterns, ...zippers], [patterns, zippers]);

  // Initialize the selected variant once data and patterns are ready.
  // First check localStorage for saved state, otherwise use defaults.
  React.useEffect(() => {
    if (!item || patterns.length === 0) {
      return;
    }

    const storageKey = `variant_${itemId}`;
    const savedState = localStorage.getItem(storageKey);
    const fallbackVariant = initializeVariant(item.variants[0], patterns, zippers);

    if (savedState) {
      try {
        const parsed = JSON.parse(savedState) as {
          selectedLabel?: string;
          variants?: Record<string, ItemVariant>;
        };
        const selectedLabel = parsed.selectedLabel ?? item.variants[0].label;
        const restored = parsed.variants?.[selectedLabel];
        setSelectedVariant(restored ?? fallbackVariant);
      } catch {
        // If saved data is invalid, fall back to defaults
        setSelectedVariant(fallbackVariant);
      }
    } else {
      setSelectedVariant(fallbackVariant);
    }
  }, [item, patterns, zippers, itemId]);

  // Compute SVG styles for the current variant selection.
  const optionStyles = React.useMemo(() => buildOptionStyles(item, selectedVariant), [item, selectedVariant]);

  // Switch the variant and reset its default selections.
  const handleVariantChange = React.useCallback(
    (label: string) => {
      if (!item || !itemId) {
        return;
      }
      const nextVariant = item.variants.find((variant) => variant.label === label);
      if (!nextVariant) {
        return;
      }
      const storageKey = `variant_${itemId}`;
      const savedState = localStorage.getItem(storageKey);

      if (savedState) {
        try {
          const parsed = JSON.parse(savedState) as {
            selectedLabel?: string;
            variants?: Record<string, ItemVariant>;
          };
          const restored = parsed.variants?.[label];
          if (restored) {
            setSelectedVariant(restored);
            return;
          }
        } catch {
          // Ignore parse issues and fall back to defaults.
        }
      }

      setSelectedVariant(initializeVariant(nextVariant, patterns, zippers));
    },
    [item, itemId, patterns, zippers],
  );

  // Update variant state with a safe clone to avoid mutating originals.
  const updateVariant = React.useCallback((updater: (draft: ItemVariant) => void) => {
    setSelectedVariant((prev) => {
      if (!prev) {
        return prev;
      }
      const next = cloneValue(prev);
      updater(next);
      return next;
    });
  }, []);

  // Save selections to localStorage whenever variant changes.
  React.useEffect(() => {
    if (!selectedVariant || !itemId) {
      return;
    }

    const storageKey = `variant_${itemId}`;
    const savedState = localStorage.getItem(storageKey);
    const base = {
      selectedLabel: selectedVariant.label,
      variants: { [selectedVariant.label]: selectedVariant },
    };

    if (savedState) {
      try {
        const parsed = JSON.parse(savedState) as {
          selectedLabel?: string;
          variants?: Record<string, ItemVariant>;
        };
        base.variants = { ...(parsed.variants ?? {}), [selectedVariant.label]: selectedVariant };
      } catch {
        // If saved data is invalid, overwrite with the current selection.
      }
    }

    localStorage.setItem(storageKey, JSON.stringify(base));
  }, [selectedVariant, itemId]);

  // Handle unknown item routes.
  if (!item) {
    return (
      <div className="builder-container">
        <h1>Oops.. that item wasn't found</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="item-title-container">
        <h1 className="item-title">My Bumby {item.title}</h1>
      </div>
      <div className="colorcompass-container">
        {/* SVG renderer with pattern defs and dynamic styles */}
        <SvgCanvas
          templatePath={`/item-templates/${itemId}-svg.html`}
          patterns={allPatterns}
          optionStyles={optionStyles}
        />
        <div className="option-container">
          {/* Variant selector only when multiple variants exist */}
          {item.variants.length > 1 && selectedVariant ? (
            <VariantSelector
              value={selectedVariant.label}
              options={item.variants.map((variant) => variant.label)}
              onChange={handleVariantChange}
            />
          ) : null}

          {/* Pattern loading state */}
          {isLoading ? <p>Loading patterns...</p> : null}
          {error ? <p>{error}</p> : null}

          {/* Primary option selectors */}
          {selectedVariant ? (
            <OptionGroup title="Options">
              {selectedVariant.options.map((option, optionIndex) => {
                const showColors = option.colorSelector !== "none";
                const useZippers = isZipperOption(option);
                const palette = useZippers ? zippers : patterns;

                return (
                  <OptionRow label={option.label} key={`${option.label}-${optionIndex}`}>
                    {option.types ? (
                      <select
                        className="type-selector"
                        value={option.selectedType?.label ?? option.types[0]?.label}
                        onChange={(event) => {
                          const selected = option.types?.find((type) => type.label === event.target.value);
                          if (!selected) {
                            return;
                          }
                          updateVariant((draft) => {
                            const nextOption = draft.options[optionIndex];
                            nextOption.selectedType = selected;
                            if (nextOption.colorSelector !== "none") {
                              const nextPalette = isZipperOption(nextOption) ? zippers : patterns;
                              nextOption.color = nextPalette[0];
                            }
                          });
                        }}
                      >
                        {option.types.map((type) => (
                          <option key={type.label} value={type.label}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    ) : null}

                    {showColors ? (
                      <ColorSelector
                        colors={palette}
                        selectedColor={option.color}
                        onChange={(color) =>
                          updateVariant((draft) => {
                            draft.options[optionIndex].color = color;
                          })
                        }
                      />
                    ) : null}
                  </OptionRow>
                );
              })}
            </OptionGroup>
          ) : null}

          {/* Optional extras toggles */}
          {selectedVariant?.extras && selectedVariant.extras.length > 0 ? (
            <ExtraOptions>
              {selectedVariant.extras.map((extra, extraIndex) => {
                const showColors = extra.colorSelector !== "none";
                const useZippers = isZipperOption(extra);
                const palette = useZippers ? zippers : patterns;

                return (
                  <div key={`${extra.label}-${extraIndex}`}>
                    <label className="option-label">
                      <input
                        type="checkbox"
                        checked={extra.show ?? false}
                        onChange={(event) => {
                          updateVariant((draft) => {
                            const nextExtra = draft.extras?.[extraIndex];
                            if (!nextExtra) {
                              return;
                            }
                            nextExtra.show = event.target.checked;
                            if (nextExtra.show && nextExtra.colorSelector !== "none") {
                              const nextPalette = isZipperOption(nextExtra) ? zippers : patterns;
                              nextExtra.color = nextPalette[0];
                            }
                          });
                        }}
                      />
                      {extra.label}
                    </label>

                    {extra.show && extra.types ? (
                      <select
                        className="type-selector"
                        value={extra.selectedType?.label ?? extra.types[0]?.label}
                        onChange={(event) => {
                          const selected = extra.types?.find((type) => type.label === event.target.value);
                          if (!selected) {
                            return;
                          }
                          updateVariant((draft) => {
                            const nextExtra = draft.extras?.[extraIndex];
                            if (!nextExtra) {
                              return;
                            }
                            nextExtra.selectedType = selected;
                            if (nextExtra.colorSelector !== "none") {
                              const nextPalette = isZipperOption(nextExtra) ? zippers : patterns;
                              nextExtra.color = nextPalette[0];
                            }
                          });
                        }}
                      >
                        {extra.types.map((type) => (
                          <option key={type.label} value={type.label}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    ) : null}

                    {extra.show && showColors ? (
                      <ColorSelector
                        colors={palette}
                        selectedColor={extra.color}
                        onChange={(color) =>
                          updateVariant((draft) => {
                            const nextExtra = draft.extras?.[extraIndex];
                            if (!nextExtra) {
                              return;
                            }
                            nextExtra.color = color;
                          })
                        }
                      />
                    ) : null}
                  </div>
                );
              })}
            </ExtraOptions>
          ) : null}

          <CheckoutButton />

          <small className="color-muted">
            Each Bumby Wool product is a unique creation. The {item.title} here is an approximation of the finished
            product.
          </small>
        </div>
      </div>
      <div className="item-title-container">
        <h2 className="item-title color-primary">Get Inspired!</h2>
        <p className="inspired-description">
          Check out what others have made or share a screenshot of what you&apos;ve created in the{" "}
          <a className="link" href="https://www.facebook.com/groups/503699423004969" target="_blank" rel="noreferrer">
            Bumby Wool Community
          </a>
          .
        </p>
      </div>
    </div>
  );
}
