import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Grid } from "./components/Grid/Grid";
import { ControlPanel } from "./components/ControlPanel/ControlPanel";
import { ButtonBar } from "./components/ButtonBar/ButtonBar";

export default function App(): React.JSX.Element {
  const [gridSize, setGridSize] = useState(3);

  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <div className="main-layout">
          <Grid gridSize={gridSize} />
          <ControlPanel gridSize={gridSize} onGridSizeChange={setGridSize} />
        </div>
        <ButtonBar />
      </div>
    </BrowserRouter>
  );
}
