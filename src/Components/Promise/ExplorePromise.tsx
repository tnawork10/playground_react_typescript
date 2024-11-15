import RefComponent, { RefComponentRef } from 'Components/RefComponent/RefComponent';
import React, { useEffect, useRef, useState } from 'react'

type Props = {

}

interface IResolver {
    resolve: (value: unknown) => void;
    reject: (reason?: any) => void;
}

const ExplorePromise = (props: Props) => {
    const refDif = useRef(null);
    const refComponentRef = useRef<RefComponentRef>(null);
    const [resolver, setResolver] = useState<IResolver>({
        resolve: null,
        reject: null
    });

    const [promise, setPromise] = useState(new Promise((resolve, reject) => {
        resolver.resolve = resolve;
        resolver.reject = reject;
    }));

    useEffect(() => {
        console.log("ExplorePromise mount1");
    }, []);

    useEffect(() => {
        console.log("ExplorePromise mount2");
    }, []);
    

    useEffect(() => {
        console.log(refDif.current);
        console.log(refComponentRef.current);
        console.log(refComponentRef.current.refDiv);
    }, []);

    useEffect(() => {
        console.log("ref.diff: " + refDif.current);
    }, [refDif]);

    return (
        <div ref={refDif}>
            <h1>ExplorePromise</h1>
            <button></button>
            <RefComponent ref={refComponentRef}></RefComponent>
        </div>
    )
}

export default ExplorePromise