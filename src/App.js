// src/Calculator.js
import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEvaluate = () => {
    try {
      // Evaluate the expression
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handlePercent = () => {
    // Calculate percentage (e.g., 50% will be 50 / 100)
    if (input) {
      setInput((parseFloat(input) / 100).toString());
    }
  };

  const handleIncrementBy2 = () => {
    // Increment the current number by 2
    if (input) {
      setInput((parseFloat(input) + 2).toString());
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleEvaluate}>=</button>
        {/* Add new feature: Increment by 2 */}
        <button onClick={handleIncrementBy2}>+2</button>
        {/* Add percentage button */}
        <button onClick={handlePercent}>%</button>
      </div>
    </div>
  );
};






export default Calculator;
