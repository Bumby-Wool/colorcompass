// SVG fill reference used by the renderer.
export type PatternId = {
  fill: string;
};

// Raw JSON shape from color_patterns.json.
export type PatternInput = {
  type?: "pattern" | "zipper";
  name?: string;
  svgPatternId?: string;
  patternId?: PatternId;
  imageUrl?: string;
};

// Normalized pattern entry used throughout the app.
export type Pattern = {
  type: "pattern" | "zipper";
  name: string;
  svgPatternId: string;
  patternId: PatternId;
  imageUrl: string;
};

// Variant-specific option type with its own SVG element list.
export type ItemOptionType = {
  label: string;
  elements: string[];
  colorSelector?: "zipper" | "none";
};

// Primary option selector with optional sub-types and color.
export type ItemOption = {
  label: string;
  elements?: string[];
  types?: ItemOptionType[];
  colorSelector?: "zipper" | "none";
  selectedType?: ItemOptionType;
  color?: Pattern;
  show?: boolean;
};

// Optional add-on that can be toggled on/off.
export type ItemExtra = {
  label: string;
  elements?: string[];
  types?: ItemOptionType[];
  selectedType?: ItemOptionType;
  color?: Pattern;
  show?: boolean;
  colorSelector?: "zipper" | "none";
};

// Variant definition for a single item.
export type ItemVariant = {
  label: string;
  options: ItemOption[];
  extras?: ItemExtra[];
};

// Top-level item definition used for routing and rendering.
export type Item = {
  title: string;
  link: string;
  image: string;
  variants: ItemVariant[];
};
