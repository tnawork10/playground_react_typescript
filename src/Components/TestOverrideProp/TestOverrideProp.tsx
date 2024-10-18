import React from "react";
import OverridePropParent from "./OverridePropParent";
import OverridePropChild from "./OverridePropChild";

export type PropsToOverride = {
    children?: any;
    toOverride: number;
};

const TestOverrideProp = (props: PropsToOverride) => {
  return (
    <div>
      <OverridePropParent toOverride={10}>
        <OverridePropChild {...props}></OverridePropChild>
      </OverridePropParent>
    </div>
  );
};

export default TestOverrideProp;
