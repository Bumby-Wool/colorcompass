import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

// Top navigation for the color grid app.
export function NavBar(): React.JSX.Element {
    // Uncomment here and below to enable Home button and mobile menu
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const navLinks = [
  //   {
  //     label: "Home",
  //     to: "/",
  //   },
  // ];

  return (
    <nav className="nav">
      <Link className="nav-home" to="/">
        <img src="/resources/LOGO-5-PNG-TRANSPARENT.png" alt="Bumby Wool Logo" />
      </Link>
      {/* <div className="nav-links">
        {navLinks.slice(0, 1).map((link) => (
          <Link key={link.label} className="nav-link" to={link.to}>
            {link.label}
          </Link>
        ))}
      </div> */}
      {/* <button
        className="nav-toggle"
        type="button"
        aria-label="Open menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
      </button>
      <div
        className={`nav-overlay${isMenuOpen ? " is-open" : ""}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      />
      <aside className={`nav-drawer${isMenuOpen ? " is-open" : ""}`}>
        <div className="nav-drawer-header">
          <span>Menu</span>
          <button
            className="nav-close"
            type="button"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
          >
            ×
          </button>
        </div>
        <div className="nav-drawer-links">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              className="nav-drawer-link"
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </aside> */}
    </nav>
  );
}