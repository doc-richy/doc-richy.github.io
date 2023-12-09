import*as h from"./utilities.js";import*as n from"./displayClass.js";import*as o from"./collision.js";import*as r from"./interactive.js";import*as d from"./sounds.js";import*as l from"./tweens.js";class m{constructor(t=256,s=256,i,e,a){if(Object.assign(this,h),Object.assign(this,n),Object.assign(this,o),Object.assign(this,r),Object.assign(this,d),Object.assign(this,l),this.canvas=this.makeCanvas(t,s,"none","none"),this.canvas.style.backgroundColor="none",this.canvas.style.touchAction="none",this.stage.width=this.canvas.width,this.stage.height=this.canvas.height,this.pointer=this.makePointer(this.canvas),this.scale=1,this.state=void 0,this.load=a,this.setup=i,this.assetsToLoad=e,this.paused=!1,this.pauseTime=void 0,this.pauseTotalTime=0,this.ended=!1,!i)throw new Error("Please supply the setup function in the constructor");this.leftArrow=void 0,this.upArrow=void 0,this.rightArrow=void 0,this.downArrow=void 0,this.yo=void 0,this.padArray=[],this.buttonsMove=[],this.hour=0,this.minutes=0,this.second=0,this.second_ten=0,this.secTotal=0,this.elapseTime=void 0,this.lastTime=void 0,this.timeInterval=200,this.startTime=void 0,this.gameInfoTime=void 0,this.timeInLoop=void 0,this.timeInPause=void 0,this.endTime=void 0,this.messages=[],this.stepArray=[],this.gameInfo={},this.replayMode=!1,this.isPlaying=!1,this.pauseButton=void 0}timeToString(t){this.secTotal=(t/1e3).toFixed(1),this.second_ten=this.secTotal.toString().substring(this.secTotal.toString().indexOf(".")+1),this.second=Math.floor(t/1e3),this.minutes=Math.floor(this.second/60);let s="0",i="0";return 9<this.minutes&&(i=""),9<this.second%60&&(s=""),this.minutes<=0?""+s+this.second%60+"."+this.second_ten:""+i+this.minutes+`:${s}${this.second%60}.`+this.second_ten}gameLoop(){if(requestAnimationFrame(this.gameLoop.bind(this)),0<this.buttons.length&&!this.replayMode&&(this.canvas.style.cursor="auto",this.buttons.forEach(t=>{t.update(this.pointer,this.canvas),"over"!==t.state&&"down"!==t.state||void 0!==t.parent&&(this.canvas.style.cursor="pointer")})),0<this.particles.length)for(let t=this.particles.length-1;0<=t;t--)this.particles[t].update();if(0<this.tweens.length)for(let t=this.tweens.length-1;0<=t;t--){var s=this.tweens[t];s&&s.update()}if(0<this.shakingSprites.length)for(let t=this.shakingSprites.length-1;0<=t;t--){var i=this.shakingSprites[t];i.updateShake&&i.updateShake()}0<this.draggableSprites.length&&this.pointer.updateDragAndDrop(this.draggableSprites),this.isPlaying&&!this.replayMode&&(this.ended?(this.messages[1].content=this.timeToString(this.endTime),this.gameInfo.t=this.endTime,this.gameInfo.s=this.stepArray.length-1):(this.messages[0].content=" "+(this.stepArray.length-1),this.messages[2].content=" "+this.yo.bananasToEat,this.gameInfo.b=this.yo.bananasToEat,this.paused||(this.gameInfo.t=Date.now()-this.startTime-this.pauseTotalTime+this.gameInfoTime,this.gameInfo.s=this.stepArray.length-1,this.messages[1].content=this.timeToString(this.gameInfo.t)))),this.startTime||this.buttonsMove.forEach(t=>{(t.isDown||t.pressed)&&(this.startTime=Date.now(),this.isPlaying=!0,this.pauseButton.visible||this.pauseButton.press())}),this.paused&&!this.replayMode&&this.buttonsMove.forEach(t=>{(t.isDown||t.pressed)&&(this.resume(),this.pauseButton.visible||this.pauseButton.press())}),this.state&&!this.paused&&this.state(),this.state&&this.replayMode&&this.state(),this.render(this.canvas)}setKeys(t){this.rightArrow=t.rightArrow,this.upArrow=t.upArrow,this.leftArrow=t.leftArrow,this.downArrow=t.downArrow}setButtonsMove(t,s){this.buttonsMove=t,this.pauseButton=s}setStepArray(t){this.stepArray=t}setGameInfo(t){this.startTime=void 0,this.gameInfo=t,this.gameInfoTime=t.t,this.pauseTime=void 0,this.pauseTotalTime=0,this.ended=!1,this.isPlaying=!1}setReplayMode(t){this.replayMode=t}setYo(t){this.yo=t}resetStartTime(t){this.startTime=void 0}pushMessage(t){this.messages.push(t)}flushMessage(t){this.messages=[]}start(){this.assetsToLoad?(this.assets.load(this.assetsToLoad).then(()=>{console.log("resolve assets "),this.state=void 0,setTimeout(()=>{this.setup()},1e3)}),this.load&&(this.state=this.load)):this.setup(),this.ended=!1,this.gameLoop()}pause(){this.paused=!0,this.pauseTime=Date.now(),this.isPlaying=!1}resume(){this.paused=!1,this.pauseTime&&(this.pauseTotalTime+=Date.now()-this.pauseTime),this.isPlaying=!0}endGame(){this.ended=!0,this.endTime=Date.now()-this.startTime-this.pauseTotalTime+this.gameInfoTime,this.isPlaying=!1}scaleToWindow(t){var s,i=window.innerWidth/this.canvas.width,e=window.innerHeight/this.canvas.height;Math.floor(Math.min(window.innerWidth,window.innerHeight)/10),document.body.width=window.innerWidth,document.body.height=window.innerHeight,s=Math.min(i,e),this.canvas.style.transformOrigin="0 0",this.canvas.style.transform="scale("+s+")";let a=(window.innerHeight-this.canvas.height*i)/2,h=(window.innerWidth-this.canvas.width*e)/2;h<0&&(h=0),a<0&&(a=0),this.canvas.style.marginTop=a+"px",this.canvas.style.marginBottom=a+"px",this.canvas.style.marginLeft=h+"px",this.canvas.style.marginRight=h+"px",this.canvas.style.paddingLeft=0,this.canvas.style.paddingRight=0,this.canvas.style.display="block",this.pointer.scale=s,this.scale=s,t.scaleCanvas=this.scale,t.scaleX=i,t.scaleY=e}}function t(t=256,s=256,i,e,a){return new m(t,s,i,e,a)}export{m as Game,t as game};