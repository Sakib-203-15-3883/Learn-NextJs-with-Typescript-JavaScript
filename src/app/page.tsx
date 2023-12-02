"use client";
import Data from "../components/jsx/basicProps/data";
import Data1 from "../components/jsx/basicProps/data1";
import DataTS from "../components/tsx/basicProps/data";
import App from "../components/jsx/basicState/data";
import AppTs from "../components/tsx/basicState/data";
import DisplayCounter from "../components/jsx/context/displayCounter";

import CounterDisplay from "../components/tsx/context/counterDisplay";

import DynamicProps from "../components/jsx/dynamicProps/page";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleImageSliderNavigation = () => {
    router.push("/imageSlider");
  };

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
      <CounterDisplay />

      {/* DynamicProps */}

      <DynamicProps />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: 700,
          backgroundColor: "navajowhite",
          width:"25%",
          height:70,
          marginLeft:"35%",
          marginBottom:60,
        }}
      >
        <button onClick={handleImageSliderNavigation}>Image slider Page</button>
      </div>
    </>
  );
}
