import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState();

  return (
    <div>
      <p>The toggle is {toggle}</p>
      <button onClick={() => setToggle("ON")}>On</button>
      <button onClick={() => setToggle("OFF")}>Off</button>
    </div>
  );
}

export default Toggle;
