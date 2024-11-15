import React, { useEffect, useRef, useState } from 'react'

type Props = {}

const TestExecutionOrderSub = (props: Props) => {
    const [count, setCount] = useState(0);
    const countShared = useRef(0);

    useEffect(() => {
        console.log(`TestExecutionOrderSub: ${countShared.current}`);
        countShared.current++;
        setCount(count + 1);
    }, []);

    useEffect(() => {
        if (count < 10) {
            setCount(count + 1);
            console.log(`TestExecutionOrderSub[count]: ${count}`);
        }
    }, [count]);

    useEffect(() => {
        console.log(`TestExecutionOrderSub[props]: ${countShared.current}`);
        countShared.current = countShared.current + 1;
    }, [props])

    return (
        <div>
            <h1>TestExecutionOrderSub. count: {count}</h1>
        </div>
    )
}

export default TestExecutionOrderSub