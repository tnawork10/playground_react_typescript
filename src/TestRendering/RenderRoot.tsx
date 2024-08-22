import React, { useMemo } from "react";
import RenderParent from "./RenderParent";
import RenderChild from "./RenderChild";
import RenderContext, {
  RenderContextData,
  RenderContextDef,
} from "./RenderContext";

type Props = {};

const RenderRoot = (props: Props) => {
  const mem = useMemo(() => {
    const t: RenderContextData = {
      valueInt: 100,
      valueObj: {},
    };
    return t;
  }, []);
  return (
    <div>
      <RenderContextDef.Provider value={mem}>
        <RenderParent>
          <RenderChild title="Indirect child"></RenderChild>
        </RenderParent>
      </RenderContextDef.Provider>
    </div>
  );
};
export default RenderRoot;
