import React from "react";

// Shared list wrapper for color swatches.
export type SwatchListProps = {
  children: React.ReactNode;
};

// Simple UL wrapper to reuse swatch styles.
export function SwatchList({ children }: SwatchListProps): React.JSX.Element {
  return <ul className="swatch-list">{children}</ul>;
}
