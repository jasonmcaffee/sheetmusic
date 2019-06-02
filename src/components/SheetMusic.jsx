import React, { useState, useEffect, useLayoutEffect, useRef, } from 'react';
import '../styles/components/sheet-music-component.scss';

export default function SheetMusic(props = {}) {
    //create a canvas element we can manipulate
    const canvas = useRef(null);

    //Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside useLayoutEffect will be flushed synchronously, before the browser has a chance to paint. https://reactjs.org/docs/hooks-reference.html#uselayouteffect
    useLayoutEffect(() => drawCanvas(canvas));

    return (
        <sheet-music-component>
            <canvas ref={canvas} />
        </sheet-music-component>
    );
}

function drawCanvas(canvas){

}
