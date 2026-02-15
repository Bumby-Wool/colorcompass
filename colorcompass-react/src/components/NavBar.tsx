import React from "react";
import { Link } from "react-router-dom";

export function NavBar(): React.JSX.Element {
  return (
    <nav className="nav">
      <Link className="nav-home" to="/">
        <img src="/resources/LOGO-5-PNG-TRANSPARENT.png" alt="Bumby Wool Logo" />
      </Link>
      <Link className="nav-link" to="/">
        All Items
      </Link>
    </nav>
  );
}
