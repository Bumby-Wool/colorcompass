import React from "react";

export type ColorOption = {
  name: string;
  type?: string;
  imageUrl?: string;
  patternId?: { fill: string };
};

export type ColorSelectorProps = {
  colors: ColorOption[];
  selectedColor?: ColorOption;
  onChange: (color: ColorOption) => void;
};

export function ColorSelector({ colors, selectedColor, onChange }: ColorSelectorProps): React.JSX.Element {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="color-selector-container">
      <button className="color-selector" type="button" onClick={() => setOpen((prev) => !prev)}>
        <div className="selected-color">
          <span className="swatch" />
          <span>{selectedColor?.name ?? "Select"}</span>
        </div>
        <span>{open ? "▲" : "▼"}</span>
      </button>
      {open ? (
        <ul className="swatch-list">
          {colors.map((color) => (
            <li key={color.name} className="swatch" onClick={() => onChange(color)} />
          ))}
        </ul>
      ) : null}
    </div>
  );
}
