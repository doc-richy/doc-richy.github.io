import*as Z from"./tweens.js";import"./sounds.js";import"./gamesounds.js";import"./typedef.js";let _=void 0,ee=void 0,te=void 0,ie=void 0,re=!1,ae,pe,oe,ce;function e(e,t){if(_=e,te=t.boxSize,ie=t,1===_)ee=12;else if(2===_)ee=14;else{if(3!==_)throw new Error(`This data: ${_} is not allowed for scene.`);ee=16}}function t(e){re=e}function i(e,t,i,r){(ae=e).loop=!1,pe=t,oe=i,ce=r}function r(a,p,o,e){let k,q,c,n,A,B,v,d,D,G,H,s,J,K,L,l;k=e[0],q=e[1],c=e[2],n=e[3],A=e[4],B=e[5],v=e[6],d=e[7],D=e[8],G=e[9],H=e[10],s=e[11],J=e[12],K=e[13],L=e[14],l=e[15];let S,y,g,t,i,N,b,x,X,r,Y,O,h,w,f,P,m,Q,z,u,F,I,M,R;if(_&&1===_)"right"===a?(S=p.children.filter(e=>e.gridX===o.activeSprite.gridX+1&&e.gridY===o.activeSprite.gridY),y=p.children.filter(e=>e.gridX===o.activeSprite.gridX+2&&e.gridY===o.activeSprite.gridY),t=S[0],i=y[0],t?"road"===t.type||"bananas"===t.type?E("road",t,i):"box"===t.type&&i&&"road"===i.type?E("box",t,i):"box"===t.type&&i&&"bananas"===i.type?E("bananas",t,i):$():$()):"left"===a?(b=p.children.filter(e=>e.gridX===o.activeSprite.gridX-1&&e.gridY===o.activeSprite.gridY),x=p.children.filter(e=>e.gridX===o.activeSprite.gridX-2&&e.gridY===o.activeSprite.gridY),r=b[0],Y=x[0],r?"road"===r.type||"bananas"===r.type?T("road",r,Y):"box"===r.type&&Y&&"road"===Y.type?T("box",r,Y):"box"===r.type&&Y&&"bananas"===Y.type?T("bananas",r,Y):$():$()):"up"===a?(h=p.children.filter(e=>e.gridX===o.activeSprite.gridX&&e.gridY===o.activeSprite.gridY-1),w=p.children.filter(e=>e.gridX===o.activeSprite.gridX&&e.gridY===o.activeSprite.gridY-2),P=h[0],m=w[0],P?"road"===P.type||"bananas"===P.type?C("road",P,m):"box"===P.type&&m&&"road"===m.type?C("box",P,m):"box"===P.type&&m&&"bananas"===m.type?C("bananas",P,m):$():$()):"down"===a&&(z=p.children.filter(e=>e.gridX===o.activeSprite.gridX&&e.gridY===o.activeSprite.gridY+1),u=p.children.filter(e=>e.gridX===o.activeSprite.gridX&&e.gridY===o.activeSprite.gridY+2),I=z[0],M=u[0],I?"road"===I.type||"bananas"===I.type?V("road",I,M):"box"===I.type&&M&&"road"===M.type?V("box",I,M):"box"===I.type&&M&&"bananas"===M.type?V("bananas",I,M):$():$());else{if(!(_&&1<_))throw new Error("The scene is not define properly =>>> "+_);"right"===a?(S=p.children.filter(e=>e.gridX===o.activeSprite.gridX+1&&e.gridY===o.activeSprite.gridY),y=p.children.filter(e=>e.gridX===o.activeSprite.gridX+2&&e.gridY===o.activeSprite.gridY),g=p.children.filter(e=>e.gridX===o.activeSprite.gridX+3&&e.gridY===o.activeSprite.gridY),t=S[0],i=y[0],N=g[0],t?"road"===t.type||"bananas"===t.type?E("road",t,i):"box"===t.type&&i?"road"===i.type?E("box",t,i):"bananas"===i.type?E("bananas",t,i):"box"===i.type&&N?"road"===N.type?E("2boxes",t,i):"bananas"===N.type?E("2boxesbananas",t,i):$():$():$():$()):"left"===a?(b=p.children.filter(e=>e.gridX===o.activeSprite.gridX-1&&e.gridY===o.activeSprite.gridY),x=p.children.filter(e=>e.gridX===o.activeSprite.gridX-2&&e.gridY===o.activeSprite.gridY),X=p.children.filter(e=>e.gridX===o.activeSprite.gridX-3&&e.gridY===o.activeSprite.gridY),r=b[0],Y=x[0],O=X[0],r?"road"===r.type||"bananas"===r.type?T("road",r,Y):"box"===r.type&&Y?"road"===Y.type?T("box",r,Y):"bananas"===Y.type?T("bananas",r,Y):"box"===Y.type&&O?"road"===O.type?T("2boxes",r,Y):"bananas"===O.type?T("2boxesbananas",r,Y):$():$():$():$()):"up"===a?(h=p.children.filter(e=>e.gridX===o.activeSprite.gridX&&e.gridY===o.activeSprite.gridY-1),w=p.children.filter(e=>e.gridX===o.activeSprite.gridX&&e.gridY===o.activeSprite.gridY-2),f=p.children.filter(e=>e.gridX===o.activeSprite.gridX&&e.gridY===o.activeSprite.gridY-3),P=h[0],m=w[0],Q=f[0],P?"road"===P.type||"bananas"===P.type?C("road",P,m):"box"===P.type&&m?"road"===m.type?C("box",P,m):"bananas"===m.type?C("bananas",P,m):"box"===m.type&&Q?"road"===Q.type?C("2boxes",P,m):"bananas"===Q.type?C("2boxesbananas",P,m):$():$():$():$()):"down"===a&&(z=p.children.filter(e=>e.gridX===o.activeSprite.gridX&&e.gridY===o.activeSprite.gridY+1),u=p.children.filter(e=>e.gridX===o.activeSprite.gridX&&e.gridY===o.activeSprite.gridY+2),F=p.children.filter(e=>e.gridX===o.activeSprite.gridX&&e.gridY===o.activeSprite.gridY+3),I=z[0],M=u[0],R=F[0],I?"road"===I.type||"bananas"===I.type?V("road",I,M):"box"===I.type&&M?"road"===M.type?V("box",I,M):"bananas"===M.type?V("bananas",I,M):"box"===M.type&&R?"road"===R.type?V("2boxes",I,M):"bananas"===R.type?V("2boxesbananas",I,M):$():$():$():$())}function E(e,t,i){var r;1<_&&5<=o.activeSprite.gridX&&1550<p.x+p.width&&(p.x-=te),"road"===e?(o.activeSprite=o.activeSprite===G?D:G,j(t)):"box"===e?(U(),o.activeSprite=o.activeSprite===s?H:s,j(t),S[0].type="road",i.type="box",S[1].x+=te,S[1].gridX+=1):"bananas"===e?(o.activeSprite=o.activeSprite===s?H:s,--o.bananasToEat,j(t),S[0].type="road",y[0].type="forest",(i=y[1]).scaleX=i.scaleY=ie.scaleFactor(),i.pivotX=i.pivotY=.5,i.x-=i.width/2-ie.boxSize/2,i.y-=i.height/2-ie.boxSize/2,Z.tweenProperty(i,"rotation",i.rotation,-2*Math.PI,60,["spline",10,10],!1,0),re&&ae.play(),(i=S[1]).x+=te,i.scaleX=i.scaleY=ie.scaleFactor(),i.pivotX=i.pivotY=.5,i.x-=i.width/2-ie.boxSize/2,i.y-=i.height/2-ie.boxSize/2,r=Z.tweenProperty(i,"rotation",i.rotation,Math.PI,60,["spline",10,10],!1,0),Z.tweenProperty(i,"scaleY",i.scaleY,i.scaleY+.02,60,["spline",100,1],!1,0),Z.tweenProperty(i,"scaleX",i.scaleX,i.scaleX+.02,60,["spline",100,1],!1,0),r.onComplete=()=>{p.remove(S[1]),p.remove(y[0]),p.remove(y[1])}):"2boxes"===e?(W(),o.activeSprite=o.activeSprite===s?H:s,j(t),S[0].type="road",S[1].x+=te,S[1].gridX+=1,y[1].x+=te,y[1].gridX+=1,g[0].type="box"):"2boxesbananas"===e?(o.activeSprite=o.activeSprite===s?H:s,--o.bananasToEat,j(t),S[0].type="road",S[1].x+=te,S[1].gridX+=1,g[0].type="forest",(i=g[1]).scaleX=i.scaleY=ie.scaleFactor(),i.pivotX=i.pivotY=.5,i.x-=i.width/2-ie.boxSize/2,i.y-=i.height/2-ie.boxSize/2,Z.tweenProperty(i,"rotation",i.rotation,-2*Math.PI,60,["spline",10,10],!1,0),re&&ae.play(),(r=y[1]).x+=te,r.scaleX=r.scaleY=ie.scaleFactor(),r.pivotX=r.pivotY=.5,r.x-=r.width/2-ie.boxSize/2,r.y-=r.height/2-ie.boxSize/2,e=Z.tweenProperty(r,"rotation",r.rotation,Math.PI,60,["spline",10,10],!1,0),Z.tweenProperty(r,"scaleY",r.scaleY,r.scaleY+.02,60,["spline",100,1],!1,0),Z.tweenProperty(r,"scaleX",r.scaleX,r.scaleX+.02,60,["spline",100,1],!1,0),e.onComplete=()=>{p.remove(y[1]),p.remove(g[0]),p.remove(g[1])}):$()}function T(e,t,i){var r;1<_&&o.activeSprite.gridX<=ee-6&&p.x<-32&&(p.x+=te),"road"===e?(o.activeSprite=o.activeSprite===K?J:K,j(t)):"box"===e?(U(),o.activeSprite=o.activeSprite===l?L:l,j(t),b[0].type="road",i.type="box",b[1].x-=te,--b[1].gridX):"bananas"===e?(o.activeSprite=o.activeSprite===l?L:l,--o.bananasToEat,j(t),b[0].type="road",x[0].type="forest",(i=x[1]).scaleX=i.scaleY=ie.scaleFactor(),i.pivotX=i.pivotY=.5,i.x-=i.width/2-ie.boxSize/2,i.y-=i.height/2-ie.boxSize/2,Z.tweenProperty(i,"rotation",i.rotation,-2*Math.PI,60,["spline",10,10],!1,0),re&&ae.play(),(i=b[1]).x-=te,i.scaleX=i.scaleY=ie.scaleFactor(),i.pivotX=i.pivotY=.5,i.x-=i.width/2-ie.boxSize/2,i.y-=i.height/2-ie.boxSize/2,r=Z.tweenProperty(i,"rotation",i.rotation,Math.PI,60,["spline",10,10],!1,0),Z.tweenProperty(i,"scaleY",i.scaleY,i.scaleY+.02,60,["spline",100,1],!1,0),Z.tweenProperty(i,"scaleX",i.scaleX,i.scaleX+.02,60,["spline",100,1],!1,0),r.onComplete=()=>{p.remove(b[1]),p.remove(x[0]),p.remove(x[1])}):"2boxes"===e?(W(),o.activeSprite=o.activeSprite===l?L:l,j(t),b[0].type="road",b[1].x-=te,--b[1].gridX,x[1].x-=te,--x[1].gridX,X[0].type="box"):"2boxesbananas"===e?(o.activeSprite=o.activeSprite===l?L:l,--o.bananasToEat,j(t),b[0].type="road",b[1].x-=te,--b[1].gridX,X[0].type="forest",(i=X[1]).scaleX=i.scaleY=ie.scaleFactor(),i.pivotX=i.pivotY=.5,i.x-=i.width/2-ie.boxSize/2,i.y-=i.height/2-ie.boxSize/2,Z.tweenProperty(i,"rotation",i.rotation,-2*Math.PI,60,["spline",10,10],!1,0),re&&ae.play(),(r=x[1]).x-=te,r.scaleX=r.scaleY=ie.scaleFactor(),r.pivotX=r.pivotY=.5,r.x-=r.width/2-ie.boxSize/2,r.y-=r.height/2-ie.boxSize/2,e=Z.tweenProperty(r,"rotation",r.rotation,Math.PI,60,["spline",10,10],!1,0),Z.tweenProperty(r,"scaleY",r.scaleY,r.scaleY+.02,60,["spline",100,1],!1,0),Z.tweenProperty(r,"scaleX",r.scaleX,r.scaleX+.02,60,["spline",100,1],!1,0),e.onComplete=()=>{p.remove(x[1]),p.remove(X[0]),p.remove(X[1])}):$()}function C(e,t,i){var r;1<_&&o.activeSprite.gridY<=ee-6&&p.y<-32&&(p.y+=te),"road"===e?(o.activeSprite=o.activeSprite===q?k:q,j(t)):"box"===e?(U(),o.activeSprite=o.activeSprite===n?c:n,j(t),h[0].type="road",i.type="box",h[1].y-=te,--h[1].gridY):"bananas"===e?(o.activeSprite=o.activeSprite===n?c:n,--o.bananasToEat,j(t),h[0].type="road",w[0].type="forest",(i=w[1]).scaleX=i.scaleY=ie.scaleFactor(),i.pivotX=i.pivotY=.5,i.x-=i.width/2-ie.boxSize/2,i.y-=i.height/2-ie.boxSize/2,Z.tweenProperty(i,"rotation",i.rotation,-2*Math.PI,60,["spline",10,10],!1,0),re&&ae.play(),(i=h[1]).y-=te,i.scaleX=i.scaleY=ie.scaleFactor(),i.pivotX=i.pivotY=.5,i.x-=i.width/2-ie.boxSize/2,i.y-=i.height/2-ie.boxSize/2,r=Z.tweenProperty(i,"rotation",i.rotation,Math.PI,60,["spline",10,10],!1,0),Z.tweenProperty(i,"scaleY",i.scaleY,i.scaleY+.02,60,["spline",100,1],!1,0),Z.tweenProperty(i,"scaleX",i.scaleX,i.scaleX+.02,60,["spline",100,1],!1,0),r.onComplete=()=>{p.remove(h[1]),p.remove(w[0]),p.remove(w[1])}):"2boxes"===e?(W(),o.activeSprite=o.activeSprite===n?c:n,j(t),h[0].type="road",h[1].y-=te,--h[1].gridY,w[1].y-=te,--w[1].gridY,f[0].type="box"):"2boxesbananas"===e?(o.activeSprite=o.activeSprite===n?c:n,--o.bananasToEat,j(t),h[0].type="road",h[1].y-=te,--h[1].gridY,f[0].type="forest",(i=f[1]).scaleX=i.scaleY=ie.scaleFactor(),i.pivotX=i.pivotY=.5,i.x-=i.width/2-ie.boxSize/2,i.y-=i.height/2-ie.boxSize/2,Z.tweenProperty(i,"rotation",i.rotation,-2*Math.PI,60,["spline",10,10],!1,0),re&&ae.play(),(r=w[1]).y-=te,r.scaleX=r.scaleY=ie.scaleFactor(),r.pivotX=r.pivotY=.5,r.x-=r.width/2-ie.boxSize/2,r.y-=r.height/2-ie.boxSize/2,e=Z.tweenProperty(r,"rotation",r.rotation,Math.PI,60,["spline",10,10],!1,0),Z.tweenProperty(r,"scaleY",r.scaleY,r.scaleY+.02,60,["spline",100,1],!1,0),Z.tweenProperty(r,"scaleX",r.scaleX,r.scaleX+.02,60,["spline",100,1],!1,0),e.onComplete=()=>{p.remove(w[1]),p.remove(f[0]),p.remove(f[1])}):$()}function V(e,t,i){var r;1<_&&5<=o.activeSprite.gridY&&1550<p.y+p.height&&(p.y-=te),"road"===e?(o.activeSprite=o.activeSprite===B?A:B,j(t)):"box"===e?(U(),o.activeSprite=o.activeSprite===d?v:d,j(t),z[0].type="road",i.type="box",z[1].y+=te,z[1].gridY+=1):"bananas"===e?(o.activeSprite=o.activeSprite===d?v:d,--o.bananasToEat,j(t),z[0].type="road",u[0].type="forest",(i=u[1]).scaleX=i.scaleY=ie.scaleFactor(),i.pivotX=i.pivotY=.5,i.x-=i.width/2-ie.boxSize/2,i.y-=i.height/2-ie.boxSize/2,Z.tweenProperty(i,"rotation",i.rotation,-2*Math.PI,60,["spline",10,10],!1,0),re&&ae.play(),(i=z[1]).y+=te,i.scaleX=i.scaleY=ie.scaleFactor(),i.pivotX=i.pivotY=.5,i.x-=i.width/2-ie.boxSize/2,i.y-=i.height/2-ie.boxSize/2,r=Z.tweenProperty(i,"rotation",i.rotation,Math.PI,60,["spline",10,10],!1,0),Z.tweenProperty(i,"scaleY",i.scaleY,i.scaleY+.02,60,["spline",100,1],!1,0),Z.tweenProperty(i,"scaleX",i.scaleX,i.scaleX+.02,60,["spline",100,1],!1,0),r.onComplete=()=>{p.remove(z[1]),p.remove(u[0]),p.remove(u[1])}):"2boxes"===e?(W(),o.activeSprite=o.activeSprite===d?v:d,j(t),z[0].type="road",z[1].y+=te,z[1].gridY+=1,u[1].y+=te,u[1].gridY+=1,F[0].type="box"):"2boxesbananas"===e?(o.activeSprite=o.activeSprite===d?v:d,--o.bananasToEat,j(t),z[0].type="road",z[1].y+=te,z[1].gridY+=1,F[0].type="forest",(i=F[1]).scaleX=i.scaleY=ie.scaleFactor(),i.pivotX=i.pivotY=.5,i.x-=i.width/2-ie.boxSize/2,i.y-=i.height/2-ie.boxSize/2,Z.tweenProperty(i,"rotation",i.rotation,-2*Math.PI,60,["spline",10,10],!1,0),re&&ae.play(),(r=u[1]).y+=te,r.scaleX=r.scaleY=ie.scaleFactor(),r.pivotX=r.pivotY=.5,r.x-=r.width/2-ie.boxSize/2,r.y-=r.height/2-ie.boxSize/2,e=Z.tweenProperty(r,"rotation",r.rotation,Math.PI,60,["spline",10,10],!1,0),Z.tweenProperty(r,"scaleY",r.scaleY,r.scaleY+.02,60,["spline",100,1],!1,0),Z.tweenProperty(r,"scaleX",r.scaleX,r.scaleX+.02,60,["spline",100,1],!1,0),e.onComplete=()=>{p.remove(u[1]),p.remove(F[0]),p.remove(F[1])}):$()}function j(e){o.activeSprite.x=e.x,o.activeSprite.y=e.y,o.activeSprite.gridX=e.gridX,o.activeSprite.gridY=e.gridY,o.activeSprite.visible=!0,o.setVisible()}function U(){re&&oe.play()}function W(){re&&(ce.setEcho(.1,.1),ce.play())}function $(){var e,t,i,r;re&&pe.play(),"right"===a?(o.activeSprite===s?(e=o.activeSprite.x,t=o.activeSprite.y,i=o.activeSprite.gridX,r=o.activeSprite.gridY,o.activeSprite=H,o.activeSprite.x=e,o.activeSprite.y=t,o.activeSprite.gridX=i,o.activeSprite.gridY=r):(e=o.activeSprite.x,t=o.activeSprite.y,i=o.activeSprite.gridX,r=o.activeSprite.gridY,o.activeSprite=s,o.activeSprite.x=e,o.activeSprite.y=t,o.activeSprite.gridX=i,o.activeSprite.gridY=r),o.activeSprite.visible=!0,o.setVisible()):"left"===a?(o.activeSprite===l?(e=o.activeSprite.x,t=o.activeSprite.y,i=o.activeSprite.gridX,r=o.activeSprite.gridY,o.activeSprite=L,o.activeSprite.x=e,o.activeSprite.y=t,o.activeSprite.gridX=i,o.activeSprite.gridY=r):(e=o.activeSprite.x,t=o.activeSprite.y,i=o.activeSprite.gridX,r=o.activeSprite.gridY,o.activeSprite=l,o.activeSprite.x=e,o.activeSprite.y=t,o.activeSprite.gridX=i,o.activeSprite.gridY=r),o.activeSprite.visible=!0,o.setVisible()):"up"===a?(o.activeSprite===n?(e=o.activeSprite.x,t=o.activeSprite.y,i=o.activeSprite.gridX,r=o.activeSprite.gridY,o.activeSprite=c,o.activeSprite.x=e,o.activeSprite.y=t,o.activeSprite.gridX=i,o.activeSprite.gridY=r):(e=o.activeSprite.x,t=o.activeSprite.y,i=o.activeSprite.gridX,r=o.activeSprite.gridY,o.activeSprite=n,o.activeSprite.x=e,o.activeSprite.y=t,o.activeSprite.gridX=i,o.activeSprite.gridY=r),o.activeSprite.visible=!0,o.setVisible()):"down"===a&&(o.activeSprite===d?(e=o.activeSprite.x,t=o.activeSprite.y,i=o.activeSprite.gridX,r=o.activeSprite.gridY,o.activeSprite=v,o.activeSprite.x=e,o.activeSprite.y=t,o.activeSprite.gridX=i,o.activeSprite.gridY=r):(e=o.activeSprite.x,t=o.activeSprite.y,i=o.activeSprite.gridX,r=o.activeSprite.gridY,o.activeSprite=d,o.activeSprite.x=e,o.activeSprite.y=t,o.activeSprite.gridX=i,o.activeSprite.gridY=r),o.activeSprite.visible=!0,o.setVisible())}}export{_ as scene,ee as gridDimension,te as stepWidth,ie as standard,e as setScene,t as setSound,i as setSoundEffect,r as moveScene};