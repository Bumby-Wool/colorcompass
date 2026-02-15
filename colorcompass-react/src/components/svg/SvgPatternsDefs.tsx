import React from "react";

export type SvgPattern = {
  svgPatternId: string;
  imageUrl: string;
  type: "pattern" | "zipper";
};

export type SvgPatternsDefsProps = {
  patterns: SvgPattern[];
};

export function SvgPatternsDefs({ patterns }: SvgPatternsDefsProps): JSX.Element {
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
