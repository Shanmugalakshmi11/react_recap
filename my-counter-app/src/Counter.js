// src/Counter.js
import React, { useState, useEffect } from "react";

const Counter = () => {
  // Step 3: Using useState to create a state variable for the count
  const [count, setCount] = useState(0);

  // Step 4: Using useEffect to increment the count every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
