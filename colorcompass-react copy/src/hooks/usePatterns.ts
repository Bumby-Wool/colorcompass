import React from "react";
import type { Pattern } from "../types/builder";
import { loadPatterns } from "../services/patternService";

// Shape of pattern loading state for UI components.
export type PatternsState = {
  patterns: Pattern[];
  zippers: Pattern[];
  isLoading: boolean;
  error: string | null;
};

// Default state before pattern data loads.
const initialState: PatternsState = {
  patterns: [],
  zippers: [],
  isLoading: true,
  error: null,
};

// Load patterns once and split them into fabric and zipper sets.
export function usePatterns(): PatternsState {
  const [state, setState] = React.useState<PatternsState>(initialState);

  // Keep state updates safe when the component unmounts mid-fetch.
  React.useEffect(() => {
    let isMounted = true;
    loadPatterns()
      .then((patterns) => {
        if (!isMounted) {
          return;
        }
        setState({
          patterns: patterns.filter((pattern) => pattern.type === "pattern"),
          zippers: patterns.filter((pattern) => pattern.type === "zipper"),
          isLoading: false,
          error: null,
        });
      })
      .catch((error) => {
        if (!isMounted) {
          return;
        }
        setState({
          patterns: [],
          zippers: [],
          isLoading: false,
          error: error instanceof Error ? error.message : "Failed to load patterns.",
        });
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return state;
}
