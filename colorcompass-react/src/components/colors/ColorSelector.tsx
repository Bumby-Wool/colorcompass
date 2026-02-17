import React from "react";
import type { Pattern } from "../../types/builder";

// Picker for fabric and zipper patterns.
export type ColorSelectorProps = {
  colors: Pattern[];
  selectedColor?: Pattern;
  onChange: (color: Pattern) => void;
};

// Resolve a swatch background for solid fills and image patterns.
function getColorBackground(color?: Pattern): string {
  if (color?.name === "Choose a colour" || !color) {
    return "#fff";
  }

  if (color.type === "pattern" || color.type === "zipper") {
    return `center/cover url(${color.imageUrl})`;
  }

  if (color.patternId?.fill) {
    return color.patternId.fill;
  }

  return "#fff";
}

// Dropdown-like color selector with swatch grid.
export function ColorSelector({ colors, selectedColor, onChange }: ColorSelectorProps): React.JSX.Element {
  const [open, setOpen] = React.useState(false);

  // Seed a default color when none is selected yet.
  React.useEffect(() => {
    if (!selectedColor && colors.length > 0) {
      onChange(colors[0]);
    }
  }, [colors, onChange, selectedColor]);

  return (
    <div className="color-selector-container">
      <button className="color-selector" type="button" onClick={() => setOpen((prev) => !prev)}>
        <div className="selected-color">
          <span className="swatch" style={{ background: getColorBackground(selectedColor) }} />
          <span>{selectedColor?.name ?? "Select"}</span>
        </div>
        <span>{open ? "▲" : "▼"}</span>
      </button>
      {open ? (
        <ul className="swatch-list">
          {colors.map((color) => (
            <li
              key={color.name}
              className="swatch"
              onClick={() => onChange(color)}
              style={{ background: getColorBackground(color) }}
              title={color.name}
            />
          ))}
        </ul>
      ) : null}
    </div>
  );
}
