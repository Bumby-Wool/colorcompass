import React, { useState } from "react";
import { Link } from "react-router-dom";

// Top navigation for the builder pages.
export function NavBar(): React.JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    {
      label: "All Items",
      to: "/",
    },
  ];

  return (
    <nav className="nav">
      <Link className="nav-home" to="/" onClick={() => setIsMenuOpen(false)}>
        <img src="/resources/LOGO-5-PNG-TRANSPARENT.png" alt="Bumby Wool Logo" />
      </Link>
      <div className="nav-links">
        {navLinks.map((link) => (
          <Link key={link.label} className="nav-link" to={link.to}>
            {link.label}
          </Link>
        ))}
      </div>
      <button
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
      </aside>
    </nav>
  );
}
