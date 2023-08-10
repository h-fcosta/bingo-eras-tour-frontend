import { useState } from "react";
import logo from "../../img/logo.png";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  function toggleNavBar() {
    setIsActive(!isActive);
  }

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        {/* eslint-disable-next-line */}
        <a className="navbar-item" href="#">
          <img src={logo} alt="Logo" width="112" height="28" />
        </a>
        {/* eslint-disable-next-line */}
        <a
          role="button"
          className={`navbar-burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded={isActive}
          onClick={toggleNavBar}
          data-target="navbarBasicExample"
          href="#"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          <a
            href="https://www.setlist.fm/setlists/taylor-swift-3bd6bc5c.html"
            className="navbar-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            Setlists Source
          </a>
          <a
            href="https://www.instagram.com/reel/Ctk10xHtVee/?igshid=MzRlODBiNWFlZA=="
            className="navbar-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inspired By
          </a>
        </div>
      </div>
    </nav>
  );
}
