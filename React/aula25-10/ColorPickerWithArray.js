import React, { useState } from "react";

const colorNames = [
  "Aquamarine",
  "BlueViolet",
  "Chartreuse",
  "CornflowerBlue",
  "green",
  "red"
];

function ColorPickerWithArray() {
  const [color, setColor] = useState("Tomato");
  const divStyle = { backgroundColor: color };

  return (
    <div style={divStyle}>
      <p>The color is {color}</p>
      {colorNames.map((colorName) => (
        <button onClick={() => setColor(colorName)}>{colorName}</button>
      ))}
    </div>
  );
}

export default ColorPickerWithArray;