import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Grid } from "./components/Grid/Grid";
import { ControlPanel } from "./components/ControlPanel/ControlPanel";
import { ButtonBar } from "./components/ButtonBar/ButtonBar";

export type ColorPattern = {
  name: string;
  type?: string;
  imageUrl?: string;
};

export default function App(): React.JSX.Element {
  const [gridColumns, setGridColumns] = useState(3);
  const [gridRows, setGridRows] = useState(3);
  const [cellPatterns, setCellPatterns] = useState<Map<number, ColorPattern>>(new Map());

  const sanitizeGridDimension = (value: number, fallback: number): number => {
    if (!Number.isFinite(value)) {
      return fallback;
    }

    return Math.min(10, Math.max(2, Math.trunc(value)));
  };

  const handleCellPatternChange = (cellIndex: number, pattern: ColorPattern | null): void => {
    setCellPatterns((prev) => {
      const next = new Map(prev);
      if (pattern === null) {
        next.delete(cellIndex);
      } else {
        next.set(cellIndex, pattern);
      }
      return next;
    });
  };

  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <div className="main-layout">
          <Grid 
            columns={gridColumns} 
            rows={gridRows} 
            cellPatterns={cellPatterns}
            onCellPatternChange={handleCellPatternChange}
          />
          <ControlPanel
            gridColumns={gridColumns}
            gridRows={gridRows}
            onGridColumnsChange={(value) =>
              setGridColumns((current) => sanitizeGridDimension(value, current))
            }
            onGridRowsChange={(value) =>
              setGridRows((current) => sanitizeGridDimension(value, current))
            }
          />
        </div>
        <ButtonBar />
      </div>
    </BrowserRouter>
  );
}
