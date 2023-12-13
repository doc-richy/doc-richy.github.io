import{makeSound}from"./sounds.js";let assets={toLoad:0,loaded:0,imageExtensions:["png","jpg","gif"],fontExtensions:["ttf","otf","ttc","woff"],jsonExtensions:["json"],audioExtensions:["mp3","ogg","wav","webm"],load(e){return new Promise(t=>{let n=()=>{this.loaded+=1,this.toLoad===this.loaded&&(console.log("Loaded assets = ",this.loaded),this.toLoad=0,this.loaded=0,t())};console.log("Loding assets..."),this.toLoad=e.length,e.forEach(t=>{var e=t.split(".").pop();-1!==this.imageExtensions.indexOf(e)?this.loadImage(t,n):-1!==this.fontExtensions.indexOf(e)?this.loadFont(t,n):-1!==this.jsonExtensions.indexOf(e)?this.loadJson(t,n):-1!==this.audioExtensions.indexOf(e)?this.loadSound(t,n):console.log("File type not recognized "+t)})})},loadImage(t,e){var n=new Image;n.addEventListener("load",e,!1),(this[t]=n).src=t},loadFont(t,e){var n=t.split("/").pop().split(".")[0],o=document.createElement("style");o.appendChild(document.createTextNode("@font=face {font-family:'"+n+"'; src:url('"+t+"');}")),document.head.appendChild(o),e()},loadJson(n,o){let s=new XMLHttpRequest;s.open("GET",n,!0),s.responseType="text",s.onload=t=>{var e;200===s.status&&((e=JSON.parse(s.responseText)).name=n,(this[e.name]=e).frames?this.createTilesetFrames(e,n,o):o())},s.send()},createTilesetFrames(e,t,n){let o=t.replace(/[^\/]*$/,"")+e.meta.image;let s=new Image;s.addEventListener("load",()=>{this[o]=s,Object.keys(e.frames).forEach(t=>{this[t]=e.frames[t],this[t].source=s}),n()},!1),s.src=o},loadSound(t,e){var n=makeSound(t,e);n.name=t,this[n.name]=n,e()}};function randomInt(t,e){return Math.floor(Math.random()*(e-t+1))+t}function randomFloat(t,e){return Math.random()*(e-t+1)+t}function contain(t,e,n=!1,o=void 0){var s=e.x,a=e.y,i=e.width,e=e.height;let r;return t.x<s&&(n&&(t.vx*=-1),t.mass&&(t.vx/=t.mass),t.x=s,r="left"),t.x+t.width>i&&(n&&(t.vx*=-1),t.mass&&(t.vx/=t.mass),t.x=i-t.width,r="right"),t.y<a&&(n&&(t.vy*=-1),t.mass&&(t.vy/=t.mass),t.y=a,r="top"),t.y+t.height>e&&(n&&(t.vy*=-1),t.mass&&(t.vy/=t.mass),t.y=e-t.height,r="bottom"),r&&o&&o(r),r}function outsideBounds(t,e,n=void 0){var o=e.x,s=e.y,a=e.width,e=e.height;let i;return t.x<o-t.width&&(i="left"),t.x>a&&(i="right"),t.y<s-t.height&&(i="top"),(i=t.y>e?"bottom":i)&&n&&n(i),i}function distance(t,e){var n=e.centerX-t.centerX,e=e.centerY-t.centerY;return Math.sqrt(n*n+e*e)}function followEase(t,e,n){var o=e.centerX-t.centerX,e=e.centerY-t.centerY;1<=Math.sqrt(o*o,e*e)&&(t.x+=o*n,t.y+=e*n)}function followConstant(t,e,n){var o=e.centerX-t.centerX,e=e.centerY-t.centerY,s=Math.sqrt(o*o,e*e);n<=s&&(t.x+=o/s*n,t.y+=e/s*n)}function angle(t,e){return Math.atan2(e.centerY-t.centerY,e.centerX-t.centerX)}function rotateSprite(t,e,n,o){t.x=e.centerX-t.parent.x+n*Math.cos(o)-t.halfWidth,t.y=e.centerY-t.parent.y+n*Math.sin(o)-t.halfWidth}function rotatePoint(t,e,n,o,s){var a={};return a.x=t+Math.cos(s)*n,a.y=e+Math.sin(s)*o,a}function shoot(t,e,n,o,s,a){a=a();a.x=t.centerX-a.halfWidth+n*Math.cos(e),a.y=t.centerY-a.halfHeight+n*Math.sin(e),a.vx=Math.cos(e)*o,a.vy=Math.sin(e)*o,s.push(a)}function wait(n=0){return new Promise((t,e)=>{setTimeout(t,n)})}export{assets,randomInt,randomFloat,contain,outsideBounds,distance,followEase,followConstant,angle,rotateSprite,rotatePoint,shoot,wait};