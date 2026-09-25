import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleCheck = (e) => {
    e.preventDefault();

    if (number.trim() === "" || isNaN(number)) {
      setMessage("Not a valid number!");
    } else {
      const num = Number(number);
      if (num % 2 === 0) {
        setMessage(`The number ${number.trim()} is even!`);
      } else {
        setMessage(`Oops, ${number.trim()} is odd!`);
      }
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <h2 className="title">Even or Odd Checker</h2>

        <form onSubmit={handleCheck} className="checker-form">
          <input
            type="text"
            name="number"
            placeholder="Enter a number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="number-input"
          />

          <button type="submit" className="check-btn">
            Check
          </button>
        </form>

        {message && <p className="result-message">{message}</p>}
      </div>
    </div>
  );
}

export default App;
