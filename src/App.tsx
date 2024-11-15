import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RangeContent from "./Components/RangeContent/RangeContent";
import TestRendering from "Components/TestRendering/TestRendering";
import TestOverrideProp from "Components/TestOverrideProp/TestOverrideProp";
import TestAxiosMultipart from "Components/TestAxiosForMultipart/TestAxiosMultipart";
import TestRenderUpdate from "Components/TestRenderUpdate/TestRenderUpdate";
import DelayedChange from "Components/DelayedChange/DelayedChange";
import DomExplore from "Components/DOM/DomExplore";
import DateOnlyExplore from "Components/DateOnly/DateOnlyExplore";
import TestExecutionOrder from "Components/TestExecutionOrder/TestExecutionOrder";
import ExplorePromise from "Components/Promise/ExplorePromise";

function App() {
  const range0 = "Items 0-19/65512";
  const range1 = "Items */65512";
  const range2 = "Items 0-19/*";

  const mathPattern = (val: string) => {
    const pattern2 = /AAA/;
    const pattern = /(^[a-zA-Z][\w]*)\s+(((\d+)\s?-\s?(\d+)?\s?)|\*)\/?\s?(\d+|\*)?/;

    if (pattern.test(val)) {
      const parse = pattern.exec(val);
      if (parse != null) {
        if (parse[2] === "*") {
          return {
            unit: parse[1],
            indexStart: null,
            indexEnd: null,
            length: tryParseInt(parse[6]),
            count: 0,
          };
        } else {
          const temp = {
            unit: parse[1],
            indexStart: tryParseInt(parse[4]),
            indexEnd: tryParseInt(parse[5]),
            length: tryParseInt(parse[6]),
          };
          if (temp.indexStart == null && temp.indexEnd == null) {
            return { ...temp, count: 0 };
          }
          return {
            ...temp,
            count: temp.indexStart! + temp.indexEnd! + 1,
          };
        }
      }
    }
  };

  const str0 = JSON.stringify(mathPattern(range0));
  const str = JSON.stringify(mathPattern(range1));

  return (
    <>
      <div className="App">
        <h1>Test APP</h1>
        {/* <TestAxiosMultipart></TestAxiosMultipart> */}

        {
          false && (
            <>
              <h1>{str0.toString()}</h1>
              <h1>{str.toString()}</h1>
              {/* <TestRendering></TestRendering> */}
              <DelayedChange></DelayedChange>
              <TestRenderUpdate></TestRenderUpdate>
              <DomExplore></DomExplore>
              <DateOnlyExplore></DateOnlyExplore>
            </>
          )
        }
        <ExplorePromise></ExplorePromise>
      </div>
      <TestExecutionOrder></TestExecutionOrder>
    </>
  );
}

export default App;

export function tryParseInt(value: string): number | null {
  const parsed = parseInt(value, 10);
  // Check if the parsed value is a valid number
  if (isNaN(parsed)) {
    return null;
  }
  return parsed;
}
