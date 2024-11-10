import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RangeContent from "./Components/RangeContent/RangeContent";
import TestRendering from "Components/TestRendering/TestRendering";
import TestOverrideProp from "Components/TestOverrideProp/TestOverrideProp";
import TestAxiosMultipart from "Components/TestAxiosForMultipart/TestAxiosMultipart";
import TestRenderUpdate from "Components/TestRenderUpdate/TestRenderUpdate";
import DelayedChange from "Components/DelayedChange/DelayedChange";

function App() {
  return (
    <div className="App">
      <h1>Test APP</h1>
      {/* <TestAxiosMultipart></TestAxiosMultipart> */}

      {
        false && (
          <>
            <TestRendering></TestRendering>
            <TestRenderUpdate></TestRenderUpdate>
          </>
        )
      }
      <DelayedChange></DelayedChange>
    </div>
  );
}

export default App;
