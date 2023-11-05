"use client";
import Data from "../components/jsx/basicProps/data";
import Data1 from "../components/jsx/basicProps/data1";
import DataTS from "../components/tsx/basicProps/data";
import App from "../components/jsx/basicState/data";
import AppTs from "../components/tsx/basicState/data";
import DisplayCounter from "../components/jsx/context/displayCounter";

import CounterDisplay from "../components/tsx/context/counterDisplay"

import DynamicProps from "../components/jsx/dynamicProps/page"




export default function Home() {
  return (
    <>
  
    
 
      <p>hello</p>
      {/* from JS file  */}
      <Data />
      <Data1 />
      {/* From ts file  */}
      <DataTS />

      <App />
      <AppTs />
      {/* this is a example of context api */}
      <p>this is a example of context api</p>
      <DisplayCounter />
      <p>this is a example of context api with TS</p>
      < CounterDisplay />

      {/* DynamicProps */}

      <DynamicProps/>
    </>
  );
}
