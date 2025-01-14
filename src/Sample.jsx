import React, { useState } from "react";

const Sample = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleInput = (e) => {
    setInput(input + e.target.value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input)); // Caution: eval can be risky, consider safer alternatives for production
    } catch (error) {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult(null);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Calculator</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={input}
          readOnly
          style={{ width: "200px", textAlign: "right", fontSize: "16px" }}
        />
        <div>{result !== null ? <h3>Result: {result}</h3> : null}</div>
      </div>
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button
            key={num}
            value={num}
            onClick={handleInput}
            style={{ margin: "5px", padding: "10px", fontSize: "16px" }}
          >
            {num}
          </button>
        ))}
        {["+", "-", "*", "/"].map((op) => (
          <button
            key={op}
            value={op}
            onClick={handleInput}
            style={{ margin: "5px", padding: "10px", fontSize: "16px" }}
          >
            {op}
          </button>
        ))}
        <div style={{ marginTop: "10px" }}>
          <button
            onClick={clearInput}
            style={{ margin: "5px", padding: "10px", fontSize: "16px" }}
          >
            Clear
          </button>
          <button
            onClick={calculateResult}
            style={{ margin: "5px", padding: "10px", fontSize: "16px" }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sample;
