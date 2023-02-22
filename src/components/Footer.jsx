import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <img
          className="img"
          style={{
            width: "90px",
            height: "40px",
          }}
          src={require("../components/netflix1.png")}
          alt="logo"
        />
      </div>
      <div className="links">
        <Link to="/"> Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        {/* <Link to="/Register">Register</Link> */}
        {/* <Link to="/Login">Login</Link> */}
      </div>
    </div>
  );
}

export default Footer;
