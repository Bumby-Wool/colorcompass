import React from "react";

// Group heading wrapper for option sections.
export type OptionGroupProps = {
  title: string;
  children: React.ReactNode;
};

// Section that wraps multiple option rows.
export function OptionGroup({ title, children }: OptionGroupProps): React.JSX.Element {
  return (
    <section>
      <h2 className="option-banner">{title}</h2>
      {children}
    </section>
  );
}
