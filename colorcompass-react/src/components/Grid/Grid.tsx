import React from "react";
import "./Grid.css";

interface GridProps {
  columns: number;
  rows: number;
}

export function Grid({ columns, rows }: GridProps): React.JSX.Element {
  return (
    <div className="grid-container">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {Array.from({ length: columns * rows }).map((_, index) => (
          <div key={index} className="grid-cell" />
        ))}
      </div>
    </div>
  );
}
