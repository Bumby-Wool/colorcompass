import type { Pattern, PatternInput } from "../types/builder";

// Base paths for pattern images stored in the public resources folder.
const PATTERN_BASE = "/resources/patterns";
const ZIPPER_BASE = "/resources/patterns/zippers";

// Normalize legacy pattern entries into a consistent shape.
export function buildPattern(input: PatternInput): Pattern {
  if (input.type === "pattern" && input.name && input.svgPatternId && input.patternId && input.imageUrl) {
    return input as Pattern;
  }

  if (input.type === "zipper" && input.name) {
    return {
      type: "zipper",
      name: input.name,
      svgPatternId: `${input.name}Zipper`,
      patternId: { fill: `url(#${input.name}Zipper)` },
      imageUrl: `${ZIPPER_BASE}/${input.name}Zipper.png`,
    };
  }

  if (input.name) {
    return {
      type: "pattern",
      name: input.name,
      svgPatternId: input.name,
      patternId: { fill: `url(#${input.name})` },
      imageUrl: `${PATTERN_BASE}/${input.name}.jpg`,
    };
  }

  return {
    type: "pattern",
    name: "Unknown",
    svgPatternId: "Unknown",
    patternId: { fill: "#fff" },
    imageUrl: "",
  };
}

// Fetch pattern definitions from the JSON file in public.
export async function loadPatterns(): Promise<Pattern[]> {
  const response = await fetch("/color_patterns.json");
  if (!response.ok) {
    throw new Error("Failed to load color patterns.");
  }
  const data = (await response.json()) as PatternInput[];
  return data.map(buildPattern);
}
