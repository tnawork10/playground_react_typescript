import React, { forwardRef, MutableRefObject, useEffect, useImperativeHandle, useRef } from 'react'

export interface ReCompoentProps {

}

export interface RefComponentRef {
    refreshAsync: () => void,
    refDiv: HTMLDivElement
}

const RefComponent = forwardRef<RefComponentRef, ReCompoentProps>((props: ReCompoentProps, ref) => {
    const refDiv = useRef();
    useEffect(() => {
        console.log("RefComponent mount1");
    }, []);

    useEffect(() => {
        console.log("RefComponent mount2");
    }, []);

    useEffect(() => {
        console.log("RefComponent mount3");
    }, []);

    useImperativeHandle(ref, () => {
        const refObj: RefComponentRef = {
            refreshAsync: () => {

            },
            refDiv: refDiv.current
        };
        return refObj;
    }, []);
    return (
        <div>RefComponent
            <div ref={refDiv}></div>
        </div>
    )
});

export default RefComponent