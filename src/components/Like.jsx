import React, { Component } from "react";
const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";

  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      // className=" fa fa-heart-o"
    ></i>
  );

};

export default Like;
