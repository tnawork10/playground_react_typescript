import React from "react";
import { PropsToOverride } from "./TestOverrideProp";

function OverridePropChild(props: PropsToOverride) {
  return (
    <div>
      <h1>{props.toOverride}</h1>
      {props.children}
    </div>
  );
}

export default OverridePropChild;
