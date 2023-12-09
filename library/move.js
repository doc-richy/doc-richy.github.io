import*as U from"./tweens.js";import"../typedef.js";import{remove as e,spriteNewTransform as t}from"./displayClass.js";let W=void 0,Z=void 0,_=void 0,ee=void 0;function i(e,t){if(W=e,_=t.boxSize,ee=t,1===W)Z=12;else if(2===W)Z=14;else{if(3!==W)throw new Error(`This data: ${W} is not allowed for scene.`);Z=16}}function r(a,p,o,e){let $,k,c,n,q,A,v,s,B,D,G,d,H,J,K,S;$=e[0],k=e[1],c=e[2],n=e[3],q=e[4],A=e[5],v=e[6],s=e[7],B=e[8],D=e[9],G=e[10],d=e[11],H=e[12],J=e[13],K=e[14],S=e[15];let l,y,g,t,i,L,b,x,X,r,Y,O,h,w,f,P,m,Q,z,F,I,M,u,R;if(W&&1===W)"right"===a?(l=p.children.filter(e=>e.gridX===o.activeSprite.gridX+1&&e.gridY===o.activeSprite.gridY),y=p.children.filter(e=>e.gridX===o.activeSprite.gridX+2&&e.gridY===o.activeSprite.gridY),t=l[0],i=y[0],t?"road"===t.type||"bananas"===t.type?T("road",t,i):"box"===t.type&&i&&"road"===i.type?T("box",t,i):"box"===t.type&&i&&"bananas"===i.type?T("bananas",t,i):N():N()):"left"===a?(b=p.children.filter(e=>e.gridX===o.activeSprite.gridX-1&&e.gridY===o.activeSprite.gridY),x=p.children.filter(e=>e.gridX===o.activeSprite.gridX-2&&e.gridY===o.activeSprite.gridY),r=b[0],Y=x[0],r?"road"===r.type||"bananas"===r.type?E("road",r,Y):"box"===r.type&&Y&&"road"===Y.type?E("box",r,Y):"box"===r.type&&Y&&"bananas"===Y.type?E("bananas",r,Y):N():N()):"up"===a?(h=p.children.filter(e=>e.gridX===o.activeSprite.gridX&&e.gridY===o.activeSprite.gridY-1),w=p.children.filter(e=>e.gridX===o.activeSprite.gridX&&e.gridY===o.activeSprite.gridY-2),P=h[0],m=w[0],P?"road"===P.type||"bananas"===P.type?C("road",P,m):"box"===P.type&&m&&"road"===m.type?C("box",P,m):"box"===P.type&&m&&"bananas"===m.type?C("bananas",P,m):N():N()):"down"===a&&(z=p.children.filter(e=>e.gridX===o.activeSprite.gridX&&e.gridY===o.activeSprite.gridY+1),F=p.children.filter(e=>e.gridX===o.activeSprite.gridX&&e.gridY===o.activeSprite.gridY+2),M=z[0],u=F[0],M?"road"===M.type||"bananas"===M.type?V("road",M,u):"box"===M.type&&u&&"road"===u.type?V("box",M,u):"box"===M.type&&u&&"bananas"===u.type?V("bananas",M,u):N():N());else{if(!(W&&1<W))throw new Error("The scene is not define properly =>>> "+W);"right"===a?(l=p.children.filter(e=>e.gridX===o.activeSprite.gridX+1&&e.gridY===o.activeSprite.gridY),y=p.children.filter(e=>e.gridX===o.activeSprite.gridX+2&&e.gridY===o.activeSprite.gridY),g=p.children.filter(e=>e.gridX===o.activeSprite.gridX+3&&e.gridY===o.activeSprite.gridY),t=l[0],i=y[0],L=g[0],t?"road"===t.type||"bananas"===t.type?T("road",t,i):"box"===t.type&&i?"road"===i.type?T("box",t,i):"bananas"===i.type?T("bananas",t,i):"box"===i.type&&L?"road"===L.type?T("2boxes",t,i):"bananas"===L.type?T("2boxesbananas",t,i):N():N():N():N()):"left"===a?(b=p.children.filter(e=>e.gridX===o.activeSprite.gridX-1&&e.gridY===o.activeSprite.gridY),x=p.children.filter(e=>e.gridX===o.activeSprite.gridX-2&&e.gridY===o.activeSprite.gridY),X=p.children.filter(e=>e.gridX===o.activeSprite.gridX-3&&e.gridY===o.activeSprite.gridY),r=b[0],Y=x[0],O=X[0],r?"road"===r.type||"bananas"===r.type?E("road",r,Y):"box"===r.type&&Y?"road"===Y.type?E("box",r,Y):"bananas"===Y.type?E("bananas",r,Y):"box"===Y.type&&O?"road"===O.type?E("2boxes",r,Y):"bananas"===O.type?E("2boxesbananas",r,Y):N():N():N():N()):"up"===a?(h=p.children.filter(e=>e.gridX===o.activeSprite.gridX&&e.gridY===o.activeSprite.gridY-1),w=p.children.filter(e=>e.gridX===o.activeSprite.gridX&&e.gridY===o.activeSprite.gridY-2),f=p.children.filter(e=>e.gridX===o.activeSprite.gridX&&e.gridY===o.activeSprite.gridY-3),P=h[0],m=w[0],Q=f[0],P?"road"===P.type||"bananas"===P.type?C("road",P,m):"box"===P.type&&m?"road"===m.type?C("box",P,m):"bananas"===m.type?C("bananas",P,m):"box"===m.type&&Q?"road"===Q.type?C("2boxes",P,m):"bananas"===Q.type?C("2boxesbananas",P,m):N():N():N():N()):"down"===a&&(z=p.children.filter(e=>e.gridX===o.activeSprite.gridX&&e.gridY===o.activeSprite.gridY+1),F=p.children.filter(e=>e.gridX===o.activeSprite.gridX&&e.gridY===o.activeSprite.gridY+2),I=p.children.filter(e=>e.gridX===o.activeSprite.gridX&&e.gridY===o.activeSprite.gridY+3),M=z[0],u=F[0],R=I[0],M?"road"===M.type||"bananas"===M.type?V("road",M,u):"box"===M.type&&u?"road"===u.type?V("box",M,u):"bananas"===u.type?V("bananas",M,u):"box"===u.type&&R?"road"===R.type?V("2boxes",M,u):"bananas"===R.type?V("2boxesbananas",M,u):N():N():N():N())}function T(e,t,i){var r;1<W&&5<=o.activeSprite.gridX&&1550<p.x+p.width&&(p.x-=_),"road"===e?(o.activeSprite=o.activeSprite===D?B:D,j(t)):"box"===e?(o.activeSprite=o.activeSprite===d?G:d,j(t),l[0].type="road",i.type="box",l[1].x+=_,l[1].gridX+=1):"bananas"===e?(o.activeSprite=o.activeSprite===d?G:d,--o.bananasToEat,j(t),l[0].type="road",y[0].type="forest",(i=y[1]).scaleX=i.scaleY=ee.scaleFactor(),i.pivotX=i.pivotY=.5,i.x-=i.width/2-ee.boxSize/2,i.y-=i.height/2-ee.boxSize/2,U.tweenProperty(i,"rotation",i.rotation,-2*Math.PI,60,["spline",10,10],!1,0),(i=l[1]).x+=_,i.scaleX=i.scaleY=ee.scaleFactor(),i.pivotX=i.pivotY=.5,i.x-=i.width/2-ee.boxSize/2,i.y-=i.height/2-ee.boxSize/2,r=U.tweenProperty(i,"rotation",i.rotation,Math.PI,60,["spline",10,10],!1,0),U.tweenProperty(i,"scaleY",i.scaleY,i.scaleY+.02,60,["spline",100,1],!1,0),U.tweenProperty(i,"scaleX",i.scaleX,i.scaleX+.02,60,["spline",100,1],!1,0),r.onComplete=()=>{p.remove(l[1]),p.remove(y[0]),p.remove(y[1])}):"2boxes"===e?(o.activeSprite=o.activeSprite===d?G:d,j(t),l[0].type="road",l[1].x+=_,l[1].gridX+=1,y[1].x+=_,y[1].gridX+=1,g[0].type="box"):"2boxesbananas"===e?(o.activeSprite=o.activeSprite===d?G:d,--o.bananasToEat,j(t),l[0].type="road",l[1].x+=_,l[1].gridX+=1,g[0].type="forest",(i=g[1]).scaleX=i.scaleY=ee.scaleFactor(),i.pivotX=i.pivotY=.5,i.x-=i.width/2-ee.boxSize/2,i.y-=i.height/2-ee.boxSize/2,U.tweenProperty(i,"rotation",i.rotation,-2*Math.PI,60,["spline",10,10],!1,0),(r=y[1]).x+=_,r.scaleX=r.scaleY=ee.scaleFactor(),r.pivotX=r.pivotY=.5,r.x-=r.width/2-ee.boxSize/2,r.y-=r.height/2-ee.boxSize/2,e=U.tweenProperty(r,"rotation",r.rotation,Math.PI,60,["spline",10,10],!1,0),U.tweenProperty(r,"scaleY",r.scaleY,r.scaleY+.02,60,["spline",100,1],!1,0),U.tweenProperty(r,"scaleX",r.scaleX,r.scaleX+.02,60,["spline",100,1],!1,0),e.onComplete=()=>{p.remove(y[1]),p.remove(g[0]),p.remove(g[1])}):N()}function E(e,t,i){var r;1<W&&o.activeSprite.gridX<=Z-6&&p.x<-32&&(p.x+=_),"road"===e?(o.activeSprite=o.activeSprite===J?H:J,j(t)):"box"===e?(o.activeSprite=o.activeSprite===S?K:S,j(t),b[0].type="road",i.type="box",b[1].x-=_,--b[1].gridX):"bananas"===e?(o.activeSprite=o.activeSprite===S?K:S,--o.bananasToEat,j(t),b[0].type="road",x[0].type="forest",(i=x[1]).scaleX=i.scaleY=ee.scaleFactor(),i.pivotX=i.pivotY=.5,i.x-=i.width/2-ee.boxSize/2,i.y-=i.height/2-ee.boxSize/2,U.tweenProperty(i,"rotation",i.rotation,-2*Math.PI,60,["spline",10,10],!1,0),(i=b[1]).x-=_,i.scaleX=i.scaleY=ee.scaleFactor(),i.pivotX=i.pivotY=.5,i.x-=i.width/2-ee.boxSize/2,i.y-=i.height/2-ee.boxSize/2,r=U.tweenProperty(i,"rotation",i.rotation,Math.PI,60,["spline",10,10],!1,0),U.tweenProperty(i,"scaleY",i.scaleY,i.scaleY+.02,60,["spline",100,1],!1,0),U.tweenProperty(i,"scaleX",i.scaleX,i.scaleX+.02,60,["spline",100,1],!1,0),r.onComplete=()=>{p.remove(b[1]),p.remove(x[0]),p.remove(x[1])}):"2boxes"===e?(o.activeSprite=o.activeSprite===S?K:S,j(t),b[0].type="road",b[1].x-=_,--b[1].gridX,x[1].x-=_,--x[1].gridX,X[0].type="box"):"2boxesbananas"===e?(o.activeSprite=o.activeSprite===S?K:S,--o.bananasToEat,j(t),b[0].type="road",b[1].x-=_,--b[1].gridX,X[0].type="forest",(i=X[1]).scaleX=i.scaleY=ee.scaleFactor(),i.pivotX=i.pivotY=.5,i.x-=i.width/2-ee.boxSize/2,i.y-=i.height/2-ee.boxSize/2,U.tweenProperty(i,"rotation",i.rotation,-2*Math.PI,60,["spline",10,10],!1,0),(r=x[1]).x-=_,r.scaleX=r.scaleY=ee.scaleFactor(),r.pivotX=r.pivotY=.5,r.x-=r.width/2-ee.boxSize/2,r.y-=r.height/2-ee.boxSize/2,e=U.tweenProperty(r,"rotation",r.rotation,Math.PI,60,["spline",10,10],!1,0),U.tweenProperty(r,"scaleY",r.scaleY,r.scaleY+.02,60,["spline",100,1],!1,0),U.tweenProperty(r,"scaleX",r.scaleX,r.scaleX+.02,60,["spline",100,1],!1,0),e.onComplete=()=>{p.remove(x[1]),p.remove(X[0]),p.remove(X[1])}):N()}function C(e,t,i){var r;1<W&&o.activeSprite.gridY<=Z-6&&p.y<-32&&(p.y+=_),"road"===e?(o.activeSprite=o.activeSprite===k?$:k,j(t)):"box"===e?(o.activeSprite=o.activeSprite===n?c:n,j(t),h[0].type="road",i.type="box",h[1].y-=_,--h[1].gridY):"bananas"===e?(o.activeSprite=o.activeSprite===n?c:n,--o.bananasToEat,j(t),h[0].type="road",w[0].type="forest",(i=w[1]).scaleX=i.scaleY=ee.scaleFactor(),i.pivotX=i.pivotY=.5,i.x-=i.width/2-ee.boxSize/2,i.y-=i.height/2-ee.boxSize/2,U.tweenProperty(i,"rotation",i.rotation,-2*Math.PI,60,["spline",10,10],!1,0),(i=h[1]).y-=_,i.scaleX=i.scaleY=ee.scaleFactor(),i.pivotX=i.pivotY=.5,i.x-=i.width/2-ee.boxSize/2,i.y-=i.height/2-ee.boxSize/2,r=U.tweenProperty(i,"rotation",i.rotation,Math.PI,60,["spline",10,10],!1,0),U.tweenProperty(i,"scaleY",i.scaleY,i.scaleY+.02,60,["spline",100,1],!1,0),U.tweenProperty(i,"scaleX",i.scaleX,i.scaleX+.02,60,["spline",100,1],!1,0),r.onComplete=()=>{p.remove(h[1]),p.remove(w[0]),p.remove(w[1])}):"2boxes"===e?(o.activeSprite=o.activeSprite===n?c:n,j(t),h[0].type="road",h[1].y-=_,--h[1].gridY,w[1].y-=_,--w[1].gridY,f[0].type="box"):"2boxesbananas"===e?(o.activeSprite=o.activeSprite===n?c:n,--o.bananasToEat,j(t),h[0].type="road",h[1].y-=_,--h[1].gridY,f[0].type="forest",(i=f[1]).scaleX=i.scaleY=ee.scaleFactor(),i.pivotX=i.pivotY=.5,i.x-=i.width/2-ee.boxSize/2,i.y-=i.height/2-ee.boxSize/2,U.tweenProperty(i,"rotation",i.rotation,-2*Math.PI,60,["spline",10,10],!1,0),(r=w[1]).y-=_,r.scaleX=r.scaleY=ee.scaleFactor(),r.pivotX=r.pivotY=.5,r.x-=r.width/2-ee.boxSize/2,r.y-=r.height/2-ee.boxSize/2,e=U.tweenProperty(r,"rotation",r.rotation,Math.PI,60,["spline",10,10],!1,0),U.tweenProperty(r,"scaleY",r.scaleY,r.scaleY+.02,60,["spline",100,1],!1,0),U.tweenProperty(r,"scaleX",r.scaleX,r.scaleX+.02,60,["spline",100,1],!1,0),e.onComplete=()=>{p.remove(w[1]),p.remove(f[0]),p.remove(f[1])}):N()}function V(e,t,i){var r;1<W&&5<=o.activeSprite.gridY&&1550<p.y+p.height&&(p.y-=_),"road"===e?(o.activeSprite=o.activeSprite===A?q:A,j(t)):"box"===e?(o.activeSprite=o.activeSprite===s?v:s,j(t),z[0].type="road",i.type="box",z[1].y+=_,z[1].gridY+=1):"bananas"===e?(o.activeSprite=o.activeSprite===s?v:s,--o.bananasToEat,j(t),z[0].type="road",F[0].type="forest",(i=F[1]).scaleX=i.scaleY=ee.scaleFactor(),i.pivotX=i.pivotY=.5,i.x-=i.width/2-ee.boxSize/2,i.y-=i.height/2-ee.boxSize/2,U.tweenProperty(i,"rotation",i.rotation,-2*Math.PI,60,["spline",10,10],!1,0),(i=z[1]).y+=_,i.scaleX=i.scaleY=ee.scaleFactor(),i.pivotX=i.pivotY=.5,i.x-=i.width/2-ee.boxSize/2,i.y-=i.height/2-ee.boxSize/2,r=U.tweenProperty(i,"rotation",i.rotation,Math.PI,60,["spline",10,10],!1,0),U.tweenProperty(i,"scaleY",i.scaleY,i.scaleY+.02,60,["spline",100,1],!1,0),U.tweenProperty(i,"scaleX",i.scaleX,i.scaleX+.02,60,["spline",100,1],!1,0),r.onComplete=()=>{p.remove(z[1]),p.remove(F[0]),p.remove(F[1])}):"2boxes"===e?(o.activeSprite=o.activeSprite===s?v:s,j(t),z[0].type="road",z[1].y+=_,z[1].gridY+=1,F[1].y+=_,F[1].gridY+=1,I[0].type="box"):"2boxesbananas"===e?(o.activeSprite=o.activeSprite===s?v:s,--o.bananasToEat,j(t),z[0].type="road",z[1].y+=_,z[1].gridY+=1,I[0].type="forest",(i=I[1]).scaleX=i.scaleY=ee.scaleFactor(),i.pivotX=i.pivotY=.5,i.x-=i.width/2-ee.boxSize/2,i.y-=i.height/2-ee.boxSize/2,U.tweenProperty(i,"rotation",i.rotation,-2*Math.PI,60,["spline",10,10],!1,0),(r=F[1]).y+=_,r.scaleX=r.scaleY=ee.scaleFactor(),r.pivotX=r.pivotY=.5,r.x-=r.width/2-ee.boxSize/2,r.y-=r.height/2-ee.boxSize/2,e=U.tweenProperty(r,"rotation",r.rotation,Math.PI,60,["spline",10,10],!1,0),U.tweenProperty(r,"scaleY",r.scaleY,r.scaleY+.02,60,["spline",100,1],!1,0),U.tweenProperty(r,"scaleX",r.scaleX,r.scaleX+.02,60,["spline",100,1],!1,0),e.onComplete=()=>{p.remove(F[1]),p.remove(I[0]),p.remove(I[1])}):N()}function j(e){o.activeSprite.x=e.x,o.activeSprite.y=e.y,o.activeSprite.gridX=e.gridX,o.activeSprite.gridY=e.gridY,o.activeSprite.visible=!0,o.setVisible()}function N(){var e,t,i,r;"right"===a?(o.activeSprite===d?(e=o.activeSprite.x,t=o.activeSprite.y,i=o.activeSprite.gridX,r=o.activeSprite.gridY,o.activeSprite=G,o.activeSprite.x=e,o.activeSprite.y=t,o.activeSprite.gridX=i,o.activeSprite.gridY=r):(e=o.activeSprite.x,t=o.activeSprite.y,i=o.activeSprite.gridX,r=o.activeSprite.gridY,o.activeSprite=d,o.activeSprite.x=e,o.activeSprite.y=t,o.activeSprite.gridX=i,o.activeSprite.gridY=r),o.activeSprite.visible=!0,o.setVisible()):"left"===a?(o.activeSprite===S?(e=o.activeSprite.x,t=o.activeSprite.y,i=o.activeSprite.gridX,r=o.activeSprite.gridY,o.activeSprite=K,o.activeSprite.x=e,o.activeSprite.y=t,o.activeSprite.gridX=i,o.activeSprite.gridY=r):(e=o.activeSprite.x,t=o.activeSprite.y,i=o.activeSprite.gridX,r=o.activeSprite.gridY,o.activeSprite=S,o.activeSprite.x=e,o.activeSprite.y=t,o.activeSprite.gridX=i,o.activeSprite.gridY=r),o.activeSprite.visible=!0,o.setVisible()):"up"===a?(o.activeSprite===n?(e=o.activeSprite.x,t=o.activeSprite.y,i=o.activeSprite.gridX,r=o.activeSprite.gridY,o.activeSprite=c,o.activeSprite.x=e,o.activeSprite.y=t,o.activeSprite.gridX=i,o.activeSprite.gridY=r):(e=o.activeSprite.x,t=o.activeSprite.y,i=o.activeSprite.gridX,r=o.activeSprite.gridY,o.activeSprite=n,o.activeSprite.x=e,o.activeSprite.y=t,o.activeSprite.gridX=i,o.activeSprite.gridY=r),o.activeSprite.visible=!0,o.setVisible()):"down"===a&&(o.activeSprite===s?(e=o.activeSprite.x,t=o.activeSprite.y,i=o.activeSprite.gridX,r=o.activeSprite.gridY,o.activeSprite=v,o.activeSprite.x=e,o.activeSprite.y=t,o.activeSprite.gridX=i,o.activeSprite.gridY=r):(e=o.activeSprite.x,t=o.activeSprite.y,i=o.activeSprite.gridX,r=o.activeSprite.gridY,o.activeSprite=s,o.activeSprite.x=e,o.activeSprite.y=t,o.activeSprite.gridX=i,o.activeSprite.gridY=r),o.activeSprite.visible=!0,o.setVisible())}}export{W as scene,Z as gridDimension,_ as stepWidth,ee as standard,i as setScene,r as moveScene};