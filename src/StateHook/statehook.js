import React, { useState } from "react";

const StateHook = () => {
  const check = () => {
    console.log("checked succesfully");
  };

  const [count, setCount] = useState(10);
  const [name, setName] = useState(()=>{check()});  

  const increment = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
    setCount((prevCount) => {
      return prevCount + 1;
    });
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  const decrement = () => {
    setCount((prevCount) => {
      return prevCount - 1;
    });
    setCount((prevCount) => {
      return prevCount - 1;
    });
    setCount((prevCount) => {
      return prevCount - 1;
    });
  };

  return (
    <div>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default StateHook;
