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
  const [selectedPattern, setSelectedPattern] = useState<ColorPattern | null>(null);
  const [patterns, setPatterns] = useState<ColorPattern[]>([]);

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

  const sanitizeGridDimension = (value: number, fallback: number): number => {
    if (!Number.isFinite(value)) {
      return fallback;
    }

    return Math.min(10, Math.max(1, Math.trunc(value)));
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

  const handleRandomize = (): void => {
    if (patterns.length === 0) {
      return;
    }

    const totalCells = gridColumns * gridRows;
    const newPatterns = new Map<number, ColorPattern>();

    for (let i = 0; i < totalCells; i++) {
      const randomPattern = patterns[Math.floor(Math.random() * patterns.length)];
      newPatterns.set(i, randomPattern);
    }

    setCellPatterns(newPatterns);
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
            selectedPattern={selectedPattern}
            onCellPatternChange={handleCellPatternChange}
          />
          <ControlPanel
            gridColumns={gridColumns}
            gridRows={gridRows}
            patterns={patterns}
            selectedPattern={selectedPattern}
            onPatternSelect={setSelectedPattern}
            onGridColumnsChange={(value) =>
              setGridColumns((current) => sanitizeGridDimension(value, current))
            }
            onGridRowsChange={(value) =>
              setGridRows((current) => sanitizeGridDimension(value, current))
            }
          />
        </div>
        <ButtonBar onRandomize={handleRandomize} />
      </div>
    </BrowserRouter>
  );
}
