import React from "react";
import LittleLemonLogo from "../assets/Logo.png";

function Header() {
  return (
    <header className="navbar-border">
      <div className="container">
        <nav className="navbar navbar-expand-lg nav-bar-border">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                className="header-logo"
                src={LittleLemonLogo}
                alt="Little Lemon Logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Menu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/booking">
                    Reservations
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Order Online
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
