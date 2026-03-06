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

const isSamePattern = (
  left: ColorPattern | undefined,
  right: ColorPattern | null,
): boolean => {
  if (!left && !right) {
    return true;
  }

  if (!left || !right) {
    return false;
  }

  return left.name === right.name && left.imageUrl === right.imageUrl;
};

const arePatternMapsEqual = (
  left: Map<number, ColorPattern>,
  right: Map<number, ColorPattern>,
): boolean => {
  if (left.size !== right.size) {
    return false;
  }

  for (const [cellIndex, leftPattern] of left.entries()) {
    const rightPattern = right.get(cellIndex);
    if (!isSamePattern(leftPattern, rightPattern ?? null)) {
      return false;
    }
  }

  return true;
};

export default function App(): React.JSX.Element {
  const [gridColumns, setGridColumns] = useState(3);
  const [gridRows, setGridRows] = useState(3);
  const [cellPatterns, setCellPatterns] = useState<Map<number, ColorPattern>>(new Map());
  const [selectedPattern, setSelectedPattern] = useState<ColorPattern | null>(null);
  const [patterns, setPatterns] = useState<ColorPattern[]>([]);
  const [undoStack, setUndoStack] = useState<Map<number, ColorPattern>[]>([]);
  const [redoStack, setRedoStack] = useState<Map<number, ColorPattern>[]>([]);

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

  const pushUndoState = (snapshot: Map<number, ColorPattern>): void => {
    setUndoStack((prev) => {
      const last = prev[prev.length - 1];
      if (last && arePatternMapsEqual(last, snapshot)) {
        return prev;
      }

      return [...prev, new Map(snapshot)];
    });
  };

  const handleCellPatternChange = (cellIndex: number, pattern: ColorPattern | null): void => {
    if (isSamePattern(cellPatterns.get(cellIndex), pattern)) {
      return;
    }

    setRedoStack([]);
    pushUndoState(cellPatterns);
    const next = new Map(cellPatterns);
    if (pattern === null) {
      next.delete(cellIndex);
    } else {
      next.set(cellIndex, pattern);
    }
    setCellPatterns(next);
  };

  const handleRandomize = (): void => {
    if (patterns.length === 0) {
      return;
    }

    setRedoStack([]);
    pushUndoState(cellPatterns);

    const totalCells = gridColumns * gridRows;
    const newPatterns = new Map<number, ColorPattern>();

    for (let i = 0; i < totalCells; i++) {
      const randomPattern = patterns[Math.floor(Math.random() * patterns.length)];
      newPatterns.set(i, randomPattern);
    }

    setCellPatterns(newPatterns);
  };

  const handleClear = (): void => {
    if (cellPatterns.size === 0) {
      return;
    }

    setRedoStack([]);
    pushUndoState(cellPatterns);
    setCellPatterns(new Map());
  };

  const handleUndo = (): void => {
    if (undoStack.length === 0) {
      return;
    }

    const previousState = undoStack[undoStack.length - 1];
    setRedoStack((redoPrev) => [...redoPrev, new Map(cellPatterns)]);
    setUndoStack((prev) => prev.slice(0, -1));
    setCellPatterns(new Map(previousState));
  };

  const handleRedo = (): void => {
    if (redoStack.length === 0) {
      return;
    }

    const nextState = redoStack[redoStack.length - 1];
    pushUndoState(cellPatterns);
    setRedoStack((prev) => prev.slice(0, -1));
    setCellPatterns(new Map(nextState));
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
        <ButtonBar
          onRandomize={handleRandomize}
          onUndo={handleUndo}
          onRedo={handleRedo}
          onClear={handleClear}
          canUndo={undoStack.length > 0}
          canRedo={redoStack.length > 0}
        />
      </div>
    </BrowserRouter>
  );
}
