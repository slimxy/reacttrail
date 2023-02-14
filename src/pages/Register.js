import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function register(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password);
  }

  return (
    <div className="main">
      <form>
        <div className="mb-3">
          <label htmlFor="fname" className="form-label">
            FirstName
          </label>
          <input
            type="text"
            id="fname"
            className="form-control"
            style={{ width: "43%", marginLeft: "30%" }}
            placeholder="Enter your FirstName"
          />{" "}
        </div>
        <div className="mb-3">
          <label htmlFor="lname" className="form-label">
            LastName
          </label>
          <input
            type="text"
            id="lname"
            className="form-control"
            style={{ width: "43%", marginLeft: "30%" }}
            placeholder="Enter your LastName"
          />
        </div>
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
        </div>{" "}
        <div className="mb-3">
          <label htmlFor="uname" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="uname"
            className="form-control"
            style={{ width: "43%", marginLeft: "30%" }}
            placeholder="Enter your UserName"
          />{" "}
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
            onClick={register}
            style={{
              width: "17%",
              height: "40px",
              borderRadius: "12px",
              border: "none",
            }}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
