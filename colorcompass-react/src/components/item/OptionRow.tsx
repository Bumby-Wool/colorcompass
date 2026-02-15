import React from "react";

export type OptionRowProps = {
  label: string;
  children?: React.ReactNode;
};

export function OptionRow({ label, children }: OptionRowProps): React.JSX.Element {
  return (
    <div>
      <label className="option-label">{label}</label>
      {children}
    </div>
  );
}
