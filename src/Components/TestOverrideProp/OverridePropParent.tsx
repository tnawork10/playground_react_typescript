import React from "react";
import { PropsToOverride } from "./TestOverrideProp";

function OverridePropParent(prop: PropsToOverride) {
  prop.toOverride = prop.toOverride + 1;
  return <div>{prop.children}</div>;
}

export default OverridePropParent;