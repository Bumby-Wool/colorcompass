import React from "react";

// Props for selecting a variant label.
export type VariantSelectorProps = {
  label?: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

// Simple select control for switching variants.
export function VariantSelector({ label = "Type", value, options, onChange }: VariantSelectorProps): React.JSX.Element {
  return (
    <label className="option-label">
      <span className="option-banner">{label}</span>
      <select className="type-selector" value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
