import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState("");
  const [ans, setAns] = useState("0");

  function handle(val) {
    setCount(count + val.target.value);
  }

  function allClear() {
    setCount("");
    setAns("0");
  }

  function clear() {
    setCount(count.slice(0, -1));
  }

  function answer() {
    try {
      setAns(new Function(`return ${count}`)());
    } catch {
      setAns("Error");
    }
  }

  return (
    <>
      <div className="upperbox"></div>
      <div className="lowerbox"></div>
      <div className="container">
        <h2>{count}</h2>
        <h1>{ans}</h1>
        <hr />
        <div className="buttons">
          <button className="ac" onClick={allClear}>AC</button>
          <button className="c" onClick={clear}>C</button>
          <button className="squareroot" value={"(-1)*"} onClick={handle}>+/-</button>
          <button className="division" value={"/"} onClick={handle}>/</button>
          <button className="seven" value={7} onClick={handle}>7</button>
          <button className="eight" value={8} onClick={handle}>8</button>
          <button className="nine" value={9} onClick={handle}>9</button>
          <button className="multiply" value={"*"} onClick={handle}>*</button>
          <button className="four" value={4} onClick={handle}>4</button>
          <button className="five" value={5} onClick={handle}>5</button>
          <button className="six" value={6} onClick={handle}>6</button>
          <button className="minus" value={"-"} onClick={handle}>-</button>
          <button className="one" value={1} onClick={handle}>1</button>
          <button className="two" value={2} onClick={handle}>2</button>
          <button className="three" value={3} onClick={handle}>3</button>
          <button className="plus" value={"+"} onClick={handle}>+</button>
          <button className="blank" value={"00"} onClick={handle}>00</button>
          <button className="zero" value={0} onClick={handle}>0</button>
          <button className="dot" value={"."} onClick={handle}>.</button>
          <button className="equal" onClick={answer}>=</button>
        </div>
      </div>
    </>
  );
}

export default App;
