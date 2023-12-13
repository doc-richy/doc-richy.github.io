import{game as $}from"./library/engine.js";import*as W from"./library/level.js";import*as R from"./library/move.js";import"./typedef.js";let O=document.getElementById("main"),M=document.getElementById("infodiv"),A=document.getElementById("infoframe"),j=document.getElementById("wait-video"),r={scaleCanvas:1,scaleX:1,scaleY:2,boxSize:90,boxViewQuantity:12,scaleFactor:()=>r.boxSize/512,quota:void 0},g={t:0,s:0,b:-1},n={t:0,bt:-1,s:0,bs:-1,b:-1,bb:-1},D=[],H=void 0,V=!1,q=!1,U=!1,G=!1,t=document.getElementById("btn-1"),s=document.getElementById("btn-2"),N=document.getElementsByClassName("floating-menu")[0],J,Q,K,Z,ee=!1,te=1920,se=1080,ie=90,ne=90,ae=12,oe=12,re=64,p=.2,ge=.75,pe=[[{s:70,t:15.93,csec:15930},{s:106,t:80.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930}],[{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930}],[{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930}]],ce=[[{s:65,t:1918.02},{s:76,t:80.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02}],[{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02}],[{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02}]],le,de,he,_e,e,ue,i,c,a,ve,me,o,xe,ye,be,l,d,fe,we,ke,h,Se,ze,Ee,Fe,Ye,Pe,Xe,Te,Le,Ce,Be,Ie,$e,We,Re,Oe,Me,_,Ae,u,v,je,De,He,Ve,qe,m,Ue,x,y,b,f,w,k,Ge,Ne,S,Je,Qe,Ke,Ze,et,tt,st,it,nt,at,ot,rt,gt,pt=["12x12","14x14","16x16"],ct,lt,dt,ht,_t,z,E,F={},Y=[],P=[],X=1,T=1,ut=W.level[X-1][T-1],vt=1,mt=1,xt=setInterval(()=>B.progressBar.update(),5),yt=(document.addEventListener("myProper",e=>console.log("From my proper ",e.text)),512),bt=[],ft=[],wt=[],L,kt,St,zt,Et,C,Ft,Yt,Pt,Xt,Tt=/Mobile/i.test(navigator.userAgent),Lt=window.devicePixelRatio.toFixed(2),Ct=!1,B=(("ontouchstart"in window||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints||"ontouchstart"in document.documentElement||"touchstart"in document.documentElement)&&(Ct=!0),Tt&&(mt=3.5<=Lt&&Lt<=4.2?vt=1.2:2.8<=Lt&&Lt<3.5?(vt=1.5,1.2):(vt=1.6,1.5)),new $(te,se,Mt,["images/walk_512.json","images/info_box.png","images/info_level_box.png","images/view_420x1080.png","images/blocksBorder_12x12.png","images/blocksBorder_14x14.png","images/blocksBorder_16x16.png","images/b_info_up.png","images/b_info_over.png","images/b_scene_up.png","images/b_scene_over.png","images/b_scene_top_up.png","images/b_scene_top_over.png","images/b_play_up.png","images/b_play_over.png","images/infogame.png","images/yo_level_512.png","images/save_img.png","images/save_img_in.png","images/save_ok_512_up.png","images/save_ok_512_over.png","images/save_cancel_512_up.png","images/save_cancel_512_over.png","images/save_512_up.png","images/save_512_over.png","images/save_512_in_up.png","images/save_512_in_over.png","images/save_512_out_up.png","images/save_512_out_over.png","images/infogame_512_up.png","images/infogame_512_over.png","images/restart_512_up.png","images/restart_512_over.png","images/pause_512_up.png","images/pause_512_over.png","images/pause_on_512_up.png","images/pause_on_512_over.png","images/home_512_up.png","images/home_512_over.png","images/menu_512_up.png","images/menu_512_over.png","images/menu_open_512_up.png","images/menu_open_512_over.png","images/road_512.png","images/forest_512.png","images/forest.png","images/forest24.jpg","images/box_512.png","images/bananas_0_512.png","images/bananas_512_neutral.png","images/fond_ecran_950.jpg","images/emoji_yo.png","sounds/bounce.wav","sounds/music.wav","fonts/puzzler.otf","images/pad_512_up_up.png","images/pad_512_up_over.png","images/pad_512_down_up.png","images/pad_512_down_over.png","images/pad_512_right_up.png","images/pad_512_right_over.png","images/pad_512_left_up.png","images/pad_512_left_over.png","images/step_512_neutral.png","images/time_512_neutral.png","images/fullscreen_on_512_up.png","images/fullscreen_on_512_over.png","images/fullscreen_off_512_up.png","images/fullscreen_off_512_over.png","images/sound_yes_240_up.png","images/sound_yes_240_over.png","images/sound_no_240_up.png","images/sound_no_240_over.png","images/b_about_up_128.png","images/b_about_over_128.png"],Ot)),Bt=(O.appendChild(B.canvas),window.infoHide=e=>{M.classList.remove("show"),M.classList.add("hide")},window.about=e=>{A.src="./html_page/about.html"},window.general=e=>{A.src="./html_page/general.html"},window.buttonsExplained=e=>{A.src="./html_page/buttonsexplained.html"},window.spareButton=e=>{A.src="./html_page/sparebutton.html"},B.keyboard(37)),It=B.keyboard(38),$t=B.keyboard(39),Wt=B.keyboard(40),Rt={leftArrow:Bt,upArrow:It,rightArrow:$t,downArrow:Wt};function Ot(){0===B.progressBar.counter&&(B.progressBar.setBackgroundColor("#FFA80F"),B.progressBar.setForegroundColor("#FFEC4B"),B.progressBar.create(B.canvas,B.assets,B.canvas.width/2,100)),B.progressBar.update()}function Mt(){document.body.removeChild(j),B.progressBar.remove(),clearInterval(xt),ds(),Se=[B.assets["walkDownRight.png"],B.assets["images/road_512.png"],B.assets["images/forest_512.png"],B.assets["images/box_512.png"],B.assets["images/bananas_0_512.png"],B.assets["walkUpRight.png"],B.assets["walkUpLeft.png"],B.assets["walkUpRightPush.png"],B.assets["walkUpLeftPush.png"],B.assets["walkDownRight.png"],B.assets["walkDownLeft.png"],B.assets["walkDownRightPush.png"],B.assets["walkDownLeftPush.png"],B.assets["walkRightRight.png"],B.assets["walkRightLeft.png"],B.assets["walkRightRightPush.png"],B.assets["walkRightLeftPush.png"],B.assets["walkLeftRight.png"],B.assets["walkLeftLeft.png"],B.assets["walkLeftRightPush.png"],B.assets["walkLeftLeftPush.png"]],F.setVisible=()=>{Y.forEach(e=>{e===F.activeSprite?e.visible=!0:(e.visible=!1,e.gridX=-10,e.gridY=-10)})},F.layer=3,F.bananasToEat=0,F.move=R.moveScene,Kt(),Zt(),ss(),Qt(1,1),vs(),cs(),$t.press=()=>{F.move("right",h,F,Y),P.push({x:this.yo.activeSprite.gridX,y:this.yo.activeSprite.gridY,d:"r"})},It.press=()=>{F.move("up",h,F,Y),P.push({x:this.yo.activeSprite.gridX,y:this.yo.activeSprite.gridY,d:"u"})},Bt.press=()=>{F.move("left",h,F,Y),P.push({x:this.yo.activeSprite.gridX,y:this.yo.activeSprite.gridY,d:"l"})},Wt.press=()=>{F.move("down",h,F,Y),P.push({x:this.yo.activeSprite.gridX,y:this.yo.activeSprite.gridY,d:"d"})},ft=[It,Wt,$t,Bt,kt,St,zt,Et,Ft,Yt,Pt,Xt],B.setButtonsMove(ft,u)}function At(){0===F.bananasToEat&&(B.pause(),B.endGame(),B.wait(1e3).then(()=>jt()))}function jt(){le.volume=.3,us("end")}function Dt(){We.visible=!0,Re.visible=!0,Oe.visible=!0,E.visible&&(E.visible=!1,bt.forEach(e=>e.interactive=!0)),Jt(X,T,"homePress"),es(X,T),B.slide(ht,-B.canvas.width,B.canvas.height,30,["decelerationCubed"]).onComplete=()=>{ns()},B.slide(_e,0,0,30,["decelerationCubed"]),B.endGame()}function Ht(){0!==g.t&&B.isPlaying?(u.visible?(B.pause(),u.visible=!1,v.visible=!0):(B.resume(),u.visible=!0,v.visible=!1),Jt(X,T,"restart"),B.slide(ht,0,0,30,["decelerationCubed"]),B.state=At):(u.visible=!0,v.visible=!1)}function Vt(){Jt(X,T,"restart"),B.slide(ht,0,0,30,["decelerationCubed"]),B.state=At}function qt(){E.visible&&(E.visible=!1,bt.forEach(e=>e.interactive=!0)),c.visible?(c.visible=!1,a.visible=!0,B.fadeIn(a,30),B.fadeOut(c,30),N.classList.remove("hide"),N.classList.add("show")):(c.visible=!0,a.visible=!1,B.fadeIn(c,30),B.fadeOut(a,30),N.classList.remove("show"),N.classList.add("hide"))}function Ut(){E.visible&&(E.visible=!1),ms(),B.slide(qe,.5*B.canvas.width-380,.5*B.canvas.height-256,30)}function Gt(){E.visible&&(E.visible=!1,bt.forEach(e=>e.interactive=!0)),u.visible?(u.visible=!1,v.visible=!0,setTimeout(()=>{u.interactive=!1,B.isPlaying&&B.pause(),v.interactive=!0,wt.forEach((e,t)=>{t<=2?(e.visible=!0,e.interactive=!0):e.visible=!0})},200)):(u.visible=!0,v.visible=!1,setTimeout(()=>{u.interactive=!0,v.interactive=!1,wt.forEach((e,t)=>{t<=2?(e.visible=!1,e.interactive=!1):e.visible=!1})},200))}function Nt(){Jt(X,T,"home"),es(X,T),B.slide(ht,-B.canvas.width,B.canvas.height,30,["decelerationCubed"]),B.slide(_e,0,0,30,["decelerationCubed"]),B.endGame(),jt()}function Jt(e,t,s){if(e<1&&4<e)throw new Error(`This level : ${e} is not developped yet.`);if(1===e){if(t<1&&9<t)throw new Error(`This level : ${t} is not developped yet.`);ae=oe=12}else if(2===e){if(t<1&&9<t)throw new Error(`This levelToSet : ${t} is not developped yet.`);ae=oe=14}else{if(3!==e)throw new Error(`This scene : ${e} is not developped yet.`);if(t<1&&1<t)throw new Error(`This levelToSet : ${t} is not developped yet.`);if(1<t)throw new Error(`This levelToSet : ${t} is not developped yet.`);ae=oe=16}if(ut=W.level[e-1][t-1],T=t,X=e,hs(),Ee.remove(h),F.bananasToEat=0,h=B.gridSpecial(ae,oe,ie,ne,ut,Se,F,Y,r.scaleFactor(),!1,0,0),F.activeSprite=Y[4],F.setVisible(),(P=[]).push({x:F.activeSprite.gridX,y:F.activeSprite.gridY,d:"s"}),B.setYo(F),B.setStepArray(P),us("resetAll"),g.t=0,g.s=0,g.b=F.bananasToEat,B.setGameInfo(g),is(),1===X)Pe.visible=!0,Xe.visible=!1,Te.visible=!1,h.addChild(Pe);else if(2===X)Pe.visible=!1,Xe.visible=!0,Te.visible=!1,h.addChild(Xe);else{if(3!==X)throw new Error(`Scene playing : ${X} not possible.`);Pe.visible=!1,Xe.visible=!1,Te.visible=!0,h.addChild(Te)}Ee.addChild(h),R.setScene(e,r),Be.content=" "+(P.length-1),$e.content=" "+F.bananasToEat,N.classList.contains("show")&&c.press()}function Qt(e,t){if(e<1&&3<e)throw new Error(`This level : ${e} is not developped yet.`);if(1===e){if(t<1&&9<t)throw new Error(`This level : ${t} is not developped yet.`);ae=oe=12}else if(2===e){if(t<1&&9<t)throw new Error(`This levelToSet : ${t} is not developped yet.`);ae=oe=14}else{if(3!==e)throw new Error(`This scene : ${e} is not developped yet.`);if(t<1&&9<t)throw new Error(`This levelToSet : ${t} is not developped yet.`);ae=oe=16}if(ut=W.level[e-1][t-1],T=t,X=e,h=B.gridSpecial(ae,oe,ie,ne,ut,Se,F,Y,r.scaleFactor(),!1,0,0),F.activeSprite=Y[4],F.setVisible(),P=[],B.setYo(F),B.setStepArray(P),g.b=F.bananasToEat,B.setGameInfo(g),(ze=B.sprite(B.assets["images/forest24.jpg"])).layer=-1,ze.pivotX=0,ze.pivotY=0,Pe=B.sprite(B.assets["images/blocksBorder_12x12.png"]),Xe=B.sprite(B.assets["images/blocksBorder_14x14.png"]),Te=B.sprite(B.assets["images/blocksBorder_16x16.png"]),Pe.layer=Xe.layer=Te.layer=4,1===X)Pe.visible=!0,Xe.visible=!1,Te.visible=!1,h.addChild(Pe);else if(2===X)Pe.visible=!1,Xe.visible=!0,Te.visible=!1,h.addChild(Xe);else{if(3!==X)throw new Error(`Scene playing : ${X} not possible.`);Pe.visible=!1,Xe.visible=!1,Te.visible=!0,h.addChild(Te)}(Ee=B.group(ze,h)).x=420,Ee.layer=2,(ht=B.group(Ee,dt)).x=-B.canvas.width,ht.y=B.canvas.height,ht.layer=-1,ns(),R.setScene(e,r),qt()}function Kt(){de=B.assets["sounds/bounce.wav"],(le=B.assets["sounds/music.wav"]).loop=!0}function Zt(){(We=B.text("First","40px puzzler","deepskyblue")).y=B.canvas.height-135,(Re=B.text("First","40px puzzler","deepskyblue")).y=B.canvas.height-90,(Oe=B.text("First","40px puzzler","deepskyblue")).y=B.canvas.height-45;(e=B.sprite(B.assets["images/fond_ecran_950.jpg"])).x=(B.canvas.width-e.width)/2,e.y=(B.canvas.height-e.height)/2,X=X||1,T=T||1;(a=B.button([B.assets["images/menu_open_512_up.png"],B.assets["images/menu_open_512_over.png"],B.assets["images/menu_open_512_up.png"]])).x=10,a.y=10,a.pivotX=0,a.pivotY=0,a.scaleX=p,a.scaleY=p,a.layer=20,a.visible=!1,a.interactive=!1,(c=B.button([B.assets["images/menu_512_up.png"],B.assets["images/menu_512_over.png"],B.assets["images/menu_512_up.png"]])).x=10,c.y=10,c.pivotX=0,c.pivotY=0,c.scaleX=p,c.scaleY=p,c.layer=20,c.press=()=>qt(),l=B.sprite(B.assets["images/info_level_box.png"]),(d=B.text("12x12","50px puzzler","black",20,40)).content=pt[X-1],d.x=l.width/4,d.y=l.height/2-25,(fe=B.button([B.assets["images/b_scene_top_up.png"],B.assets["images/b_scene_top_over.png"],B.assets["images/b_scene_top_up.png"]])).x=l.width/2-fe.width/2,fe.y=l.height/4-fe.height/2,fe.press=()=>{X<3&&(Jt(X+=1,T,"scenePress"),B.slide(d,d.x,d.y-40,10,["smoothstep"]),B.fadeOut(d,10),setTimeout(()=>{d.content=pt[X-1],d.y+=80,B.slide(d,d.x,l.height/2-25,15,["smoothstep"]),B.fadeIn(d,15)},100))},(we=B.button([B.assets["images/b_scene_up.png"],B.assets["images/b_scene_over.png"],B.assets["images/b_scene_up.png"]])).x=l.width/2-we.width/2,we.y=3*l.height/4-fe.height/2,we.press=()=>{1<X&&(Jt(--X,T,"scenePress"),B.slide(d,d.x,d.y+40,10,["smoothstep"]),B.fadeOut(d,10),setTimeout(()=>{d.content=pt[X-1],d.y-=80,B.slide(d,d.x,l.height/2-25,15,["smoothstep"]),B.fadeIn(d,15)},200))},(ke=B.group(l,d,fe,we)).x=-B.canvas.width,ke.y=-B.canvas.height,me=B.sprite(B.assets["images/info_level_box.png"]),(o=B.text("Level "+T,"50px puzzler","black",20,40)).x=l.width/4,o.y=l.height/2-25,(xe=B.button([B.assets["images/b_scene_top_up.png"],B.assets["images/b_scene_top_over.png"],B.assets["images/b_scene_top_up.png"]])).press=()=>{T<9&&(T+=1,Jt(X,T,"levelPress"),B.slide(o,o.x,o.y-40,10,["smoothstep"]),B.fadeOut(o,10),setTimeout(()=>{o.content="Level "+T,o.y+=80,B.slide(o,o.x,me.height/2-25,15,["smoothstep"]),B.fadeIn(o,15)},100))},xe.x=me.width/2-xe.width/2,xe.y=me.height/4-xe.height/2,(ye=B.button([B.assets["images/b_scene_up.png"],B.assets["images/b_scene_over.png"],B.assets["images/b_scene_up.png"]])).x=me.width/2-ye.width/2,ye.y=3*me.height/4-xe.height/2,ye.press=()=>{1<T&&(--T,Jt(X,T,"levelPress"),B.slide(o,o.x,o.y+40,10,["smoothstep"]),B.fadeOut(o,10),setTimeout(()=>{o.content="Level "+T,o.y-=80,B.slide(o,o.x,me.height/2-25,15,["smoothstep"]),B.fadeIn(o,15)},100))},o.y=me.height/2-25,(be=B.group(me,o,xe,ye)).x=B.canvas.width,be.y=-B.canvas.height,(i=B.button([B.assets["images/b_info_up.png"],B.assets["images/b_info_over.png"],B.assets["images/b_info_up.png"]])).x=(B.canvas.width-e.width)/4-.5*i.width*vt/2,i.y=se-i.width,i.scaleX=.5*vt,i.scaleY=.5*vt,i.press=()=>{let e=B.rectangle(10,10,"#F7E9B8");e.pivotX=0,e.pivotY=0,e.x=i.x+i.width/2,e.y=i.y+i.height/2;var t=B.slide(e,e.x,100,30);B.tweenProperty(e,"scaleX",e.scaleX,180,30),B.tweenProperty(e,"scaleY",e.scaleY,80,30);t.onComplete=()=>{M.classList.remove("hide"),M.classList.add("show"),ls(),B.remove(e)}},(ue=B.button([B.assets["images/b_play_up.png"],B.assets["images/b_play_over.png"],B.assets["images/b_play_up.png"]])).x=te,ue.y=se,ue.scaleX=vt,ue.scaleY=vt,ue.press=()=>{We.visible=!1,Re.visible=!1,Oe.visible=!1,B.slide(_e,B.canvas.width,B.canvas.height,30,["decelerationCubed"]),B.slide(ht,0,0,30,["decelerationCubed"]).onComplete=()=>{ns()},X=X||1,T=T||1,d.content=pt[X-1],o.content="Level "+T,Jt(X,T,"playPress"),es(X,T),B.state=At},B.slide(ue,B.canvas.width-(B.canvas.width-e.width)/4-ue.width/2,.75*B.canvas.height-ue.width/2,30,["decelerationCubed"]),B.slide(ke,(B.canvas.width-e.width)/4-ke.width/2,e.y+ke.height/2,30,["decelerationCubed"]),B.slide(be,B.canvas.width-(B.canvas.width-e.width)/4-be.width/2,e.y+be.height/2,30,["decelerationCubed"]),_e=B.group(e,i,ue,be,ke,c,a)}function es(e,t){X=e,T=t,d.content=pt[X-1],o.content="Level "+T}function ts(){We.layer=100,Re.layer=100,Oe.layer=100,We.content=`is_M=${Tt} & is_T=${Ct} | DPI=${Lt} `,Re.content=`WA=${window.screen.availWidth},HA=`+window.screen.availHeight,Re.content+=` | WW=${window.innerWidth},WH=`+window.innerHeight,Re.content+=` | VW=${visualViewport.width},VH=`+visualViewport.height,Oe.content=`S_C=${r.scaleCanvas.toFixed(2)} & S_X= ${r.scaleX.toFixed(2)} & S_Y= `+r.scaleY.toFixed(2)}function ss(){_t=B.sprite(B.assets["images/infogame.png"]),E=B.group(_t);var e="60px puzzler";(z=[[B.text("First",e,"black",355,337),B.text("First",e,"black",621,337),B.text("First",e,"black",789,337),B.text("First",e,"black",1077,337),B.text("First",e,"black",1240,337),B.text("First",e,"black",1489,337),B.text("First",e,"black",1656,337)],[B.text("First",e,"black",355,564),B.text("First",e,"black",621,564),B.text("First",e,"black",789,564),B.text("First",e,"black",1077,564),B.text("First",e,"black",1240,564),B.text("First",e,"black",1489,564),B.text("First",e,"black",1656,564)],[B.text("First",e,"black",355,786),B.text("First",e,"black",621,786),B.text("First",e,"black",789,786),B.text("First",e,"black",1077,786),B.text("First",e,"black",1240,786),B.text("First",e,"black",1489,786),B.text("First",e,"black",1656,786)]]).forEach(e=>{e.forEach(e=>{e.pivotX=e.pivotY=.5})}),z[0][0].content="23.82",z[0][1].content="=";for(let t=0;t<3;t++)for(let e=0;e<7;e++)E.add(z[t][e]);E.visible=!1,E.x=(B.canvas.width-1888)/2,E.y=c.y+c.height*p+10,(Me=B.button([B.assets["images/home_512_up.png"],B.assets["images/home_512_over.png"],B.assets["images/home_512_up.png"]])).press=()=>Dt(),Me.x=B.canvas.width-1.1*Me.width*p,Me.y=10,Me.scaleX=p,Me.scaleY=p,(et=B.button([B.assets["images/infogame_512_up.png"],B.assets["images/infogame_512_over.png"],B.assets["images/infogame_512_up.png"]])).press=()=>{E.visible?(E.visible=!1,bt.forEach(e=>e.interactive=!0)):(E.visible=!0,us("infoBtn"),bt.forEach(e=>e.interactive=!1))},et.x=Me.x-1.1*et.width*p,et.y=10,et.scaleX=p,et.scaleY=p,et.visible=!1,et.interactive=!1,wt.push(et),(u=B.button([B.assets["images/pause_512_up.png"],B.assets["images/pause_512_over.png"],B.assets["images/pause_512_up.png"]])).press=()=>Gt(),E.visible&&(E.visible=!1,bt.forEach(e=>e.interactive=!0)),u.x=c.x,u.y=10,u.scaleX=p,u.scaleY=p,(v=B.button([B.assets["images/pause_on_512_up.png"],B.assets["images/pause_on_512_over.png"],B.assets["images/pause_on_512_up.png"]])).press=()=>Gt(),E.visible&&(E.visible=!1,bt.forEach(e=>e.interactive=!0)),v.x=c.x,v.y=10,v.scaleX=p,v.scaleY=p,v.visible=!1,v.interactive=!1,(_=B.button([B.assets["images/restart_512_up.png"],B.assets["images/restart_512_over.png"],B.assets["images/restart_512_up.png"]])).press=()=>{E.visible&&(E.visible=!1,bt.forEach(e=>e.interactive=!0)),Vt()},_.x=c.x+1.1*c.width*p,_.y=10,_.scaleX=p,_.scaleY=p,_.visible=!1,_.interactive=!1,wt.push(_),(je=B.button([B.assets["images/save_512_up.png"],B.assets["images/save_512_over.png"],B.assets["images/save_512_up.png"]])).press=()=>Ut(),je.x=_.x+1.1*je.width*p,je.y=10,je.scaleX=p,je.scaleY=p,je.visible=!1,je.interactive=!1,wt.push(je),(Ae=B.button([B.assets["images/b_about_up_128.png"],B.assets["images/b_about_over_128.png"],B.assets["images/b_about_up_128.png"]])).press=()=>ys(),Ae.x=_.x,Ae.y=B.canvas.height-Ae.height-10,Fe=B.sprite(B.assets["images/view_420x1080.png"]),(Ye=B.sprite(B.assets["images/view_420x1080.png"])).x=1500,(Le=B.sprite(B.assets["images/step_512_neutral.png"])).x=0,Le.y=0,Le.scaleX=p,Le.scaleY=p,(Be=B.text(" : "+(P.length-1),"60px puzzler","black")).x=Le.width*p+10,Be.y=Le.height*p/2-30,Be.pivotX=0,Be.pivotY=0,Be.scaleX=mt,Be.scaleY=mt,B.pushMessage(Be),(st=B.sprite(B.assets["images/time_512_neutral.png"])).x=0,st.y=0,st.scaleX=p,st.scaleY=p,(Ie=B.text(" : ","60px puzzler","black")).x=st.width*p+10,Ie.y=st.height*p/2-30,Ie.pivotX=0,Ie.pivotY=0,Ie.scaleX=mt,Ie.scaleY=mt,B.pushMessage(Ie),(at=B.sprite(B.assets["images/bananas_512_neutral.png"])).x=0,at.y=0,at.scaleX=p,at.scaleY=p,($e=B.text(" : "+F.bananasToEat,"60px puzzler","black")).x=at.width*p+10,$e.y=at.height*p/2-30,$e.pivotX=0,$e.pivotY=0,$e.scaleX=mt,$e.scaleY=mt,B.pushMessage($e),(rt=B.sprite(B.assets["images/yo_level_512.png"])).x=0,rt.y=0,rt.scaleX=p,rt.scaleY=p,(gt=B.text("","40px puzzler","black")).x=rt.width*p+10,gt.y=rt.height*p/2-40,gt.pivotX=0,gt.pivotY=0,gt.scaleX=mt,gt.scaleY=mt,(ct=B.text("","40px puzzler","black")).x=rt.width*p+10,ct.y=rt.height*p/2+10,ct.pivotX=0,ct.pivotY=0,ct.scaleX=mt,ct.scaleY=mt,is(),ts(),(tt=B.group(Le,Be)).x=0,tt.y=0,(nt=B.group(st,Ie)).x=0,nt.y=0,(ot=B.group(at,$e)).x=0,ot.y=tt.height*p*1.1+tt.y,ot.visible=!1,wt.push(ot),(lt=B.group(rt,gt,ct)).x=0,lt.y=nt.height*p*1.1+nt.y,lt.visible=!1,wt.push(lt),(kt=B.button([B.assets["images/pad_512_up_up.png"],B.assets["images/pad_512_up_over.png"],B.assets["images/pad_512_up_up.png"]],[])).press=()=>{It.press()},(St=B.button([B.assets["images/pad_512_down_up.png"],B.assets["images/pad_512_down_over.png"],B.assets["images/pad_512_down_up.png"]],[])).press=()=>{Wt.press()},(zt=B.button([B.assets["images/pad_512_right_up.png"],B.assets["images/pad_512_right_over.png"],B.assets["images/pad_512_right_up.png"]],[])).press=()=>{$t.press()},(Et=B.button([B.assets["images/pad_512_left_up.png"],B.assets["images/pad_512_left_over.png"],B.assets["images/pad_512_left_up.png"]],[])).press=()=>{Bt.press()},(L=B.group(kt,St,zt,Et)).x=10,L.y=B.canvas.height/2-L.height/4*ge,L.scaleX=L.scaleY=ge,(Ft=B.button([B.assets["images/pad_512_up_up.png"],B.assets["images/pad_512_up_over.png"],B.assets["images/pad_512_up_up.png"]],[])).press=()=>{It.press()},(Yt=B.button([B.assets["images/pad_512_down_up.png"],B.assets["images/pad_512_down_over.png"],B.assets["images/pad_512_down_up.png"]],[])).press=()=>{Wt.press()},(Pt=B.button([B.assets["images/pad_512_right_up.png"],B.assets["images/pad_512_right_over.png"],B.assets["images/pad_512_right_up.png"]],[])).press=()=>{$t.press()},(Xt=B.button([B.assets["images/pad_512_left_up.png"],B.assets["images/pad_512_left_over.png"],B.assets["images/pad_512_left_up.png"]],[])).press=()=>{Bt.press()},(C=B.group(Ft,Yt,Pt,Xt)).x=B.canvas.width-C.width*ge-10,C.y=B.canvas.height/2-C.height/4*ge,C.scaleX=ge,C.scaleY=ge,bt.push(kt,St,zt,Et,Ft,Yt,Pt,Xt),(Ce=B.group(tt,ot)).x=10,Ce.y=1.1*c.height*p,(it=B.group(nt,lt)).x=B.canvas.width-Fe.width+10,it.y=1.1*et.height*p,(dt=B.group(Fe,Ye,Ce,it,Me,et,_,u,v,je,L,C,E,Ae)).layer=5,ns()}function is(){Be.content=" "+(P.length-1),Ie.content=g.t<=0?" : .....":_s(g.t),$e.content=" "+g.b,gt.content=pt[X-1],ct.content="     "+T}function ns(){var e=yt*ge;kt.points=[{x:L.gx+.406*e,y:L.gy+.406*e},{x:L.gx+0*e,y:L.gy+0*e},{x:L.gx+e,y:L.gy+0*e},{x:L.gx+.6*e,y:L.gy+.406*e}],St.points=[{x:L.gx+.406*e,y:L.gy+.6*e},{x:L.gx+.6*e,y:L.gy+.6*e},{x:L.gx+e,y:L.gy+e},{x:L.gx+0*e,y:L.gy+e}],zt.points=[{x:L.gx+.6*e,y:L.gy+.406*e},{x:L.gx+e,y:L.gy+0*e},{x:L.gx+e,y:L.gy+e},{x:L.gx+.6*e,y:L.gy+.6*e}],Et.points=[{x:L.gx+.406*e,y:L.gy+.406*e},{x:L.gx+.406*e,y:L.gy+.6*e},{x:L.gx+0*e,y:L.gy+e},{x:L.gx+0*e,y:L.gy+0*e}],Ft.points=[{x:C.gx+.406*e,y:C.gy+.406*e},{x:C.gx+0*e,y:C.gy+0*e},{x:C.gx+e,y:C.gy+0*e},{x:C.gx+.6*e,y:C.gy+.406*e}],Yt.points=[{x:C.gx+.406*e,y:C.gy+.6*e},{x:C.gx+.6*e,y:C.gy+.6*e},{x:C.gx+e,y:C.gy+e},{x:C.gx+0*e,y:C.gy+e}],Pt.points=[{x:C.gx+.6*e,y:C.gy+.406*e},{x:C.gx+e,y:C.gy+0*e},{x:C.gx+e,y:C.gy+e},{x:C.gx+.6*e,y:C.gy+.6*e}],Xt.points=[{x:C.gx+.406*e,y:C.gy+.406*e},{x:C.gx+.406*e,y:C.gy+.6*e},{x:C.gx+0*e,y:C.gy+e},{x:C.gx+0*e,y:C.gy+0*e}]}function as(){}function os(e,t,s,i,n){B.canvas.style.background=`url(${e}) no-repeat`,B.canvas.style.backgroundPosition=t+`px ${s}px`,B.canvas.style.backgroundSize=i+`px ${n}px`}function rs(e){return(e/window.innerWidth*100).toFixed(2)}function gs(e){return(e/window.innerHeight*100).toFixed(2)}function ps(){var e=document.querySelector(":root");j.width=B.canvas.width*r.scaleCanvas,e.style.setProperty("--wait-width",j.width+"px"),e.style.setProperty("--wait-left",B.canvas.offsetLeft+"px"),e.style.setProperty("--wait-top",B.canvas.offsetTop+"px")}function cs(){var e=document.querySelector(":root"),t=(getComputedStyle(e),Math.floor(c.width*p*r.scaleCanvas)),s=Math.floor(c.width*p*r.scaleCanvas),i=(B.canvas.offsetTop,10*r.scaleCanvas);let n=10;var a=B.canvas.offsetTop+c.y*r.scaleY,o=B.canvas.offsetLeft+(c.width*p+10)*r.scaleX;Tt&&(n=5),e.style.setProperty("--btn-width",t+"px"),e.style.setProperty("--btn-height",s+"px"),e.style.setProperty("--menu-top",a+"px"),e.style.setProperty("--menu-left",o+"px"),e.style.setProperty("--menu-gap",i+"px"),e.style.setProperty("--border-iframe",n+"px")}function ls(){var e=B.canvas.offsetTop+c.height*p*r.scaleCanvas+10,t=.95*(window.innerHeight-e),s=.8*window.innerWidth,i=document.getElementById("infoframe").contentWindow.document.querySelector(":root"),i=(Tt&&(i.style.setProperty("--font-p","15px"),i.style.setProperty("--margin-p-v","5px"),i.style.setProperty("--margin-p-h","10px"),i.style.setProperty("--font-header","15px"),i.style.setProperty("--font-footer","15px"),i.style.setProperty("--font-buttons","12px"),i.style.setProperty("--btn-width","80px"),i.style.setProperty("--bnt-height","25px"),i.style.setProperty("--img-w","64px"),i.style.setProperty("--img-h","64px"),i.style.setProperty("--margin-flex","5%"),i.style.setProperty("--margin-line","5px")),.1*window.innerWidth);M.style.top=e+"px",M.style.width=s+"px",M.style.height=t+"px",M.style.margin=`0  ${i}px`}function ds(){t.src=B.assets["images/fullscreen_on_512_up.png"].src,t.style.width="64px",s.src=B.assets["images/sound_no_240_up.png"].src,s.style.width="64px",t.onpointerdown=e=>(document.fullscreenElement?(document.exitFullscreen(),t.src=B.assets["images/fullscreen_on_512_up.png"].src):(O.requestFullscreen().catch(e=>console.log(e)),t.src=B.assets["images/fullscreen_off_512_up.png"].src),e.preventDefault&&e.preventDefault(),e.returnValue&&(e.returnValue=!1),e.stopPropagation(),e.target.releasePointerCapture(e.pointerId),!1),t.addEventListener("mouseover",()=>{ve?t.src=B.assets["images/fullscreen_off_512_over.png"].src:t.src=B.assets["images/fullscreen_on_512_over.png"].src}),t.addEventListener("mouseleave",()=>{ve?t.src=B.assets["images/fullscreen_off_512_up.png"].src:t.src=B.assets["images/fullscreen_on_512_up.png"].src}),s.onpointerdown=e=>((ee=!ee)?s.src=B.assets["images/sound_yes_240_up.png"].src:s.src=B.assets["images/sound_no_240_up.png"].src,e.preventDefault&&e.preventDefault(),e.returnValue&&(e.returnValue=!1),e.stopPropagation(),e.target.releasePointerCapture(e.pointerId),!1),s.addEventListener("mouseover",()=>{ee?s.src=B.assets["images/sound_yes_240_over.png"].src:s.src=B.assets["images/sound_no_240_over.png"].src}),s.addEventListener("mouseleave",()=>{ee?s.src=B.assets["images/sound_yes_240_up.png"].src:s.src=B.assets["images/sound_no_240_up.png"].src})}function hs(){1e3<g.t&&(n.t=Object.values(g)[0],n.s=Object.values(g)[1],n.b=Object.values(g)[2])}function _s(e){var e=(e/1e3).toFixed(1),t=e.toString().substring(e.toString().indexOf(".")+1),e=Math.floor(e),s=Math.floor(e/60);let i="0",n=9<s?"":"0";return 9<e%60&&(i=""),s<=0?""+i+e%60+"."+t:""+n+s+`:${i}${e%60}.`+t}function us(e){let t={};function s(n,a){if(0===n){let e=void 0,t=void 0,s=void 0,i=void 0;a.first<=0?(z[n][0].content="?",z[n][0].x=400,z[n][1].content="?"):(e=+(a.first/1e3).toFixed(1),z[n][0].content=_s(a.first),z[n][0].x=415-15*_s(a.first).length),a.second<0?(z[n][2].content="?",z[n][2].x=849,z[n][3].content="?"):(t=+(a.second/1e3).toFixed(1),z[n][2].content=_s(a.second),z[n][2].x=864-15*_s(a.second).length),void 0!==e&&void 0!==t&&(e===t?z[n][1].content="=":e<t?z[n][1].content="<":z[n][1].content=">"),a.third<=0?(z[n][4].content="?",z[n][4].x=1285,z[n][3].content="?",z[n][5].content="?"):(s=+(a.third/1e3).toFixed(1),z[n][4].content=_s(a.third),z[n][4].x=1300-15*_s(a.third).length),void 0!==t&&void 0!==s&&(t===s?z[n][3].content="=":t<s?z[n][3].content="<":z[n][3].content=">"),a.fourth<=0?(z[n][6].content="?",z[n][6].x=1701):(i=+(a.fourth/1e3).toFixed(1),z[n][6].content=_s(a.fourth),z[n][6].x=1716-15*_s(a.fourth).length),void 0!==s&&void 0!==i&&(s===i?z[n][5].content="=":s<i?z[n][5].content="<":z[n][5].content=">")}else if(1===n){let e=void 0,t=void 0,s=void 0,i=void 0;a.first<=0?(z[n][0].content="?",z[n][0].x=400,z[n][1].content="?"):(e=a.first,z[n][0].content=a.first.toString(),z[n][0].x=415-15*a.first.toString().length),a.second<0?(z[n][2].content="?",z[n][2].x=849):(t=a.second,z[n][2].content=a.second.toString(),z[n][2].x=864-15*a.second.toString().length),void 0!==e&&void 0!==t&&(a.first===a.second?z[n][1].content="=":a.first<a.second?z[n][1].content="<":z[n][1].content=">"),a.third<=0?(z[n][4].content="?",z[n][4].x=1285,z[n][3].content="?",z[n][5].content="?"):(s=a.third,z[n][4].content=a.third.toString(),z[n][4].x=1300-15*a.third.toString().length),void 0!==t&&void 0!==s&&(a.second===a.third?z[n][3].content="=":a.second<a.third?z[n][3].content="<":z[n][3].content=">"),a.fourth<=0?(z[n][6].content="?",z[n][6].x=1701,z[n][5].content="?"):(i=a.fourth,z[n][6].content=a.fourth.toString(),z[n][6].x=1716-15*a.fourth.toString().length),void 0!==s&&void 0!==i&&(a.third===a.fourth?z[n][5].content="=":a.third<a.fourth?z[n][5].content="<":z[n][5].content=">")}else if(2===n){let e=void 0,t=void 0,s=void 0,i=void 0;a.first<0?(z[n][0].content="?",z[n][0].x=400,z[n][1].content="?"):(e=a.first,z[n][0].content=a.first.toString(),z[n][0].x=415-15*a.first.toString().length),a.second<0?(z[n][2].content="?",z[n][2].x=849):(t=a.second,z[n][2].content=a.second.toString(),z[n][2].x=864-15*a.second.toString().length),void 0!==e&&void 0!==t&&(a.first===a.second?z[n][1].content="=":a.first<a.second?z[n][1].content="<":z[n][1].content=">"),a.third<0?(z[n][4].content="?",z[n][4].x=1285,z[n][3].content="?",z[n][5].content="?"):(s=a.third,z[n][4].content=a.third.toString(),z[n][4].x=1300-15*a.third.toString().length),void 0!==t&&void 0!==s&&(a.second===a.third?z[n][3].content="=":a.second<a.third?z[n][3].content="<":z[n][3].content=">"),a.fourth<0?(z[n][6].content="?",z[n][6].x=1701,z[n][5].content="?"):(i=a.fourth,z[n][6].content=a.fourth.toString(),z[n][6].x=1716-15*a.fourth.toString().length),void 0!==s&&void 0!==i&&(a.third===a.fourth?z[n][5].content="=":a.third<a.fourth?z[n][5].content="<":z[n][5].content=">")}}!async function(){var e;navigator.storage&&navigator.storage.estimate&&((e=await navigator.storage.estimate()).usage,e.quota,e=e.quota-e.usage,r.quota=(e/1024/1024).toFixed(1))}();function i(){t.first=n.t,t.second=g.t,t.third=n.bt,t.fourth=pe[X-1][T-1].csec,s(0,t),t.first=n.s,t.second=g.s,t.third=n.bs,t.fourth=pe[X-1][T-1].s,s(1,t),t.first=n.b,t.second=g.b,t.third=n.bb,t.fourth=0,s(2,t)}"restart"===e||"infoBtn"===e?i():"end"===e&&(n.bt=Math.min(n.bt<=0?1/0:n.bt,g.t),n.bs=Math.min(n.bs<=0?1/0:n.bs,g.s),n.bb=Math.min(n.bb<=0?1/0:n.bb,g.b),i())}function I(e,t){return B.canvas.ctx.font=e,{width:B.canvas.ctx.measureText(t).width,height:B.canvas.ctx.measureText("M").width}}function vs(){D=[],x=B.sprite(B.assets["images/save_img.png"]),y=B.sprite(B.assets["images/save_img_in.png"]),b=B.text("temp","30px puzzler","black"),f=B.text("temp","30px puzzler","black"),w=B.text("temp","30px puzzler","black"),k=B.text("temp","30px puzzler","black"),Ge=B.text("temp","30px puzzler","black"),S=B.text("temp","30px puzzler","black"),Je=B.text("temp","30px puzzler","black"),Qe=B.text("temp","30px puzzler","black"),ms(),(Ze=B.button([B.assets["images/save_cancel_512_up.png"],B.assets["images/save_cancel_512_over.png"],B.assets["images/save_cancel_512_up.png"]])).x=.25*y.width-.5*Ze.width*p,Ze.y=y.height-1.2*Ze.height*p-32,Ze.scaleX=p,Ze.scaleY=p,(Ke=B.button([B.assets["images/save_ok_512_up.png"],B.assets["images/save_ok_512_over.png"],B.assets["images/save_ok_512_up.png"]])).x=.75*y.width-.5*Ke.width*p,Ke.y=y.height-1.2*Ke.height*p-32,Ke.scaleX=p,Ke.scaleY=p,Ke.press=()=>{if(G)(D=[]).push(g),D.push(P),localStorage.removeItem("data"+X+T),localStorage.setItem("data"+X+T,JSON.stringify(D));else{if(!(H=JSON.parse(localStorage.getItem("data"+X+T))))return Jt(X,T),void B.slide(m,m.x,B.canvas.height,30);var t=H[0],s=H[1];Jt(X,T),g={...t},P=[...s],B.setGameInfo(g),B.setStepArray(P),is();let e=1;if(1===P.length)return void B.slide(m,m.x,B.canvas.height,30);B.setReplayMode(!0),xt=setInterval(()=>{"u"===P[e].d?F.move("up",h,F,Y):"d"===P[e].d?F.move("down",h,F,Y):"r"===P[e].d?F.move("right",h,F,Y):"l"===P[e].d&&F.move("left",h,F,Y),++e===P.length&&(clearInterval(xt),B.setReplayMode(!1))},100)}B.slide(m,m.x,B.canvas.height,30)},Ze.press=()=>{B.slide(m,m.x,B.canvas.height,30)},(m=B.group(y,S,Je,Qe,Ke,Ze)).x=.5*B.canvas.width-.5*y.width,m.y=B.canvas.height,m.layer=50,(De=B.button([B.assets["images/save_cancel_512_up.png"],B.assets["images/save_cancel_512_over.png"],B.assets["images/save_cancel_512_up.png"]])).x=.5*x.width-.5*De.width*p,De.y=x.height-1.2*De.height*p-32,De.scaleX=p,De.scaleY=p,De.press=()=>{B.slide(qe,qe.x,-B.canvas.height,30)},(He=B.button([B.assets["images/save_512_in_up.png"],B.assets["images/save_512_in_over.png"],B.assets["images/save_512_in_up.png"]])).press=()=>{let e,t,s;U=!1,G=!0,B.slide(m,m.x,.5*B.canvas.height-.5*y.height,30),B.slide(qe,qe.x,-B.canvas.height,30),s=V?(e="Already saved",t="Want to save anyway !","The last saved game will be lost."):(e="Save !",t="First time saved.","Only one saved game at a time."),xs(e,t,s)},He.x=.25*x.width-.5*He.width*p,He.y=x.height-1.2*He.height*p-32,He.scaleX=p,He.scaleY=p,(Ve=B.button([B.assets["images/save_512_out_up.png"],B.assets["images/save_512_out_over.png"],B.assets["images/save_512_out_up.png"]])).x=.75*x.width-.5*Ve.width*p,Ve.y=x.height-1.2*Ve.height*p-32,Ve.scaleX=p,Ve.scaleY=p,Ve.press=()=>{let e,t,s;U=!0,G=!1,B.slide(m,m.x,.5*B.canvas.height-.5*y.height,30),B.slide(qe,qe.x,-B.canvas.height,30),s=V?(e="Load the game !",t="Present data will be lost.","Load anyway !"):(e="Can not open this game !",t="Not saved yet.","Only saved game can be opened."),xs(e,t,s)},(qe=B.group(x,b,f,w,k,Ge,He,De,Ve)).x=.5*B.canvas.width-.5*x.width,qe.y=-B.canvas.height}function ms(e,t,s,i,n){let a="40px puzzler",o="60px puzzler";Tt&&(a="40px puzzler",o="50px puzzler"),U=G=!1,(D=[]).push(g),D.push(P),n=(H=JSON.parse(localStorage.getItem("data"+X+T)))?(V=!0,q=!0,e="Open the game !",t=pt[X-1]+" Level:"+T,s="Time : "+_s(H[0].t),i="Steps : "+H[0].s,"Bananas : "+H[0].b):(V=!1,q=!1,e="Save the game !",t=pt[X-1]+" Level:"+T,s="Time : "+_s(g.t),i="Steps : "+g.s,"Bananas : "+g.b),b.font=o,b.content=e,b.width=I(o,e).width,b.height=I(o,e).height,b.x=.5*x.width-.5*b.width,b.y=32,f.font=o,f.content=t,f.width=I(o,t).width,f.height=I(o,t).height,f.x=.5*x.width-.5*f.width,f.y=b.y+b.height+10,w.content=s,w.font=a,w.width=I(a,s).width,w.height=I(a,s).height,w.x=.5*x.width-.5*w.width,w.y=f.y+f.height+20,k.content=i,k.font=a,k.width=I(a,i).width,k.height=I(a,i).height,k.x=.5*x.width-.5*k.width,k.y=w.y+w.height+10,Ge.content=n,Ge.font=a,Ge.width=I(a,n).width,Ge.height=I(a,n).height,Ge.x=.5*x.width-.5*Ge.width,Ge.y=k.y+k.height+10}function xs(e,t,s){let i="40px puzzler",n="60px puzzler";Tt&&(i="40px puzzler",n="50px puzzler"),S.font=n,S.content=e,S.width=I(n,e).width,S.height=I(n,e).height,S.x=.5*y.width-.5*S.width,S.y=32,Je.font=n,Je.content=t,Je.width=I(n,t).width,Je.height=I(n,t).height,Je.x=.5*y.width-.5*Je.width,Je.y=S.y+S.height+10,Qe.content=s,Qe.font=i,Qe.width=I(i,s).width,Qe.height=I(i,s).height,Qe.x=.5*y.width-.5*Qe.width,Qe.y=Je.y+Je.height+20}async function ys(e){var t={is_M:Tt,is_T:Ct,DPI:Lt,WA:window.screen.availWidth,HA:window.screen.availHeight,WW:window.innerWidth,WH:window.innerHeight,DW:document.body.width,DH:document.body.height,S_C:r.scaleCanvas.toFixed(2),S_X:r.scaleX.toFixed(2),S_Y:r.scaleY.toFixed(2),Q:r.quota},s={scene:X,level:T},i=[],t=(i.push(t,s,g,P),document.createElement("a")),s=new Blob([JSON.stringify(i)],{type:"text/plain"});t.setAttribute("href",URL.createObjectURL(s)),t.setAttribute("download","yo_gameConfig".toLowerCase()+".json"),t.click(),URL.revokeObjectURL(t.href)}B.start(),B.scaleToWindow(r),ps(),window.addEventListener("resize",e=>{B.scaleToWindow(r),ts(),cs(),ls(),ps()}),document.addEventListener("fullscreenchange",e=>{B.scaleToWindow(r),ts(),(ve=!ve)?t.src=B.assets["images/fullscreen_off_512_over.png"].src:t.src=B.assets["images/fullscreen_on_512_over.png"].src});