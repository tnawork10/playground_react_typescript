import React, { createContext, useMemo } from "react";

export interface RenderContextData {
  valueInt: number;
  valueObj?: any;
  consumer?: () => void;
}

export const RenderContextDef = createContext<RenderContextData>(
  {} as RenderContextData
);

type Props = {
  children?: any;
};

const RenderContext = (props: Props) => {
  const context = useMemo(() => {
    const t: RenderContextData = { valueInt: 100, valueObj: {} };
    return t;
  }, []);

  return (
    <>
      <RenderContextDef.Provider value={context}>
        {props.children}
      </RenderContextDef.Provider>
    </>
  );
};

export default RenderContext;
