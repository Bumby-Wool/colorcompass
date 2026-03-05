import React from "react";
import "./ButtonBar.css";

export function ButtonBar(): React.JSX.Element {
  return (
    <div className="button-bar">
      <button className="action-button">Random</button>
      <button className="action-button">Undo</button>
      <button className="action-button">Redo</button>
      <button className="action-button">Clear</button>
      <button className="action-button">Screenshot</button>
    </div>
  );
}
