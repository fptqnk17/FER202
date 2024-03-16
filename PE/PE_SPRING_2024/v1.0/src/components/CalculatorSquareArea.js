import { useState } from "react";
import NavbarComponent from "./NavbarComponent";

const CalculatorSquareArea = () => {
  const [sideLength, setSideLength] = useState(0);
  const [area, setArea] = useState(0);

  const calculateArea = () => {
    setArea(sideLength * sideLength);
  };

  return (
    <>
      <NavbarComponent />
      <div className="container">
        <h1 className="text-center my-3">Calculator Square Area</h1>
        <>
          <div className="form-group">
            <label htmlFor="sideLength" className="font-weight-bold">
              Enter n
            </label>
            <input
              type="number"
              className="form-control mb-3"
              value={sideLength}
              id="sideLength"
              placeholder="Enter side length"
              onChange={(e) => setSideLength(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline-primary mb-3"
            onClick={calculateArea}
          >
            Calculate
          </button>
        </>
        <p>The area of the square is: {area}</p>
      </div>
    </>
  );
};

export default CalculatorSquareArea;
