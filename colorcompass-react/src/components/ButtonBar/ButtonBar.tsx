import React from "react";
import "./ButtonBar.css";

export function ButtonBar(): React.JSX.Element {
  return (
    <div className="button-bar">
      <button className="action-button" type="button">
        <i className="fas fa-random action-button-icon" aria-hidden="true" />
        <span>Random</span>
      </button>
      <button className="action-button" type="button">
        <i className="fas fa-undo action-button-icon" aria-hidden="true" />
        <span>Undo</span>
      </button>
      <button className="action-button" type="button">
        <i className="fas fa-redo action-button-icon" aria-hidden="true" />
        <span>Redo</span>
      </button>
      <button className="action-button" type="button">
        <i className="fas fa-eraser action-button-icon" aria-hidden="true" />
        <span>Clear</span>
      </button>
      <button className="action-button" type="button">
        <i className="fas fa-camera action-button-icon" aria-hidden="true" />
        <span>Screenshot</span>
      </button>
    </div>
  );
}
