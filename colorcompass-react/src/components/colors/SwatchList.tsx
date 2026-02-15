import React from "react";

export type SwatchListProps = {
  children: React.ReactNode;
};

export function SwatchList({ children }: SwatchListProps): React.JSX.Element {
  return <ul className="swatch-list">{children}</ul>;
}
