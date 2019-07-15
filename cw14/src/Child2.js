import React from "react";

function Child2(props) {
  console.log("myStyle", props);
  return <div style={props.myStyle}>qqq{JSON.stringify(props)}</div>;
}

export default Child2;
