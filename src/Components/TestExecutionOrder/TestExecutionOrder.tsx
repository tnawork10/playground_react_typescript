import React, { useEffect, useRef, useState } from 'react'
import TestExecutionOrderSub from './TestExecutionOrderSub';

type Props = {}

const TestExecutionOrder = (props: Props) => {
    const [count, setCount] = useState(0);
    const countShared = useRef(0);
    const countRender = useRef(0);

    useEffect(() => {
        console.log(`TestExecutionOrder: ${countShared.current}`);
        countShared.current++;
    }, []);

    useEffect(() => {
        console.log(`TestExecutionOrder[count]: ${count}`);
    }, [count]);

    countRender.current = countRender.current + 1;

    return (
        <div>
            <h1>TestExecutionOrder. count: {count}. countShared: {countShared.current}. countRender: {countRender.current}</h1>
            <TestExecutionOrderSub></TestExecutionOrderSub>
            <button onClick={() => setCount(count + 1)}>update TestExecutionOrder</button>
        </div>
    )
}

export default TestExecutionOrder