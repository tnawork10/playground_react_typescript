import React, { useEffect } from 'react'

type Props = {}

export interface Some extends Partial<any> {

}


const DomExplore = (props: Props) => {
    useEffect(() => {
        const q = document.querySelector('#non-react-container');
        if (q != null) {
            const container: Element = q;
            console.log(container);
            const el = document.createElement("span");
            el.innerText = 'This is appended in react script'
            container.appendChild(el);
            // будет присоединен к DOM
        }
    }, [])
    
    return (
        <div>DomExplore</div>
    )
}

export default DomExplore