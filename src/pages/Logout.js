import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Logout = () => {
  signOut(auth);
};

export default Logout;
