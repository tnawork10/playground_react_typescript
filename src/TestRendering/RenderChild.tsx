import { title } from "process";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { RenderContextDef } from "./RenderContext";

type Props = {
  version?: number;
  children?: any;
  state?: any;
  title: string;
  prop: any;
  propRef?: any;
  propMem?: any;
};

const RenderChild =  (props: Props) => {
  const [render, setRender] = useState(0);
  const [renderCount, setRenderCount] = useState(0);
  const context = useContext(RenderContextDef);
  const mem = useMemo(() => {
    return {
      memCounter: 0,
    };
  }, []);

  const memProps = useMemo(() => props, []);

  const ref = useRef(props);
  useEffect(() => {
    setRenderCount(renderCount + 1);
    log(props.title, renderCount);
  }, [props.prop.counter]);

  useEffect(() => {
    setRenderCount(renderCount + 1);
    log(props.title, renderCount);
  }, [props.propRef.current.counter]);

  useEffect(() => {
    setRenderCount(renderCount + 1);
    log(props.title, renderCount);
  }, [props.propRef.current]);

  useEffect(() => {
    setRenderCount(renderCount + 1);
    log(props.title, renderCount);
  }, [props.propRef]);

  // useEffect(() => {
  //     setRenderCount(renderCount + 1);
  //     log(props.title, renderCount);
  // }, [context.valueInt]);

  log(props.title, renderCount);
  return (
    <div>
      <h1>
        Child [{props.title}]: {renderCount}; mem={mem.memCounter}; context:{context.valueInt}; version: {props.version}
      </h1>
    </div>
  );
};
export default RenderChild;

const log = (title: any, renderCount: any) => {
  console.log(`child ${title} is rendered: ${renderCount}`);
};
