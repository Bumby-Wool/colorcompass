import React from "react";

export type SwatchListProps = {
  children: React.ReactNode;
};

export function SwatchList({ children }: SwatchListProps): JSX.Element {
  return <ul className="swatch-list">{children}</ul>;
}
