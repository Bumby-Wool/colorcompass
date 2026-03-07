import React from "react";
import "./Grid.css";
import type { ColorPattern } from "../../App";

interface GridProps {
  columns: number;
  rows: number;
  cellPatterns: Map<string, ColorPattern>;
  selectedPattern: ColorPattern | null;
  onCellPatternChange: (rowIndex: number, columnIndex: number, pattern: ColorPattern | null) => void;
}

export function Grid({ columns, rows, cellPatterns, selectedPattern, onCellPatternChange }: GridProps): React.JSX.Element {
  const handleDragOver = (e: React.DragEvent): void => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, rowIndex: number, columnIndex: number): void => {
    e.preventDefault();
    const patternData = e.dataTransfer.getData("application/json");
    if (patternData) {
      try {
        const pattern = JSON.parse(patternData) as ColorPattern;
        onCellPatternChange(rowIndex, columnIndex, pattern);
      } catch (error) {
        console.error("Failed to parse pattern data", error);
      }
    }
  };

  const handleCellClick = (rowIndex: number, columnIndex: number): void => {
    if (selectedPattern) {
      onCellPatternChange(rowIndex, columnIndex, selectedPattern);
    }
  };

  const getCellKey = (rowIndex: number, columnIndex: number): string => `${rowIndex},${columnIndex}`;

  const cells = Array.from({ length: rows }, (_, rowIndex) =>
    Array.from({ length: columns }, (_, columnIndex) => ({ rowIndex, columnIndex })),
  ).flat();

  return (
    <div className="grid-container">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {cells.map(({ rowIndex, columnIndex }) => {
          const pattern = cellPatterns.get(getCellKey(rowIndex, columnIndex));
          return (
            <div
              key={getCellKey(rowIndex, columnIndex)}
              className="grid-cell"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, rowIndex, columnIndex)}
              onClick={() => handleCellClick(rowIndex, columnIndex)}
              style={{
                backgroundImage: pattern?.imageUrl ? `url(${pattern.imageUrl})` : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {pattern && <p className="grid-tooltip">{pattern.name}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
