export default class CanvasComponent{
  startX = 0;
  startY = 0;
  width = 100;
  height = 100;
  children = [];
  ctx; //canvas context
  constructor({ startX, startY, width, height, children=[], ctx, }){
    Object.assign(this, { startX, startY, width, height, children, ctx, });
  }

  renderChildren({children = this.children} = this){
    for (let i = 0; i < children.length; ++i){
      children[i].render();
    }
  }

  render(){
    this.draw();
    this.renderChildren();
  }

  draw({ctx} = this){
    //draw to canvas
  }

  applyStyleFromParent({startX: parentStartX, startY: parentStartY, width: parentWidth,}){

  }

  applyStyleToChild({child, style, }){
    const {startX, startY, width, height, } = child;

  }
}