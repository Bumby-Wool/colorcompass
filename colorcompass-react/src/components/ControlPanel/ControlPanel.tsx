import React from "react";
import "./ControlPanel.css";

interface ControlPanelProps {
  gridSize: number;
  onGridSizeChange: (size: number) => void;
}

export function ControlPanel({
  gridSize,
  onGridSizeChange,
}: ControlPanelProps): React.JSX.Element {
  return (
    <div className="control-panel">
      <div className="grid-size-control">
        <h3>Grid</h3>
        <div>
          <input
            type="number"
            min="2"
            max="10"
            value={gridSize}
            onChange={(e) => onGridSizeChange(Number(e.target.value))}
          />
          <span>×</span>
          <input
            type="number"
            min="2"
            max="10"
            value={gridSize}
            onChange={(e) => onGridSizeChange(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="color-columns">
        <h3>Columns</h3>
        <div className="color-grid">
          {Array.from({ length: 24 }).map((_, index) => (
            <div key={index} className="color-circle" />
          ))}
        </div>
      </div>
    </div>
  );
}
