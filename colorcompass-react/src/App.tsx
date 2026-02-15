import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { ItemListPage } from "./pages/ItemListPage";
import { ItemPage } from "./pages/ItemPage";
import { SvgTestPage } from "./pages/SvgTestPage";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<ItemListPage />} />
            <Route path="/items/:itemId" element={<ItemPage />} />
            <Route path="/svgtest" element={<SvgTestPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
