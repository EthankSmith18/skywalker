import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <a className="navbar-brand  text-primary p-1" href="/" >
        SkyWalker API
      </a>
      <button
        className="navbar-toggler bg-white"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <a className="nav-link text-danger" href="/planets">
              Planets
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-danger"  href="/people">
              People
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
