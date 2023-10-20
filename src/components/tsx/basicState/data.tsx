"use client";
import { useState } from "react";

const AppTs:React.FC = () => {
  let [counter, setCounter] = useState<number>(20);

  const increment = () => {
    if (counter < 30) {
      counter++;
      setCounter(counter);
    } else {
      return 30;
    }
  };

  const decrement = () => {
    if (counter > 10) {
      counter--;
      setCounter(counter);
    } else {
      return 10;
    }
  };

  return (
    <>
      <h1> Initial Value = {counter} </h1>
      <button onClick={increment}> increment </button> <br />
      <button onClick={decrement}> decrement </button>
    </>
  );
};

export default AppTs;
