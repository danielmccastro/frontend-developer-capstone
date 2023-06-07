import React from "react";
import LittleLemonLogo from "../assets/Logo.png";

function Header() {
  return (
    <header className="navbar-border">
      <div className="container">
        <nav className="navbar navbar-expand-lg nav-bar-border">
          <div class="container-fluid">
            <a class="navbar-brand" href="">
              <img
                className="header-logo"
                src={LittleLemonLogo}
                alt="Little Lemon Logo"
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">
                    Menu
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">
                    Reservations
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">
                    Order Online
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">
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
