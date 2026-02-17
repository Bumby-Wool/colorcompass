import React from "react";
import type { Pattern } from "../../types/builder";

// Minimal style fields we apply to SVG elements by id.
export type SvgStyle = {
  fill?: string;
  display?: string;
};

// SVG template renderer props.
export type SvgCanvasProps = {
  templatePath: string;
  patterns: Pattern[];
  optionStyles: Record<string, SvgStyle>;
};

// Escape ids so querySelector works with Illustrator-generated IDs.
function escapeId(id: string): string {
  if (typeof CSS !== "undefined" && typeof CSS.escape === "function") {
    return CSS.escape(id);
  }
  return id.replace(/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g, "\\$&");
}

// Build SVG <defs> markup for both fabric patterns and zipper images.
function buildPatternDefs(patterns: Pattern[]): string {
  const patternDefs = patterns
    .filter((pattern) => pattern.type === "pattern")
    .map(
      (pattern) =>
        `<pattern id="${pattern.svgPatternId}" patternUnits="objectBoundingBox" width="1" height="1">` +
        `<image href="${pattern.imageUrl}" x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" />` +
        `</pattern>`,
    )
    .join("");

  const zipperDefs = patterns
    .filter((pattern) => pattern.type === "zipper")
    .map(
      (pattern) =>
        `<pattern id="${pattern.svgPatternId}" x="0" y="0" width="1" height="0.05" patternUnits="objectBoundingBox">` +
        `<image href="${pattern.imageUrl}" x="0" y="0" width="130" />` +
        `</pattern>`,
    )
    .join("");

  return `${patternDefs}${zipperDefs}`;
}

// Replace the legacy svg-patterns placeholder with real <defs> markup.
function injectPatternDefs(markup: string, patterns: Pattern[]): string {
  if (!markup) {
    return markup;
  }

  const defsMarkup = `<defs>${buildPatternDefs(patterns)}</defs>`;
  const defsBlockRegex = /<defs\s+svg-patterns\s*>\s*<\/defs>/;
  if (defsBlockRegex.test(markup)) {
    return markup.replace(defsBlockRegex, defsMarkup);
  }

  const defsSelfClosingRegex = /<defs\s+svg-patterns\s*\/>/;
  if (defsSelfClosingRegex.test(markup)) {
    return markup.replace(defsSelfClosingRegex, defsMarkup);
  }

  return markup;
}

// Apply fill/display styles to SVG nodes based on selection state.
function applyOptionStyles(container: HTMLDivElement | null, styles: Record<string, SvgStyle>): void {
  if (!container) {
    return;
  }

  const svg = container.querySelector("svg");
  if (!svg) {
    return;
  }

  Object.entries(styles).forEach(([id, style]) => {
    const target = svg.querySelector(`#${escapeId(id)}`) as SVGElement | null;
    if (!target) {
      return;
    }

    if (style.display) {
      target.style.display = style.display;
    } else {
      target.style.removeProperty("display");
    }

    if (style.fill) {
      target.style.fill = style.fill;
    }
  });
}

// Load the SVG template, inject defs, and paint styles from React state.
export function SvgCanvas({ templatePath, patterns, optionStyles }: SvgCanvasProps): React.JSX.Element {
  const [markup, setMarkup] = React.useState<string>("");
  const [isReady, setIsReady] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  // Fetch SVG markup when the template path changes.
  React.useEffect(() => {
    let isMounted = true;
    setIsReady(false);
    fetch(templatePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load SVG template.");
        }
        return response.text();
      })
      .then((text) => {
        if (isMounted) {
          setMarkup(text);
        }
      })
      .catch(() => {
        if (isMounted) {
          setMarkup("");
          setIsReady(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [templatePath]);

  // Inject updated pattern defs when markup or patterns change.
  const markupWithDefs = React.useMemo(() => injectPatternDefs(markup, patterns), [markup, patterns]);

  // Apply computed styles after markup updates.
  React.useEffect(() => {
    applyOptionStyles(containerRef.current, optionStyles);
    if (markupWithDefs) {
      setIsReady(true);
    }
  }, [markupWithDefs, optionStyles]);

  return (
    <div
      className="svg-background"
      ref={containerRef}
      style={{ visibility: isReady ? "visible" : "hidden" }}
      dangerouslySetInnerHTML={{ __html: markupWithDefs }}
    />
  );
}
