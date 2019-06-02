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

  const ctx = canvas.getContext('2d');
  styleLine({ctx, lineWidth: 1});
  // drawLine({ctx, startX: 0, startY: 0, endX: width, endY: height});
  // drawHorizontalLine({ctx, startX: 0, startY: 20, width, });

  const padding = 10;
  const startXPadded = 0 + padding;
  const widthPadded = width - (2 * padding);
  drawStaff({ctx, staffLineDistance: 15, startX: startXPadded, startY: 10, width: widthPadded, });

}

function drawStaff({ctx, startX = 0, startY = 0, width = 100, staffLineDistance = 10, }){
  const numberOfStaffLines = 5;
  let lineStartY = startY;
  for(let i = 0; i < numberOfStaffLines; ++i){
    drawHorizontalLine({ctx, startY: lineStartY, width, startX});
    lineStartY += staffLineDistance;
  }

  const staffHeight = (numberOfStaffLines - 1) * staffLineDistance;
  const numberOfBars = 6;
  const barLineDistance = width / (numberOfBars - 1);
  drawStaffBars({ctx, height: staffHeight, startY, startX, barLineDistance, numberOfBars, });
}

function drawStaffBars({ctx, numberOfBars = 6, startX = 0, startY = 0, height = 100, barLineDistance = 10}){
  let lineStartX = startX;
  for(let i = 0; i < numberOfBars; ++i){
    drawVerticalLine({ctx, startX: lineStartX, startY, height, });
    lineStartX += barLineDistance;
  }
}

function drawHorizontalLine({ ctx, startX, startY, width, }){
  const endX = startX + width;
  const endY = startY;
  drawLine({ ctx, startX, startY, endX, endY, });
}
function drawVerticalLine({ ctx, startX, startY, height, }){
  const endX = startX;
  const endY = startY + height;
  drawLine({ ctx, startX, startY, endX, endY, });
}

function drawLine({ ctx, startX, startY, endX, endY, }){
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
}

function styleLine({ ctx, lineWidth = 1, }){
  ctx.lineWidth = lineWidth;
}