import React from 'react'

type Props = {}

const TestRenderUpdate = (props: Props) => {
    return (
        <>
            <div>TestRenderUpdate</div>
            <Parent>
                <Child></Child>
            </Parent>
        </>
    )
}

const Parent = ({ children }: { children?: any }) => {

    return (<>{children}</>);
};

const Child = () => {

    return (<></>);
};

export default TestRenderUpdate