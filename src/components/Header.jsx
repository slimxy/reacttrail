import React from "react";
// import * as ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Logout from "../pages/Logout";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "../pages/Login";

function Header() {
  const [user] = useAuthState(auth);

  return (
    <div className="header">
      <div className="logo">
        <img
          style={{
            width: "90px",
            height: "40px",
          }}
          src={require("../components/netflix1.png")}
          alt="logo"
        />
      </div>
      <nav>
        {user ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
          </>
        ) : (
          <>
            <Link to="/Register">Register</Link>
            <Link to="/Login "> Login </Link>
          </>
        )}
        <h1>{user?.email}</h1>
        <button onClick={Logout}>Logout</button>
      </nav>
    </div>
  );
}

export default Header;
