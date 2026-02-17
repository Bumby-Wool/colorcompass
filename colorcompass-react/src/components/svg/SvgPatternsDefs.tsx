import React from "react";

// Minimal pattern shape for building SVG defs.
export type SvgPattern = {
  svgPatternId: string;
  imageUrl: string;
  type: "pattern" | "zipper";
};

// Props for rendering pattern defs.
export type SvgPatternsDefsProps = {
  patterns: SvgPattern[];
};

// Render inline SVG <defs> pattern nodes.
export function SvgPatternsDefs({ patterns }: SvgPatternsDefsProps): React.JSX.Element {
  return (
    <defs>
      {patterns.map((pattern) => (
        <pattern key={pattern.svgPatternId} id={pattern.svgPatternId} patternUnits="objectBoundingBox" width="1" height="1">
          <image href={pattern.imageUrl} x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" />
        </pattern>
      ))}
    </defs>
  );
}
