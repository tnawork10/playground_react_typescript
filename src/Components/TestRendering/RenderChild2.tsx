import React, { useEffect, useState } from "react";

type Props = {
  title: string;
  initCount: number;
};

const RenderChild2 = (props: Props) => {
  const [renderCount, setRenderCount] = useState(props.initCount);
  const [rerender, setRerender] = useState(0);

  useEffect(() => {
    setRerender(rerender + 1);
  }, [props.initCount]);

  return (
    <div>
      <h1>
        {props.title}; RenderCount:{renderCount}; rerender: {rerender}
      </h1>
    </div>
  );
};

export default RenderChild2;
