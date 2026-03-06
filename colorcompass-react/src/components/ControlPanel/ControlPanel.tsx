import React from "react";
import "./ControlPanel.css";
import type { ColorPattern } from "../../App";

interface ControlPanelProps {
  gridColumns: number;
  gridRows: number;
  patterns: ColorPattern[];
  selectedPattern: ColorPattern | null;
  onPatternSelect: (pattern: ColorPattern | null) => void;
  onGridColumnsChange: (size: number) => void;
  onGridRowsChange: (size: number) => void;
}

export function ControlPanel({
  gridColumns,
  gridRows,
  patterns,
  selectedPattern,
  onPatternSelect,
  onGridColumnsChange,
  onGridRowsChange,
}: ControlPanelProps): React.JSX.Element {

  return (
    <div className="control-panel">
      <div className="grid-size-control">
        <h3>Grid</h3>
        <div>
          <input
            type="number"
            min="1"
            max="10"
            value={gridColumns}
            onChange={(e) => onGridColumnsChange(e.target.valueAsNumber)}
          />
          <span>×</span>
          <input
            type="number"
            min="1"
            max="10"
            value={gridRows}
            onChange={(e) => onGridRowsChange(e.target.valueAsNumber)}
          />
        </div>
      </div>

      <div className="color-columns">
        <h3>Columns</h3>
        <div className="color-grid">
          {patterns.length > 0
            ? patterns.map((pattern) => (
                <div
                  key={pattern.name}
                  className={`color-circle ${selectedPattern?.name === pattern.name ? "selected" : ""}`}
                  title={pattern.name}
                  draggable
                  onClick={() => onPatternSelect(selectedPattern?.name === pattern.name ? null : pattern)}
                  onDragStart={(e) => {
                    e.dataTransfer.effectAllowed = "copy";
                    e.dataTransfer.setData("application/json", JSON.stringify(pattern));
                  }}
                  style={{ backgroundImage: `url(${pattern.imageUrl})` }}
                />
              ))
            : Array.from({ length: 24 }).map((_, index) => <div key={index} className="color-circle" />)}
        </div>
      </div>
    </div>
  );
}
