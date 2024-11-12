// src/components/Navbar.jsx
// import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          {" "}
          <span>Tech Uni</span>Guide
        </Link>{" "}
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
        <li>
          <a href="#feedback">Feedback</a>
        </li>
        <li>
          <Link to="/Login">{"Login"}</Link>
        </li>
        <li>
          <Link to="/Signup">{"Signup"}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
