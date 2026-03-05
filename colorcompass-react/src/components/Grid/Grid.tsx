import React from "react";
import "./Grid.css";

interface GridProps {
  gridSize: number;
}

export function Grid({ gridSize }: GridProps): React.JSX.Element {
  return (
    <div className="grid-container">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
        }}
      >
        {Array.from({ length: gridSize * gridSize }).map((_, index) => (
          <div key={index} className="grid-cell" />
        ))}
      </div>
    </div>
  );
}
