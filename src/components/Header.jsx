import React from "react";
// import * as ReactDOM from "react-dom";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div className="logo"></div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Register">Register</Link>
        <Link to="/Login">Login</Link>
      </nav>
    </div>
  );
}

export default Header;
