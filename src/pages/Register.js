import React from "react";
function Register() {
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
          <label htmlFor="mail" className="form-label">
            Email
          </label>
          <input
            type="text"
            id="mail"
            className="form-control "
            style={{ width: "43%", marginLeft: "30%" }}
            placeholder="Enter your Email"
          />
        </div>
        <div className="">
          <button
            className="btn btn-primary"
            type="submit"
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
