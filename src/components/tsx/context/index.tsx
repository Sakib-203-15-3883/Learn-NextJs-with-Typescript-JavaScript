"use client"
import { useState, useContext, createContext,ReactNode } from "react";

interface  CounterContextType {

  count: number;
  increment:()=>void;
  decrement:()=>void;
}

const CounterContext = createContext<CounterContextType |undefined>(undefined);

interface CounterProviderTS {
  children:ReactNode;
}

export function CounterProviderTS({ children}:CounterProviderTS) {
  let [count, setCount] = useState<number>(15);

  const increment = () => {
    count++;
    setCount(count);
  };

  const decrement = () => {
    count--;
    setCount(count);
  };

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error("useCounter must be used within a CounterProviderTS");
  }
  return context;
}