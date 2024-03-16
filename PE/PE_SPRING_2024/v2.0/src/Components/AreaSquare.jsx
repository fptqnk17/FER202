import React, { useState } from "react";
import "../assets/AreaSquare.css";

const SquareAreaCalculator = () => {
  const [sideLength, setSideLength] = useState("");
  const [area, setArea] = useState("");

  const calculateArea = () => {
    setArea(sideLength * sideLength);
  };

  return (
    <div className="square">
      <h2>Square Area Calculator</h2>
      <input
        type="number"
        value={sideLength}
        onChange={(e) => setSideLength(e.target.value)}
        placeholder="Enter the side length"
      />
      <button onClick={calculateArea}>Calculate Area</button>
      {area && <p>The area of the square is {area}</p>}
    </div>
  );
};

export default SquareAreaCalculator;
