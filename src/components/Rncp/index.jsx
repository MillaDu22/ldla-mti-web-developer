import React, { useEffect, useRef } from 'react';
import './rncp.css'; 

const Rncp = ({ text }) => {
    const emblemRef = useRef(null);

    useEffect(() => {
        const element = emblemRef.current;
        const textToUse = text || element.innerHTML;
        element.innerHTML = '';

        for (let i = 0; i < textToUse.length; i++) {
        const letter = textToUse[i];
        const span = document.createElement('span');
        const node = document.createTextNode(letter);
        const r = (360 / textToUse.length) * i;
        const x = Math.PI / textToUse.length * i;
        const y = Math.PI / textToUse.length * i;

        span.appendChild(node);
        span.style.transform = `rotateZ(${r}deg) translate3d(${x}px,${y}px,0)`;
        span.style.transform = `rotateZ(${r}deg) translate3d(${x}px,${y}px,0)`;
        element.appendChild(span);
        }
    }, [text]);

    return <a className ="link-rncp" href="https://drive.google.com/file/d/1Q3EfAbwlrdcIk_4gDyzt8CtKONrhYjpw/view?usp=sharing" target="blank"><div ref={emblemRef} className="emblem">{text}</div></a>;
};

export default Rncp;
