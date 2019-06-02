import React, { useState, useEffect, useLayoutEffect, useRef, } from 'react';
import '../styles/components/sheet-music-component.scss';

export default function SheetMusic(props = {}) {
  //create a canvas element we can manipulate
  const canvasRef = useRef(null);

  //Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside useLayoutEffect will be flushed synchronously, before the browser has a chance to paint. https://reactjs.org/docs/hooks-reference.html#uselayouteffect
  useLayoutEffect(() => drawCanvas({ canvas: canvasRef.current, width: canvasRef.current.clientWidth, height: canvasRef.current.clientHeight, }));

  return (
      <sheet-music-component>
          <canvas ref={canvasRef}/>
      </sheet-music-component>
  );
}

function drawCanvas({canvas, height, width}){
  console.log('canvas: ', canvas, height, width);
  //control canvas width & height by css alone.
  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);

  const context = canvas.getContext('2d');
  // Reset the current path
  context.beginPath();
  // Staring point (10,45)
  context.moveTo(width, height);
  // End point (180,47)
  context.lineTo(0, 0);

  context.moveTo(width, 0);
  context.lineTo(0, 0);
  // Make the line visible
  context.lineWidth = 1;
  context.stroke();

}
