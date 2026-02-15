import React from "react";
import { Link } from "react-router-dom";

export function NavBar(): JSX.Element {
  return (
    <nav className="nav">
      <Link className="nav-home" to="/">
        Logo
      </Link>
      <Link className="nav-link" to="/">
        All Items
      </Link>
    </nav>
  );
}
