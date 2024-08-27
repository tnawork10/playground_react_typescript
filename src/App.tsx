import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RangeContent from "./Components/RangeContent/RangeContent";
import TestRendering from "TestRendering/TestRendering";
import TestOverrideProp from "TestOverrideProp/TestOverrideProp";
import TestAxiosMultipart from "TestAxiosForMultipart/TestAxiosMultipart";

function App() {
  return (
    <div className="App">
      <h1>Test APP</h1>
      {/* <TestAxiosMultipart></TestAxiosMultipart> */}
      <TestRendering></TestRendering>
    </div>
  );
}

export default App;
