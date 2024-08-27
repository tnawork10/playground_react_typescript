import React, { useContext, useMemo, useRef, useState } from "react";
import RenderChild from "./RenderChild";
import { RenderContextDef } from "./RenderContext";
import RenderChild2 from "./RenderChild2";

type Props = {
  children?: any;
};

const RenderParent = (props: Props) => {
  const refCount = useRef(0);
  const [render, setRender] = useState(0);
  const [renderCount, setRenderCount] = useState(0);
  const context = useContext(RenderContextDef);
  const refInt = useRef(10);
  const propRef = useRef({ counter: 0 });
  const [countButtonChild2, setCountButtonChild2] = useState(0);

  refCount.current++;

  const propMem = useMemo(() => {
    return {
      counter: 1000,
    };
  }, []);

  const memParent = useMemo(() => {
    return { count: 0 };
  }, []);

  const prop = { counter: 0 };

  return (
    <div>
      <h1>Parent: {refCount.current}</h1>
      <button onClick={() => setRender(render + 1)}>Render Parent ONLY</button>
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
      <button
        onClick={() => {
          prop.counter++;
          propMem.counter = propMem.counter + 1;
          propRef.current.counter = propRef.current.counter + 1;
          propRef.current = { counter: propRef.current.counter + 100 };
          console.log("parent prop changed: " + prop.counter);
        }}
      >
        Update Prop
      </button>

      <button
        onClick={() => {
          setCountButtonChild2(countButtonChild2 + 1);
        }}
      >
        Increase count for Child 2
      </button>
      {props.children}
      <RenderChild
        title={"Child 1"}
        state={memParent.count}
        prop={prop}
        propMem={propMem}
        propRef={propRef}
        version={renderCount}
      ></RenderChild>
      <RenderChild2
        title="Child 2"
        initCount={countButtonChild2}
      ></RenderChild2>
    </div>
  );
};
export default RenderParent;
