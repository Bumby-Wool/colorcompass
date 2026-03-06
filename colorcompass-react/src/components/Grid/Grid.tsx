import React from "react";
import "./Grid.css";
import type { ColorPattern } from "../../App";

interface GridProps {
  columns: number;
  rows: number;
  cellPatterns: Map<number, ColorPattern>;
  onCellPatternChange: (cellIndex: number, pattern: ColorPattern | null) => void;
}

export function Grid({ columns, rows, cellPatterns, onCellPatternChange }: GridProps): React.JSX.Element {
  const handleDragOver = (e: React.DragEvent): void => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, cellIndex: number): void => {
    e.preventDefault();
    const patternData = e.dataTransfer.getData("application/json");
    if (patternData) {
      try {
        const pattern = JSON.parse(patternData) as ColorPattern;
        onCellPatternChange(cellIndex, pattern);
      } catch (error) {
        console.error("Failed to parse pattern data", error);
      }
    }
  };
  return (
    <div className="grid-container">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {Array.from({ length: columns * rows }).map((_, index) => {
          const pattern = cellPatterns.get(index);
          return (
            <div
              key={index}
              className="grid-cell"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              style={{
                backgroundImage: pattern?.imageUrl ? `url(${pattern.imageUrl})` : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
