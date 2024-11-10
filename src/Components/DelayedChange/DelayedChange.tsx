import React, { useEffect, useState } from 'react'

type Props = {}

const DelayedChange = (props: Props) => {
    const [value, setValue] = useState('init value');
    const [delayValue, setDelayValue] = useState(value);

    useEffect(() => {
        const apply = setTimeout(() => {
            setDelayValue(value);
        }, 1000);

        return () => {
            clearTimeout(apply);
        };
    }, [value])
    return (
        <div>DelayedChange
            <h1>{value}</h1>
            <h1>{delayValue}</h1>
            <input value={value} onChange={(x: any) => {
                setValue(x.target.value);
            }}></input>
        </div>
    )
}

export default DelayedChange