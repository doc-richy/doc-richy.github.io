function makeCanvas(e=256,t=256,h="1px dashed black",a="white"){var d=document.createElement("canvas");return d.width=e,d.height=t,d.style.border=h,d.style.backgroundColor=a,d.ctx=d.getContext("2d"),document.body.appendChild(d),d}function makeStage(e){return{x:0,y:0,gx:0,gy:0,alpha:1,width:e.width,height:e.height,parent:void 0,children:[],addChild(e){this.children.push(e),e.parent=this},removeChild(e){this.children.splice(this.children.indexOf(e),1)}}}export{makeCanvas,makeStage};