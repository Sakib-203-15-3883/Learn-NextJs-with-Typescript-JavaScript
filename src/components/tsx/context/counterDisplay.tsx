"use client";
import { useCounter } from "./index";



const CounterDisplay:React.FC = () => {
  const { count } = useCounter();

  const { increment, decrement } = useCounter();

  return (
    <>
      <h1>Initial Value = {count}</h1>
      <div>
      <button onClick={increment}>Increment</button>
      <br />
      <button onClick={decrement}>Decrement</button>
      </div>
      
    </>
  );
};

export default CounterDisplay;