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
  counter?: number;
};

const RenderChild = (props: Props) => {
  const [render, setRender] = useState(0);
  const [renderCount, setRenderCount] = useState(0);
  // const contextRef = useRef(useContext(RenderContextDef));
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
  context.consumer = () => { setRenderCount(renderCount + 1) };
  // const mem = useMemo(() => {
  //   return {
  //     memCounter: 0,
  //   };
  // }, []);
  //   useEffect(() => {
  //     setRenderCount(renderCount + 1);
  //     log(props.title, renderCount);
  // }, [props.state]);

  // useEffect(() => {
  //   setRenderCount(renderCount + 1);
  //   // log(props.title, renderCount);
  // }, [contextRef.current.valueInt]);

  useEffect(() => {
    setRenderCount(renderCount + 1);
    // log(props.title, renderCount);
  }, [context.valueInt]);

  // useEffect(() => {
  //   setRenderCount(renderCount + 1);
  //   log(props.title, renderCount);
  //   // log(props.title, renderCount);
  // }, [contextRef.current.valueObj]);

  // useEffect(() => {
  //   setRenderCount(renderCount + 1);
  //   //props.counter = props.counter ? props.counter + 1 : 0;
  //   log(props.title, renderCount);
  //   // log(props.title, renderCount);
  // }, [props.counter]);

  //   log(props.title, renderCount);
  console.log("Rendered child");

  // return (
  //   <div>
  //     <h1>
  //       Child [{props.title}]: {renderCount}; mem={mem.memCounter}; context:{context.valueInt}; counter={props.counter};
  //       <p>
  //         {context.valueInt}
  //       </p>
  //     </h1>
  //   </div>
  // );

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
