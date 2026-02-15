import React from "react";

export type ExtraOptionsProps = {
  title?: string;
  children: React.ReactNode;
};

export function ExtraOptions({ title = "Additional Options", children }: ExtraOptionsProps): React.JSX.Element {
  return (
    <section>
      <h4 className="option-banner">{title}</h4>
      {children}
    </section>
  );
}
