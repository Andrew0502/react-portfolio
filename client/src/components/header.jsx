import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
    <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#363695" }}
      >
        <span className="navbar-brand mb-0 h1">
          {/* <NavLink to="/">

          </NavLink> */}
        </span>

        <ul class="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink to="/" style={{ color: "white" }}>
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/portfolio" style={{ color: "white" }}>
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" style={{ color: "white" }}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <header
        style={{ height: "5px", background: "goldenrod" }}
      ></header>
    </>
  );
}
export default Header;