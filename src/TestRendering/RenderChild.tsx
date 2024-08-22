import { title } from "process";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { RenderContextDef } from "./RenderContext";

type Props = {
  children?: any;
  state?: any;
  title: string;
};

const RenderChild = (props: Props) => {
  const [render, setRender] = useState(0);
  const [renderCount, setRenderCount] = useState(0);
  const context = useContext(RenderContextDef);
  const mem = useMemo(() => {
    return {
      memCounter: 0,
    };
  }, []);
//   useEffect(() => {
//     setRenderCount(renderCount + 1);
//     log(props.title, renderCount);
// }, [props.state]);

// useEffect(() => {
//     setRenderCount(renderCount + 1);
//     log(props.title, renderCount);
// }, [context.valueInt]);

log(props.title, renderCount);
  return (
    <div>
      <h1>
        Child [{props.title}]: {renderCount}; mem={mem.memCounter}; context:
        {context.valueInt}
      </h1>
    </div>
  );
};
export default RenderChild;

const log = (title: any, renderCount: any) => {
  console.log(`child ${title} is rendered: ${renderCount}`);
};
