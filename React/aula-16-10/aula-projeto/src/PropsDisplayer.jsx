import React from "react";

function PropsDisplayer(props) {
  return (
    <div>
      <h1>CHECK OUT MY PROPS OBJECT</h1>
      <h2>{props.myProps}</h2>
    </div>
  );
}

export default PropsDisplayer;
