import React from "react";
import "./ControlPanel.css";
import type { ColorPattern } from "../../App";

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
  const [patterns, setPatterns] = React.useState<ColorPattern[]>([]);

  React.useEffect(() => {
    let isMounted = true;

    fetch("/color_patterns.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load color patterns.");
        }

        return response.json() as Promise<ColorPattern[]>;
      })
      .then((data) => {
        if (!isMounted) {
          return;
        }

        const availablePatterns = data.filter(
          (pattern) => pattern.type === "pattern" && typeof pattern.imageUrl === "string",
        );
        setPatterns(availablePatterns);
      })
      .catch(() => {
        if (isMounted) {
          setPatterns([]);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

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
          {patterns.length > 0
            ? patterns.map((pattern) => (
                <div
                  key={pattern.name}
                  className="color-circle"
                  title={pattern.name}
                  draggable
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
