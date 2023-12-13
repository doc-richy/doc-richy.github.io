import{makeCanvas,makeStage}from"./makeCanvas.js";let rectangle=function(e=32,t=32,r="gray",a="none",l=0,i=0,h=0){let n={width:e,height:t,fillStyle:r,strokeStyle:a,lineWidth:l,x:i,y:h,_layer:0};return n.width=e,n.height=t,n.rotation=0,n.alpha=1,n.visible=!0,n.scaleX=1,n.scaleY=1,n.vx=0,n.vy=0,n.children=[],n.parent=void 0,n.addChild=e=>{e.parent&&e.parent.removeChild(e),(e.parent=n).children.push(e)},n.removeChild=e=>{if(e.parent!==n)throw new Error(e+" is not a child of "+n);n.children.splice(n.children.ondexOf(e),1)},n.render=e=>{e.strokeStyle=n.strokeStyle,e.lineWidth=n.lineWidth,e.fillStyle=n.fillStyle,e.beginPath(),e.rect(-n.width/2,-n.height/2,n.width,n.height),"none"!==n.strokeStyle&&e.stroke(),e.fill()},Object.defineProperties(n,{gx:{get(){return n.parent?n.x+n.parent.gx:n.x},enumerable:!0,configurable:!0},gy:{get(){return n.parent?n.y+n.parent.gy:n.y},enumerable:!0,configurable:!0},layer:{get(){return n._layer},set(e){n._layer=e,n.parent&&n.parent.children.sort((e,t)=>e.layer-t.layer)},enumerable:!0,configurable:!0}}),stage&&stage.addChild(n),n};function render(r){let a=r.ctx;a.clearRect(0,0,r.width,r.height),stage.children.forEach(e=>{!function t(e){e.visible&&e.gx<r.width+e.width&&e.gx+e.width>=-e.width&&e.gy<r.height+e.height&&e.gy+e.height>=-e.height&&(a.save(),a.translate(e.x+e.width*e.pivotX,e.y+e.height*e.pivotY),a.rotate(e.rotation),a.globalAlpha=e.alpha*e.parent.alpha,a.scale(e.scaleX,e.scaleY),e.shadow&&(a.shadowColor=e.shadowColor,a.shadowOffsetX=e.shadowOffsetX,a.shadowOffsetY=e.shadowOffsetY,a.shadowBlur=e.shadowBlur),e.blendMode&&(a.globalCompisitionOperation=e.blendMode),e.render&&e.render(a),e.children&&0<e.children.length&&(a.translate(-e.width*e.pivotX,-e.height*e.pivotY),e.children.forEach(e=>{t(e)})),a.restore())}(e)})}export{rectangle,render};