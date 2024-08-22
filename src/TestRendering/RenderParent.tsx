import React, { useContext, useMemo, useRef, useState } from "react";
import RenderChild from "./RenderChild";
import { RenderContextDef } from "./RenderContext";

type Props = {
  children?: any;
};

const RenderParent = (props: Props) => {
  const [render, setRender] = useState(0);
  const [renderCount, setRenderCount] = useState(0);
  const context = useContext(RenderContextDef);
  const refInt = useRef(10);

  const memParent = useMemo(() => {
    return { count: 0 };
  }, []);
  return (
    <div>
      <h1>Parent: {renderCount}</h1>
      <button
        onClick={() => {
          setRenderCount(renderCount + 1);
          memParent.count = memParent.count + 1;
        }}
      >
        Increment Parent
      </button>
      <button
        onClick={() => {
          setRenderCount(renderCount + 1);
          context.valueInt = context.valueInt + 1;
        }}
      >
        Increment Parent By Context Changes
      </button>
      <button
        onClick={() => {
          memParent.count = memParent.count + 1;
          context.valueInt = context.valueInt + 1;
          console.log(`context:${context.valueInt}; mem:${memParent.count}`);
        }}
      >
        Only child update?
      </button>
      {props.children}
      <RenderChild title={"DirectChild"} state={memParent.count}></RenderChild>
    </div>
  );
};
export default RenderParent;
