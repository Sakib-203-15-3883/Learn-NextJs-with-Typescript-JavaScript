"use client";
import { createContext, useContext, useState } from "react";
//here , we create a context for counter so that data from counter will be accessible to other component without passing props
const CounterContext = createContext();

//we create a provider for counter that holds data [state and functions ] . this data will be accessible from other components

export function CounterProvider({ children }) {
  const [count, setCount] = useState(10);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
}

// here , we export useCounter component  that return CounterContext  so that any other component just import this useCounter component and use the data provided by CounterContext
export function useCounter() {
  return useContext(CounterContext);
}
