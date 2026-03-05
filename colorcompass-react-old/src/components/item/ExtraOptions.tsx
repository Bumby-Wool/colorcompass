import React from "react";

// Props for the extras section container.
export type ExtraOptionsProps = {
  title?: string;
  children: React.ReactNode;
};

// Section wrapper for additional option toggles.
export function ExtraOptions({ title = "Additional Options", children }: ExtraOptionsProps): React.JSX.Element {
  return (
    <section>
      <h4 className="option-banner">{title}</h4>
      {children}
    </section>
  );
}
