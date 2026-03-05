import React from "react";
import "./ControlPanel.css";

interface ControlPanelProps {
  gridColumns: number;
  gridRows: number;
  onGridColumnsChange: (size: number) => void;
  onGridRowsChange: (size: number) => void;
}

export function ControlPanel({
  gridColumns,
  gridRows,
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
            min="2"
            max="10"
            value={gridColumns}
            onChange={(e) => onGridColumnsChange(e.target.valueAsNumber)}
          />
          <span>×</span>
          <input
            type="number"
            min="2"
            max="10"
            value={gridRows}
            onChange={(e) => onGridRowsChange(e.target.valueAsNumber)}
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
