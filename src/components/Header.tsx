import React from "react";
import logo from "../media/nytimes-logo-png--1638.png";
import { Link } from "react-router-dom";

export default () => (
  <nav className="header center">
    <div id="logo">
      <Link to="/">
        <img id="logo-image" alt="logo" src={logo} />
      </Link>
    </div>
    <ul>
      <li>
        <Link to="/reviews">Reviews</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  </nav>
);
