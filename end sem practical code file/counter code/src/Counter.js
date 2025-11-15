import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
      setMessage("");
    } else {
      setMessage("Maximum limit reached");
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setMessage("");
    }
  };

  const reset = () => {
    setCount(0);
    setMessage("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={decrement} disabled={count === 0}>
        Decrement
      </button>
      <button onClick={increment} disabled={count === 10}>
        Increment
      </button>
      <button onClick={reset}>Reset</button>

      {message && <p style={{ color: "red" }}>{message}</p>}
    </div>
  );
}

export default Counter;
