import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login(e) {
    e.preventDefault();

    try {
      signInWithEmailAndPassword(auth, email, password).then(() =>
        console.log("logged in")
      );
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="main">
      <form>
        <div className="mb-3">
          <label htmlFor="mail" className="form-label">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            id="mail"
            className="form-control "
            style={{ width: "43%", marginLeft: "30%" }}
            placeholder="Enter your Email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password{" "}
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            className="form-control"
            style={{ width: "43%", marginLeft: "30%" }}
            placeholder="Enter your UserName"
          />{" "}
        </div>
        <div className="">
          <button
            className="btn btn-primary"
            type="submit"
            onClick={login}
            style={{
              width: "17%",
              height: "40px",
              borderRadius: "12px",
              border: "none",
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
