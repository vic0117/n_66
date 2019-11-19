import React from "react";

// stateless function (sfc)
const Like = props => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      className={classes}
      style={{
        cursor: "pointer",
        color: "#f06292"
      }}
      onClick={props.onClick}
    ></i>
  );
};

export default Like;
