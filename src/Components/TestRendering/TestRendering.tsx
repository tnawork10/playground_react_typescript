import React, { useMemo, useState } from "react";
import RenderParent from "./RenderParent";
import RenderChild from "./RenderChild";
import RenderContext, {
  RenderContextData,
  RenderContextDef,
} from "./RenderContext";

type Props = {
};

const TestRendering = (props: Props) => {
  const mem = useMemo(() => {
    const t: RenderContextData = {
      valueInt: 0,
      valueObj: {},
    };
    return t;
  }, []);
  return (
    <div>
      <RenderContextDef.Provider value={mem}>
        <RenderParent>
          {/* <RenderChild title="Indirect child"></RenderChild> */}
        </RenderParent>
      </RenderContextDef.Provider>
    </div>
  );
};
export default TestRendering;
