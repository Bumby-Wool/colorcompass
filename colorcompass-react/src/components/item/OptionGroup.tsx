import React from "react";

export type OptionGroupProps = {
  title: string;
  children: React.ReactNode;
};

export function OptionGroup({ title, children }: OptionGroupProps): JSX.Element {
  return (
    <section>
      <h2 className="option-banner">{title}</h2>
      {children}
    </section>
  );
}
