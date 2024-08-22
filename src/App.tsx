import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RangeContent from "./Components/RangeContent/RangeContent";
import RenderRoot from "TestRendering/RenderRoot";

function App() {
  return (
    <div className="App">
      <h1>Test APP</h1>
      <RenderRoot></RenderRoot>
    </div>
  );
}

export default App;
