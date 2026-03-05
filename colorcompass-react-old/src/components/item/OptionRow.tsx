import React from "react";

// Single option row label + content wrapper.
export type OptionRowProps = {
  label: string;
  children?: React.ReactNode;
};

// Layout wrapper for one option control.
export function OptionRow({ label, children }: OptionRowProps): React.JSX.Element {
  return (
    <div>
      <label className="option-label">{label}</label>
      {children}
    </div>
  );
}
