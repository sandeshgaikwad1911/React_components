/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";

function App() {
  const Sizes = ["Regular", "Medium", "Large"];

  const [selectedSize, setSelectedSize] = useState("Regular");

  const handleChange = (e) => {
    setSelectedSize(e.target.value);
  };

  return (
    <div className="app">
      <div className="radio">
        <div className="radio-options">
          <div className="single-radio">
            <input
              type="radio" id="regular" name="pizza-size" value="Regular" onChange={handleChange} checked={selectedSize=="Regular"}/>
            <label htmlFor="regular">Regular</label>
          </div>

          <div className="single-radio">
            <input type="radio" id="medium" name="pizza-size" value="Medium" onChange={handleChange} checked={selectedSize=="Medium"}/>
            <label htmlFor="medium">Medium</label>
          </div>

          <div className="single-radio">
            <input type="radio" id="large" name="pizza-size" value="Large" onChange={handleChange} checked={selectedSize=="Large"}/>
            <label htmlFor="large">Large</label>
          </div>
        </div>

        <div className="selected">
          <p>selectedt size is <strong>{selectedSize}</strong></p>
        </div>
      </div>
    </div>
  );
}

export default App;
