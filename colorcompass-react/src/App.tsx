import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
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
  left: Map<string, ColorPattern>,
  right: Map<string, ColorPattern>,
): boolean => {
  if (left.size !== right.size) {
    return false;
  }

  for (const [cellKey, leftPattern] of left.entries()) {
    const rightPattern = right.get(cellKey);
    if (!isSamePattern(leftPattern, rightPattern ?? null)) {
      return false;
    }
  }

  return true;
};

const toSameOriginImageUrl = (imageUrl?: string): string | undefined => {
  if (!imageUrl) {
    return imageUrl;
  }

  try {
    const url = new URL(imageUrl);

    if (url.hostname === "www.bumbywool.com") {
      return `/bumby-assets${url.pathname}`;
    }

    return imageUrl;
  } catch {
    return imageUrl;
  }
};

const loadImage = (src: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));

    img.src = src;
  });

export default function App(): React.JSX.Element {
  const [gridColumns, setGridColumns] = useState(3);
  const [gridRows, setGridRows] = useState(3);
  const [cellPatterns, setCellPatterns] = useState<Map<string, ColorPattern>>(new Map());
  const [selectedPattern, setSelectedPattern] = useState<ColorPattern | null>(null);
  const [patterns, setPatterns] = useState<ColorPattern[]>([]);
  const [undoStack, setUndoStack] = useState<Map<string, ColorPattern>[]>([]);
  const [redoStack, setRedoStack] = useState<Map<string, ColorPattern>[]>([]);

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

        const availablePatterns = data
          .filter((pattern) => pattern.type === "pattern" && typeof pattern.imageUrl === "string")
          .map((pattern) => ({
            ...pattern,
            imageUrl: toSameOriginImageUrl(pattern.imageUrl),
          }));

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

  const getCellKey = (row: number, column: number): string => `${row},${column}`;

  const pushUndoState = (snapshot: Map<string, ColorPattern>): void => {
    setUndoStack((prev) => {
      const last = prev[prev.length - 1];
      if (last && arePatternMapsEqual(last, snapshot)) {
        return prev;
      }

      return [...prev, new Map(snapshot)];
    });
  };

  const handleCellPatternChange = (
    rowIndex: number,
    columnIndex: number,
    pattern: ColorPattern | null,
  ): void => {
    const cellKey = getCellKey(rowIndex, columnIndex);
    if (isSamePattern(cellPatterns.get(cellKey), pattern)) {
      return;
    }

    setRedoStack([]);
    pushUndoState(cellPatterns);
    const next = new Map(cellPatterns);
    if (pattern === null) {
      next.delete(cellKey);
    } else {
      next.set(cellKey, pattern);
    }
    setCellPatterns(next);
  };

  const handleRandomize = (): void => {
    if (patterns.length === 0) {
      return;
    }

    setRedoStack([]);
    pushUndoState(cellPatterns);

    const newPatterns = new Map<string, ColorPattern>();

    for (let row = 0; row < gridRows; row++) {
      for (let column = 0; column < gridColumns; column++) {
        const randomPattern = patterns[Math.floor(Math.random() * patterns.length)];
        newPatterns.set(getCellKey(row, column), randomPattern);
      }
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

  const handleGridColumnsChange = (value: number): void => {
    const nextColumns = sanitizeGridDimension(value, gridColumns);
    if (nextColumns === gridColumns) {
      return;
    }

    setGridColumns(nextColumns);
    setUndoStack([]);
    setRedoStack([]);
  };

  const handleGridRowsChange = (value: number): void => {
    const nextRows = sanitizeGridDimension(value, gridRows);
    if (nextRows === gridRows) {
      return;
    }

    setGridRows(nextRows);
    setUndoStack([]);
    setRedoStack([]);
  };

  const handleScreenshot = async (): Promise<void> => {
    const cellSize = 100;
    const canvas = document.createElement("canvas");
    canvas.width = gridColumns * cellSize;
    canvas.height = gridRows * cellSize;

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      console.error("Could not create canvas context");
      return;
    }

    for (let row = 0; row < gridRows; row++) {
      for (let column = 0; column < gridColumns; column++) {
        const x = column * cellSize;
        const y = row * cellSize;

        ctx.fillStyle = "#ffffff";
        ctx.fillRect(x, y, cellSize, cellSize);

        ctx.strokeStyle = "#ddd";
        ctx.strokeRect(x, y, cellSize, cellSize);
      }
    }

    for (let row = 0; row < gridRows; row++) {
      for (let column = 0; column < gridColumns; column++) {
        const cellKey = getCellKey(row, column);
        const pattern = cellPatterns.get(cellKey);

        if (!pattern?.imageUrl) {
          continue;
        }

        try {
          const img = await loadImage(pattern.imageUrl);
          const x = column * cellSize;
          const y = row * cellSize;

          ctx.drawImage(img, x, y, cellSize, cellSize);

          ctx.strokeStyle = "#ddd";
          ctx.strokeRect(x, y, cellSize, cellSize);
        } catch (error) {
          console.error(`Failed to draw image for cell ${row},${column}`, error);
        }
      }
    }

    canvas.toBlob((blob) => {
      if (!blob) {
        console.error("Screenshot export failed: canvas.toBlob returned null");
        return;
      }

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = `color-grid-${Date.now()}.png`;
      link.href = url;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 1000);
    }, "image/png");
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
            onGridColumnsChange={handleGridColumnsChange}
            onGridRowsChange={handleGridRowsChange}
          />
        </div>
        <ButtonBar
          onRandomize={handleRandomize}
          onUndo={handleUndo}
          onRedo={handleRedo}
          onClear={handleClear}
          onScreenshot={handleScreenshot}
          canUndo={undoStack.length > 0}
          canRedo={redoStack.length > 0}
        />
      </div>
    </BrowserRouter>
  );
}