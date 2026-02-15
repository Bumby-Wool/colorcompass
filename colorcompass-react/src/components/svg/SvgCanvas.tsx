import React from "react";

export type SvgCanvasProps = {
  children: React.ReactNode;
};

export function SvgCanvas({ children }: SvgCanvasProps): JSX.Element {
  return <div className="svg-background">{children}</div>;
}
