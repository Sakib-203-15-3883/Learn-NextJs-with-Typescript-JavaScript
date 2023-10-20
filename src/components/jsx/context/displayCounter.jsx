"use client";
//here, we import useCounter component and use all the data that counter context provided.

import { useCounter } from "./index";

const DisplayCounter = () => {
  const { count } = useCounter();
  const { increment, decrement } = useCounter();

  return (
    <div>
      <div>Counter Value: {count}</div>
      <button onClick={increment}>Increment</button>
      <br />
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default DisplayCounter;
