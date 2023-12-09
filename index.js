import{game as I}from"./library/engine.js";import*as W from"./library/level.js";import*as R from"./library/move.js";import"./typedef.js";let O=document.getElementById("main"),M=document.getElementById("infodiv"),A=document.getElementById("infoframe"),r={scaleCanvas:1,scaleX:1,scaleY:2,boxSize:90,boxViewQuantity:12,scaleFactor:()=>r.boxSize/512,quota:void 0},g={t:0,s:0,b:-1},n={t:0,bt:-1,s:0,bs:-1,b:-1,bb:-1},j=[],H=void 0,q=!1,D=!1,U=!1,V=!1,s=document.getElementById("btn-1"),e=document.getElementById("btn-2"),G=document.getElementsByClassName("floating-menu")[0],N,J,Q,K,Z=!1,ee=1920,se=1080,te=90,ie=90,ne=12,ae=12,oe=64,p=.2,re=.75,ge=[[{s:70,t:15.93,csec:15930},{s:106,t:80.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930}],[{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930}],[{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930},{s:65,t:18.02,csec:15930}]],pe=[[{s:65,t:1918.02},{s:76,t:80.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02}],[{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02}],[{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02},{s:65,t:18.02}]],ce,le,de,he,t,_e,i,c,a,ue,ve,o,me,xe,ye,l,d,be,fe,we,h,ke,Se,ze,Fe,Ee,Ye,Xe,Pe,Le,Te,Ce,Be,$e,Ie,We,Re,Oe,_,Me,u,v,Ae,je,He,qe,m,De,x,y,b,f,w,k,Ue,Ve,S,Ge,Ne,Je,Qe,Ke,Ze,es,ss,ts,is,ns,as,os,rs=["12x12","14x14","16x16"],gs,ps,cs,ls,ds,z,F,E={},Y=[],X=[],P=1,L=1,hs=W.level[P-1][L-1],_s=1,us=1,vs=setInterval(()=>B.progressBar.update(),5),ms=(document.addEventListener("myProper",e=>console.log("From my proper ",e.text)),512),xs=[],ys=[],bs=[],T,fs,ws,ks,Ss,C,zs,Fs,Es,Ys,Xs=/Mobile/i.test(navigator.userAgent),Ps=window.devicePixelRatio.toFixed(2),Ls=!1,B=(("ontouchstart"in window||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints||"ontouchstart"in document.documentElement||"touchstart"in document.documentElement)&&(Ls=!0),Xs&&(us=3.5<=Ps&&Ps<=4.2?_s=1.2:2.8<=Ps&&Ps<3.5?(_s=1.5,1.2):(_s=1.6,1.5)),new I(ee,se,Rs,["images/walk_512.json","images/info_box.png","images/info_level_box.png","images/view_420x1080.png","images/blocksBorder_12x12.png","images/blocksBorder_14x14.png","images/blocksBorder_16x16.png","images/b_info_up.png","images/b_info_over.png","images/b_scene_up.png","images/b_scene_over.png","images/b_scene_top_up.png","images/b_scene_top_over.png","images/b_play_up.png","images/b_play_over.png","images/infogame.png","images/yo_level_512.png","images/save_img.png","images/save_img_in.png","images/save_ok_512_up.png","images/save_ok_512_over.png","images/save_cancel_512_up.png","images/save_cancel_512_over.png","images/save_512_up.png","images/save_512_over.png","images/save_512_in_up.png","images/save_512_in_over.png","images/save_512_out_up.png","images/save_512_out_over.png","images/infogame_512_up.png","images/infogame_512_over.png","images/restart_512_up.png","images/restart_512_over.png","images/pause_512_up.png","images/pause_512_over.png","images/pause_on_512_up.png","images/pause_on_512_over.png","images/home_512_up.png","images/home_512_over.png","images/menu_512_up.png","images/menu_512_over.png","images/menu_open_512_up.png","images/menu_open_512_over.png","images/road_512.png","images/forest_512.png","images/forest.png","images/forest24.jpg","images/box_512.png","images/bananas_0_512.png","images/bananas_512_neutral.png","images/fond_ecran_950.jpg","images/emoji_yo.png","sounds/bounce.wav","sounds/music.wav","fonts/puzzler.otf","images/pad_512_up_up.png","images/pad_512_up_over.png","images/pad_512_down_up.png","images/pad_512_down_over.png","images/pad_512_right_up.png","images/pad_512_right_over.png","images/pad_512_left_up.png","images/pad_512_left_over.png","images/step_512_neutral.png","images/time_512_neutral.png","images/fullscreen_on_512_up.png","images/fullscreen_on_512_over.png","images/fullscreen_off_512_up.png","images/fullscreen_off_512_over.png","images/sound_yes_240_up.png","images/sound_yes_240_over.png","images/sound_no_240_up.png","images/sound_no_240_over.png","images/b_about_up_128.png","images/b_about_over_128.png"],Ws)),Ts=(O.appendChild(B.canvas),window.infoHide=e=>{M.classList.remove("show"),M.classList.add("hide")},window.about=e=>{A.src="./html_page/about.html"},window.general=e=>{A.src="./html_page/general.html"},window.buttonsExplained=e=>{A.src="./html_page/buttonsexplained.html"},window.spareButton=e=>{A.src="./html_page/sparebutton.html"},B.keyboard(37)),Cs=B.keyboard(38),Bs=B.keyboard(39),$s=B.keyboard(40),Is={leftArrow:Ts,upArrow:Cs,rightArrow:Bs,downArrow:$s};function Ws(){0===B.progressBar.counter&&(B.progressBar.setBackgroundColor("#FFA80F"),B.progressBar.setForegroundColor("#FFEC4B"),B.progressBar.create(B.canvas,B.assets,B.canvas.width/2,100)),B.progressBar.update()}function Rs(){B.progressBar.remove(),clearInterval(vs),pt(),ke=[B.assets["walkDownRight.png"],B.assets["images/road_512.png"],B.assets["images/forest_512.png"],B.assets["images/box_512.png"],B.assets["images/bananas_0_512.png"],B.assets["walkUpRight.png"],B.assets["walkUpLeft.png"],B.assets["walkUpRightPush.png"],B.assets["walkUpLeftPush.png"],B.assets["walkDownRight.png"],B.assets["walkDownLeft.png"],B.assets["walkDownRightPush.png"],B.assets["walkDownLeftPush.png"],B.assets["walkRightRight.png"],B.assets["walkRightLeft.png"],B.assets["walkRightRightPush.png"],B.assets["walkRightLeftPush.png"],B.assets["walkLeftRight.png"],B.assets["walkLeftLeft.png"],B.assets["walkLeftRightPush.png"],B.assets["walkLeftLeftPush.png"]],E.setVisible=()=>{Y.forEach(e=>{e===E.activeSprite?e.visible=!0:(e.visible=!1,e.gridX=-10,e.gridY=-10)})},E.layer=3,E.bananasToEat=0,E.move=R.moveScene,Js(),Qs(),et(),Ns(1,1),ht(),rt(),Bs.press=()=>{E.move("right",h,E,Y),X.push({x:this.yo.activeSprite.gridX,y:this.yo.activeSprite.gridY,d:"r"})},Cs.press=()=>{E.move("up",h,E,Y),X.push({x:this.yo.activeSprite.gridX,y:this.yo.activeSprite.gridY,d:"u"})},Ts.press=()=>{E.move("left",h,E,Y),X.push({x:this.yo.activeSprite.gridX,y:this.yo.activeSprite.gridY,d:"l"})},$s.press=()=>{E.move("down",h,E,Y),X.push({x:this.yo.activeSprite.gridX,y:this.yo.activeSprite.gridY,d:"d"})},ys=[Cs,$s,Bs,Ts,fs,ws,ks,Ss,zs,Fs,Es,Ys],B.setButtonsMove(ys,u)}function Os(){0===E.bananasToEat&&(B.pause(),B.endGame(),B.wait(1e3).then(()=>Ms()))}function Ms(){ce.volume=.3,dt("end")}function As(){Ie.visible=!0,We.visible=!0,Re.visible=!0,F.visible&&(F.visible=!1,xs.forEach(e=>e.interactive=!0)),Gs(P,L,"homePress"),Ks(P,L),B.slide(ls,-B.canvas.width,B.canvas.height,30,["decelerationCubed"]).onComplete=()=>{tt()},B.slide(he,0,0,30,["decelerationCubed"]),B.endGame()}function js(){0!==g.t&&B.isPlaying?(u.visible?(B.pause(),u.visible=!1,v.visible=!0):(B.resume(),u.visible=!0,v.visible=!1),Gs(P,L,"restart"),B.slide(ls,0,0,30,["decelerationCubed"]),B.state=Os):(u.visible=!0,v.visible=!1)}function Hs(){Gs(P,L,"restart"),B.slide(ls,0,0,30,["decelerationCubed"]),B.state=Os}function qs(){F.visible&&(F.visible=!1,xs.forEach(e=>e.interactive=!0)),c.visible?(c.visible=!1,a.visible=!0,B.fadeIn(a,30),B.fadeOut(c,30),G.classList.remove("hide"),G.classList.add("show")):(c.visible=!0,a.visible=!1,B.fadeIn(c,30),B.fadeOut(a,30),G.classList.remove("show"),G.classList.add("hide"))}function Ds(){F.visible&&(F.visible=!1),_t(),B.slide(qe,.5*B.canvas.width-380,.5*B.canvas.height-256,30)}function Us(){u.visible?(u.visible=!1,v.visible=!0,setTimeout(()=>{u.interactive=!1,B.isPlaying&&B.pause(),v.interactive=!0,bs.forEach((e,s)=>{s<=2?(e.visible=!0,e.interactive=!0):e.visible=!0})},200)):(u.visible=!0,v.visible=!1,setTimeout(()=>{u.interactive=!0,v.interactive=!1,bs.forEach((e,s)=>{s<=2?(e.visible=!1,e.interactive=!1):e.visible=!1})},200))}function Vs(){Gs(P,L,"home"),Ks(P,L),B.slide(ls,-B.canvas.width,B.canvas.height,30,["decelerationCubed"]),B.slide(he,0,0,30,["decelerationCubed"]),B.endGame(),Ms()}function Gs(e,s,t){if(e<1&&4<e)throw new Error(`This level : ${e} is not developped yet.`);if(1===e){if(s<1&&9<s)throw new Error(`This level : ${s} is not developped yet.`);ne=ae=12}else if(2===e){if(s<1&&9<s)throw new Error(`This levelToSet : ${s} is not developped yet.`);ne=ae=14}else{if(3!==e)throw new Error(`This scene : ${e} is not developped yet.`);if(s<1&&9<s)throw new Error(`This levelToSet : ${s} is not developped yet.`);ne=ae=16}if(hs=W.level[e-1][s-1],L=s,P=e,ct(),ze.remove(h),E.bananasToEat=0,h=B.gridSpecial(ne,ae,te,ie,hs,ke,E,Y,r.scaleFactor(),!1,0,0),E.activeSprite=Y[4],E.setVisible(),(X=[]).push({x:E.activeSprite.gridX,y:E.activeSprite.gridY,d:"s"}),B.setYo(E),B.setStepArray(X),dt("resetAll"),g.t=0,g.s=0,g.b=E.bananasToEat,B.setGameInfo(g),st(),1===P)Ye.visible=!0,Xe.visible=!1,Pe.visible=!1,h.addChild(Ye);else if(2===P)Ye.visible=!1,Xe.visible=!0,Pe.visible=!1,h.addChild(Xe);else{if(3!==P)throw new Error(`Scene playing : ${P} not possible.`);Ye.visible=!1,Xe.visible=!1,Pe.visible=!0,h.addChild(Pe)}ze.addChild(h),R.setScene(e,r),Ce.content=" "+(X.length-1),$e.content=" "+E.bananasToEat,G.classList.contains("show")&&c.press()}function Ns(e,s){if(e<1&&3<e)throw new Error(`This level : ${e} is not developped yet.`);if(1===e){if(s<1&&9<s)throw new Error(`This level : ${s} is not developped yet.`);ne=ae=12}else if(2===e){if(s<1&&9<s)throw new Error(`This levelToSet : ${s} is not developped yet.`);ne=ae=14}else{if(3!==e)throw new Error(`This scene : ${e} is not developped yet.`);if(s<1&&9<s)throw new Error(`This levelToSet : ${s} is not developped yet.`);ne=ae=16}if(hs=W.level[e-1][s-1],L=s,P=e,h=B.gridSpecial(ne,ae,te,ie,hs,ke,E,Y,r.scaleFactor(),!1,0,0),E.activeSprite=Y[4],E.setVisible(),X=[],B.setYo(E),B.setStepArray(X),g.b=E.bananasToEat,B.setGameInfo(g),(Se=B.sprite(B.assets["images/forest24.jpg"])).layer=-1,Se.pivotX=0,Se.pivotY=0,Ye=B.sprite(B.assets["images/blocksBorder_12x12.png"]),Xe=B.sprite(B.assets["images/blocksBorder_14x14.png"]),Pe=B.sprite(B.assets["images/blocksBorder_16x16.png"]),Ye.layer=Xe.layer=Pe.layer=4,1===P)Ye.visible=!0,Xe.visible=!1,Pe.visible=!1,h.addChild(Ye);else if(2===P)Ye.visible=!1,Xe.visible=!0,Pe.visible=!1,h.addChild(Xe);else{if(3!==P)throw new Error(`Scene playing : ${P} not possible.`);Ye.visible=!1,Xe.visible=!1,Pe.visible=!0,h.addChild(Pe)}(ze=B.group(Se,h)).x=420,ze.layer=2,(ls=B.group(ze,cs)).x=-B.canvas.width,ls.y=B.canvas.height,ls.layer=-1,tt(),R.setScene(e,r),qs()}function Js(){le=B.assets["sounds/bounce.wav"],(ce=B.assets["sounds/music.wav"]).loop=!0}function Qs(){(Ie=B.text("First","40px puzzler","deepskyblue")).y=B.canvas.height-135,(We=B.text("First","40px puzzler","deepskyblue")).y=B.canvas.height-90,(Re=B.text("First","40px puzzler","deepskyblue")).y=B.canvas.height-45;(t=B.sprite(B.assets["images/fond_ecran_950.jpg"])).x=(B.canvas.width-t.width)/2,t.y=(B.canvas.height-t.height)/2,P=P||1,L=L||1;(a=B.button([B.assets["images/menu_open_512_up.png"],B.assets["images/menu_open_512_over.png"],B.assets["images/menu_open_512_up.png"]])).x=10,a.y=10,a.pivotX=0,a.pivotY=0,a.scaleX=p,a.scaleY=p,a.layer=20,a.visible=!1,a.interactive=!1,(c=B.button([B.assets["images/menu_512_up.png"],B.assets["images/menu_512_over.png"],B.assets["images/menu_512_up.png"]])).x=10,c.y=10,c.pivotX=0,c.pivotY=0,c.scaleX=p,c.scaleY=p,c.layer=20,c.press=()=>qs(),l=B.sprite(B.assets["images/info_level_box.png"]),(d=B.text("12x12","50px puzzler","black",20,40)).content=rs[P-1],d.x=l.width/4,d.y=l.height/2-25,(be=B.button([B.assets["images/b_scene_top_up.png"],B.assets["images/b_scene_top_over.png"],B.assets["images/b_scene_top_up.png"]])).x=l.width/2-be.width/2,be.y=l.height/4-be.height/2,be.press=()=>{P<3&&(Gs(P+=1,L,"scenePress"),B.slide(d,d.x,d.y-40,10,["smoothstep"]),B.fadeOut(d,10),setTimeout(()=>{d.content=rs[P-1],d.y+=80,B.slide(d,d.x,l.height/2-25,15,["smoothstep"]),B.fadeIn(d,15)},100))},(fe=B.button([B.assets["images/b_scene_up.png"],B.assets["images/b_scene_over.png"],B.assets["images/b_scene_up.png"]])).x=l.width/2-fe.width/2,fe.y=3*l.height/4-be.height/2,fe.press=()=>{1<P&&(Gs(--P,L,"scenePress"),B.slide(d,d.x,d.y+40,10,["smoothstep"]),B.fadeOut(d,10),setTimeout(()=>{d.content=rs[P-1],d.y-=80,B.slide(d,d.x,l.height/2-25,15,["smoothstep"]),B.fadeIn(d,15)},200))},(we=B.group(l,d,be,fe)).x=-B.canvas.width,we.y=-B.canvas.height,ve=B.sprite(B.assets["images/info_level_box.png"]),(o=B.text("Level "+L,"50px puzzler","black",20,40)).x=l.width/4,o.y=l.height/2-25,(me=B.button([B.assets["images/b_scene_top_up.png"],B.assets["images/b_scene_top_over.png"],B.assets["images/b_scene_top_up.png"]])).press=()=>{L<9&&(L+=1,Gs(P,L,"levelPress"),B.slide(o,o.x,o.y-40,10,["smoothstep"]),B.fadeOut(o,10),setTimeout(()=>{o.content="Level "+L,o.y+=80,B.slide(o,o.x,ve.height/2-25,15,["smoothstep"]),B.fadeIn(o,15)},100))},me.x=ve.width/2-me.width/2,me.y=ve.height/4-me.height/2,(xe=B.button([B.assets["images/b_scene_up.png"],B.assets["images/b_scene_over.png"],B.assets["images/b_scene_up.png"]])).x=ve.width/2-xe.width/2,xe.y=3*ve.height/4-me.height/2,xe.press=()=>{1<L&&(--L,Gs(P,L,"levelPress"),B.slide(o,o.x,o.y+40,10,["smoothstep"]),B.fadeOut(o,10),setTimeout(()=>{o.content="Level "+L,o.y-=80,B.slide(o,o.x,ve.height/2-25,15,["smoothstep"]),B.fadeIn(o,15)},100))},o.y=ve.height/2-25,(ye=B.group(ve,o,me,xe)).x=B.canvas.width,ye.y=-B.canvas.height,(i=B.button([B.assets["images/b_info_up.png"],B.assets["images/b_info_over.png"],B.assets["images/b_info_up.png"]])).x=(B.canvas.width-t.width)/4-.5*i.width*_s/2,i.y=se-i.width,i.scaleX=.5*_s,i.scaleY=.5*_s,i.press=()=>{let e=B.rectangle(10,10,"#F7E9B8");e.pivotX=0,e.pivotY=0,e.x=i.x+i.width/2,e.y=i.y+i.height/2;var s=B.slide(e,e.x,100,30);B.tweenProperty(e,"scaleX",e.scaleX,180,30),B.tweenProperty(e,"scaleY",e.scaleY,80,30);s.onComplete=()=>{M.classList.remove("hide"),M.classList.add("show"),gt(),B.remove(e)}},(_e=B.button([B.assets["images/b_play_up.png"],B.assets["images/b_play_over.png"],B.assets["images/b_play_up.png"]])).x=ee,_e.y=se,_e.scaleX=_s,_e.scaleY=_s,_e.press=()=>{Ie.visible=!1,We.visible=!1,Re.visible=!1,B.slide(he,B.canvas.width,B.canvas.height,30,["decelerationCubed"]),B.slide(ls,0,0,30,["decelerationCubed"]).onComplete=()=>{tt()},P=P||1,L=L||1,d.content=rs[P-1],o.content="Level "+L,Gs(P,L,"playPress"),Ks(P,L),B.state=Os},B.slide(_e,B.canvas.width-(B.canvas.width-t.width)/4-_e.width/2,.75*B.canvas.height-_e.width/2,30,["decelerationCubed"]),B.slide(we,(B.canvas.width-t.width)/4-we.width/2,t.y+we.height/2,30,["decelerationCubed"]),B.slide(ye,B.canvas.width-(B.canvas.width-t.width)/4-ye.width/2,t.y+ye.height/2,30,["decelerationCubed"]),he=B.group(t,i,_e,ye,we,c,a)}function Ks(e,s){P=e,L=s,d.content=rs[P-1],o.content="Level "+L}function Zs(){Ie.layer=100,We.layer=100,Re.layer=100,Ie.content=`is_M=${Xs} & is_T=${Ls} | DPI=${Ps} `,We.content=`WA=${window.screen.availWidth},HA=`+window.screen.availHeight,We.content+=` | WW=${window.innerWidth},WH=`+window.innerHeight,We.content+=` | VW=${visualViewport.width},VH=`+visualViewport.height,Re.content=`S_C=${r.scaleCanvas.toFixed(2)} & S_X= ${r.scaleX.toFixed(2)} & S_Y= `+r.scaleY.toFixed(2)}function et(){ds=B.sprite(B.assets["images/infogame.png"]),F=B.group(ds);var e="60px puzzler";(z=[[B.text("First",e,"black",355,337),B.text("First",e,"black",621,337),B.text("First",e,"black",789,337),B.text("First",e,"black",1077,337),B.text("First",e,"black",1240,337),B.text("First",e,"black",1489,337),B.text("First",e,"black",1656,337)],[B.text("First",e,"black",355,564),B.text("First",e,"black",621,564),B.text("First",e,"black",789,564),B.text("First",e,"black",1077,564),B.text("First",e,"black",1240,564),B.text("First",e,"black",1489,564),B.text("First",e,"black",1656,564)],[B.text("First",e,"black",355,786),B.text("First",e,"black",621,786),B.text("First",e,"black",789,786),B.text("First",e,"black",1077,786),B.text("First",e,"black",1240,786),B.text("First",e,"black",1489,786),B.text("First",e,"black",1656,786)]]).forEach(e=>{e.forEach(e=>{e.pivotX=e.pivotY=.5})}),z[0][0].content="23.82",z[0][1].content="=";for(let s=0;s<3;s++)for(let e=0;e<7;e++)F.add(z[s][e]);F.visible=!1,F.x=(B.canvas.width-1888)/2,F.y=c.y+c.height*p+10,(Oe=B.button([B.assets["images/home_512_up.png"],B.assets["images/home_512_over.png"],B.assets["images/home_512_up.png"]])).press=()=>As(),Oe.x=B.canvas.width-1.1*Oe.width*p,Oe.y=10,Oe.scaleX=p,Oe.scaleY=p,(Ke=B.button([B.assets["images/infogame_512_up.png"],B.assets["images/infogame_512_over.png"],B.assets["images/infogame_512_up.png"]])).press=()=>{F.visible?(F.visible=!1,xs.forEach(e=>e.interactive=!0)):(F.visible=!0,dt("infoBtn"),xs.forEach(e=>e.interactive=!1))},Ke.x=Oe.x-1.1*Ke.width*p,Ke.y=10,Ke.scaleX=p,Ke.scaleY=p,Ke.visible=!1,Ke.interactive=!1,bs.push(Ke),(u=B.button([B.assets["images/pause_512_up.png"],B.assets["images/pause_512_over.png"],B.assets["images/pause_512_up.png"]])).press=()=>Us(),F.visible&&(F.visible=!1,xs.forEach(e=>e.interactive=!0)),u.x=c.x,u.y=10,u.scaleX=p,u.scaleY=p,(v=B.button([B.assets["images/pause_on_512_up.png"],B.assets["images/pause_on_512_over.png"],B.assets["images/pause_on_512_up.png"]])).press=()=>Us(),F.visible&&(F.visible=!1,xs.forEach(e=>e.interactive=!0)),v.x=c.x,v.y=10,v.scaleX=p,v.scaleY=p,v.visible=!1,v.interactive=!1,(_=B.button([B.assets["images/restart_512_up.png"],B.assets["images/restart_512_over.png"],B.assets["images/restart_512_up.png"]])).press=()=>{F.visible&&(F.visible=!1,xs.forEach(e=>e.interactive=!0)),Hs()},_.x=c.x+1.1*c.width*p,_.y=10,_.scaleX=p,_.scaleY=p,_.visible=!1,_.interactive=!1,bs.push(_),(Ae=B.button([B.assets["images/save_512_up.png"],B.assets["images/save_512_over.png"],B.assets["images/save_512_up.png"]])).press=()=>Ds(),Ae.x=_.x+1.1*Ae.width*p,Ae.y=10,Ae.scaleX=p,Ae.scaleY=p,Ae.visible=!1,Ae.interactive=!1,bs.push(Ae),(Me=B.button([B.assets["images/b_about_up_128.png"],B.assets["images/b_about_over_128.png"],B.assets["images/b_about_up_128.png"]])).press=()=>vt(),Me.x=_.x,Me.y=B.canvas.height-Me.height-10,Fe=B.sprite(B.assets["images/view_420x1080.png"]),(Ee=B.sprite(B.assets["images/view_420x1080.png"])).x=1500,(Le=B.sprite(B.assets["images/step_512_neutral.png"])).x=0,Le.y=0,Le.scaleX=p,Le.scaleY=p,(Ce=B.text(" : "+(X.length-1),"60px puzzler","black")).x=Le.width*p+10,Ce.y=Le.height*p/2-30,Ce.pivotX=0,Ce.pivotY=0,Ce.scaleX=us,Ce.scaleY=us,B.pushMessage(Ce),(es=B.sprite(B.assets["images/time_512_neutral.png"])).x=0,es.y=0,es.scaleX=p,es.scaleY=p,(Be=B.text(" : ","60px puzzler","black")).x=es.width*p+10,Be.y=es.height*p/2-30,Be.pivotX=0,Be.pivotY=0,Be.scaleX=us,Be.scaleY=us,B.pushMessage(Be),(is=B.sprite(B.assets["images/bananas_512_neutral.png"])).x=0,is.y=0,is.scaleX=p,is.scaleY=p,($e=B.text(" : "+E.bananasToEat,"60px puzzler","black")).x=is.width*p+10,$e.y=is.height*p/2-30,$e.pivotX=0,$e.pivotY=0,$e.scaleX=us,$e.scaleY=us,B.pushMessage($e),(as=B.sprite(B.assets["images/yo_level_512.png"])).x=0,as.y=0,as.scaleX=p,as.scaleY=p,(os=B.text("","40px puzzler","black")).x=as.width*p+10,os.y=as.height*p/2-40,os.pivotX=0,os.pivotY=0,os.scaleX=us,os.scaleY=us,(gs=B.text("","40px puzzler","black")).x=as.width*p+10,gs.y=as.height*p/2+10,gs.pivotX=0,gs.pivotY=0,gs.scaleX=us,gs.scaleY=us,st(),Zs(),(Ze=B.group(Le,Ce)).x=0,Ze.y=0,(ts=B.group(es,Be)).x=0,ts.y=0,(ns=B.group(is,$e)).x=0,ns.y=Ze.height*p*1.1+Ze.y,ns.visible=!1,bs.push(ns),(ps=B.group(as,os,gs)).x=0,ps.y=ts.height*p*1.1+ts.y,ps.visible=!1,bs.push(ps),(fs=B.button([B.assets["images/pad_512_up_up.png"],B.assets["images/pad_512_up_over.png"],B.assets["images/pad_512_up_up.png"]],[])).press=()=>{Cs.press()},(ws=B.button([B.assets["images/pad_512_down_up.png"],B.assets["images/pad_512_down_over.png"],B.assets["images/pad_512_down_up.png"]],[])).press=()=>{$s.press()},(ks=B.button([B.assets["images/pad_512_right_up.png"],B.assets["images/pad_512_right_over.png"],B.assets["images/pad_512_right_up.png"]],[])).press=()=>{Bs.press()},(Ss=B.button([B.assets["images/pad_512_left_up.png"],B.assets["images/pad_512_left_over.png"],B.assets["images/pad_512_left_up.png"]],[])).press=()=>{Ts.press()},(T=B.group(fs,ws,ks,Ss)).x=10,T.y=B.canvas.height/2-T.height/4*re,T.scaleX=T.scaleY=re,(zs=B.button([B.assets["images/pad_512_up_up.png"],B.assets["images/pad_512_up_over.png"],B.assets["images/pad_512_up_up.png"]],[])).press=()=>{Cs.press()},(Fs=B.button([B.assets["images/pad_512_down_up.png"],B.assets["images/pad_512_down_over.png"],B.assets["images/pad_512_down_up.png"]],[])).press=()=>{$s.press()},(Es=B.button([B.assets["images/pad_512_right_up.png"],B.assets["images/pad_512_right_over.png"],B.assets["images/pad_512_right_up.png"]],[])).press=()=>{Bs.press()},(Ys=B.button([B.assets["images/pad_512_left_up.png"],B.assets["images/pad_512_left_over.png"],B.assets["images/pad_512_left_up.png"]],[])).press=()=>{Ts.press()},(C=B.group(zs,Fs,Es,Ys)).x=B.canvas.width-C.width*re-10,C.y=B.canvas.height/2-C.height/4*re,C.scaleX=re,C.scaleY=re,xs.push(fs,ws,ks,Ss,zs,Fs,Es,Ys),(Te=B.group(Ze,ns)).x=10,Te.y=1.1*c.height*p,(ss=B.group(ts,ps)).x=B.canvas.width-Fe.width+10,ss.y=1.1*Ke.height*p,(cs=B.group(Fe,Ee,Te,ss,Oe,Ke,_,u,v,Ae,T,C,F,Me)).layer=5,tt()}function st(){Ce.content=" "+(X.length-1),Be.content=g.t<=0?" : .....":lt(g.t),$e.content=" "+g.b,os.content=rs[P-1],gs.content="     "+L}function tt(){var e=ms*re;fs.points=[{x:T.gx+.406*e,y:T.gy+.406*e},{x:T.gx+0*e,y:T.gy+0*e},{x:T.gx+e,y:T.gy+0*e},{x:T.gx+.6*e,y:T.gy+.406*e}],ws.points=[{x:T.gx+.406*e,y:T.gy+.6*e},{x:T.gx+.6*e,y:T.gy+.6*e},{x:T.gx+e,y:T.gy+e},{x:T.gx+0*e,y:T.gy+e}],ks.points=[{x:T.gx+.6*e,y:T.gy+.406*e},{x:T.gx+e,y:T.gy+0*e},{x:T.gx+e,y:T.gy+e},{x:T.gx+.6*e,y:T.gy+.6*e}],Ss.points=[{x:T.gx+.406*e,y:T.gy+.406*e},{x:T.gx+.406*e,y:T.gy+.6*e},{x:T.gx+0*e,y:T.gy+e},{x:T.gx+0*e,y:T.gy+0*e}],zs.points=[{x:C.gx+.406*e,y:C.gy+.406*e},{x:C.gx+0*e,y:C.gy+0*e},{x:C.gx+e,y:C.gy+0*e},{x:C.gx+.6*e,y:C.gy+.406*e}],Fs.points=[{x:C.gx+.406*e,y:C.gy+.6*e},{x:C.gx+.6*e,y:C.gy+.6*e},{x:C.gx+e,y:C.gy+e},{x:C.gx+0*e,y:C.gy+e}],Es.points=[{x:C.gx+.6*e,y:C.gy+.406*e},{x:C.gx+e,y:C.gy+0*e},{x:C.gx+e,y:C.gy+e},{x:C.gx+.6*e,y:C.gy+.6*e}],Ys.points=[{x:C.gx+.406*e,y:C.gy+.406*e},{x:C.gx+.406*e,y:C.gy+.6*e},{x:C.gx+0*e,y:C.gy+e},{x:C.gx+0*e,y:C.gy+0*e}]}function it(){}function nt(e,s,t,i,n){B.canvas.style.background=`url(${e}) no-repeat`,B.canvas.style.backgroundPosition=s+`px ${t}px`,B.canvas.style.backgroundSize=i+`px ${n}px`}function at(e){return(e/window.innerWidth*100).toFixed(2)}function ot(e){return(e/window.innerHeight*100).toFixed(2)}function rt(){var e=document.querySelector(":root"),s=(getComputedStyle(e),Math.floor(c.width*p*r.scaleCanvas)),t=Math.floor(c.width*p*r.scaleCanvas);B.canvas.offsetTop;let i=10,n=10,a=B.canvas.offsetTop+c.y,o=B.canvas.offsetLeft+c.width*p*r.scaleX+10;Xs&&(i=5,n=5,a=5,o-=10),e.style.setProperty("--btn-width",s+"px"),e.style.setProperty("--btn-height",t+"px"),e.style.setProperty("--menu-top",a+"px"),e.style.setProperty("--menu-left",o+"px"),e.style.setProperty("--menu-gap",i+"px"),e.style.setProperty("--border-iframe",n+"px")}function gt(){var e=B.canvas.offsetTop+c.height*p*r.scaleCanvas+10,s=.95*(window.innerHeight-e),t=.8*window.innerWidth,i=document.getElementById("infoframe").contentWindow.document.querySelector(":root"),i=(Xs&&(i.style.setProperty("--font-p","15px"),i.style.setProperty("--margin-p-v","5px"),i.style.setProperty("--margin-p-h","10px"),i.style.setProperty("--font-header","15px"),i.style.setProperty("--font-footer","15px"),i.style.setProperty("--font-buttons","12px"),i.style.setProperty("--btn-width","80px"),i.style.setProperty("--bnt-height","25px"),i.style.setProperty("--img-w","64px"),i.style.setProperty("--img-h","64px"),i.style.setProperty("--margin-flex","5%"),i.style.setProperty("--margin-line","5px")),.1*window.innerWidth);M.style.top=e+"px",M.style.width=t+"px",M.style.height=s+"px",M.style.margin=`0  ${i}px`}function pt(){s.src=B.assets["images/fullscreen_on_512_up.png"].src,s.style.width="64px",e.src=B.assets["images/sound_no_240_up.png"].src,e.style.width="64px",s.onclick=()=>{document.fullscreenElement?(document.exitFullscreen(),s.src=B.assets["images/fullscreen_on_512_up.png"].src):(O.requestFullscreen().catch(e=>console.log(e)),s.src=B.assets["images/fullscreen_off_512_up.png"].src)},s.ontouchstart=()=>{document.fullscreenElement?(document.exitFullscreen(),s.src=B.assets["images/fullscreen_on_512_up.png"].src):(O.requestFullscreen().catch(e=>console.log(e)),s.src=B.assets["images/fullscreen_off_512_up.png"].src)},s.addEventListener("mouseover",()=>{ue?s.src=B.assets["images/fullscreen_off_512_over.png"].src:s.src=B.assets["images/fullscreen_on_512_over.png"].src}),s.addEventListener("mouseleave",()=>{ue?s.src=B.assets["images/fullscreen_off_512_up.png"].src:s.src=B.assets["images/fullscreen_on_512_up.png"].src}),e.onclick=()=>{(Z=!Z)?e.src=B.assets["images/sound_yes_240_up.png"].src:e.src=B.assets["images/sound_no_240_up.png"].src},e.ontouchstart=()=>{(Z=!Z)?e.src=B.assets["images/sound_yes_240_up.png"].src:e.src=B.assets["images/sound_no_240_up.png"].src},e.addEventListener("mouseover",()=>{Z?e.src=B.assets["images/sound_yes_240_over.png"].src:e.src=B.assets["images/sound_no_240_over.png"].src}),e.addEventListener("mouseleave",()=>{Z?e.src=B.assets["images/sound_yes_240_up.png"].src:e.src=B.assets["images/sound_no_240_up.png"].src})}function ct(){1e3<g.t&&(n.t=Object.values(g)[0],n.s=Object.values(g)[1],n.b=Object.values(g)[2])}function lt(e){var e=(e/1e3).toFixed(1),s=e.toString().substring(e.toString().indexOf(".")+1),e=Math.floor(e),t=Math.floor(e/60);let i="0",n=9<t?"":"0";return 9<e%60&&(i=""),t<=0?""+i+e%60+"."+s:""+n+t+`:${i}${e%60}.`+s}function dt(e){let s={};function t(n,a){if(0===n){let e=void 0,s=void 0,t=void 0,i=void 0;a.first<=0?(z[n][0].content="?",z[n][0].x=400,z[n][1].content="?"):(e=+(a.first/1e3).toFixed(1),z[n][0].content=lt(a.first),z[n][0].x=415-15*lt(a.first).length),a.second<0?(z[n][2].content="?",z[n][2].x=849,z[n][3].content="?"):(s=+(a.second/1e3).toFixed(1),z[n][2].content=lt(a.second),z[n][2].x=864-15*lt(a.second).length),void 0!==e&&void 0!==s&&(e===s?z[n][1].content="=":e<s?z[n][1].content="<":z[n][1].content=">"),a.third<=0?(z[n][4].content="?",z[n][4].x=1285,z[n][3].content="?",z[n][5].content="?"):(t=+(a.third/1e3).toFixed(1),z[n][4].content=lt(a.third),z[n][4].x=1300-15*lt(a.third).length),void 0!==s&&void 0!==t&&(s===t?z[n][3].content="=":s<t?z[n][3].content="<":z[n][3].content=">"),a.fourth<=0?(z[n][6].content="?",z[n][6].x=1701):(i=+(a.fourth/1e3).toFixed(1),z[n][6].content=lt(a.fourth),z[n][6].x=1716-15*lt(a.fourth).length),void 0!==t&&void 0!==i&&(t===i?z[n][5].content="=":t<i?z[n][5].content="<":z[n][5].content=">")}else if(1===n){let e=void 0,s=void 0,t=void 0,i=void 0;a.first<=0?(z[n][0].content="?",z[n][0].x=400,z[n][1].content="?"):(e=a.first,z[n][0].content=a.first.toString(),z[n][0].x=415-15*a.first.toString().length),a.second<0?(z[n][2].content="?",z[n][2].x=849):(s=a.second,z[n][2].content=a.second.toString(),z[n][2].x=864-15*a.second.toString().length),void 0!==e&&void 0!==s&&(a.first===a.second?z[n][1].content="=":a.first<a.second?z[n][1].content="<":z[n][1].content=">"),a.third<=0?(z[n][4].content="?",z[n][4].x=1285,z[n][3].content="?",z[n][5].content="?"):(t=a.third,z[n][4].content=a.third.toString(),z[n][4].x=1300-15*a.third.toString().length),void 0!==s&&void 0!==t&&(a.second===a.third?z[n][3].content="=":a.second<a.third?z[n][3].content="<":z[n][3].content=">"),a.fourth<=0?(z[n][6].content="?",z[n][6].x=1701,z[n][5].content="?"):(i=a.fourth,z[n][6].content=a.fourth.toString(),z[n][6].x=1716-15*a.fourth.toString().length),void 0!==t&&void 0!==i&&(a.third===a.fourth?z[n][5].content="=":a.third<a.fourth?z[n][5].content="<":z[n][5].content=">")}else if(2===n){let e=void 0,s=void 0,t=void 0,i=void 0;a.first<0?(z[n][0].content="?",z[n][0].x=400,z[n][1].content="?"):(e=a.first,z[n][0].content=a.first.toString(),z[n][0].x=415-15*a.first.toString().length),a.second<0?(z[n][2].content="?",z[n][2].x=849):(s=a.second,z[n][2].content=a.second.toString(),z[n][2].x=864-15*a.second.toString().length),void 0!==e&&void 0!==s&&(a.first===a.second?z[n][1].content="=":a.first<a.second?z[n][1].content="<":z[n][1].content=">"),a.third<0?(z[n][4].content="?",z[n][4].x=1285,z[n][3].content="?",z[n][5].content="?"):(t=a.third,z[n][4].content=a.third.toString(),z[n][4].x=1300-15*a.third.toString().length),void 0!==s&&void 0!==t&&(a.second===a.third?z[n][3].content="=":a.second<a.third?z[n][3].content="<":z[n][3].content=">"),a.fourth<0?(z[n][6].content="?",z[n][6].x=1701,z[n][5].content="?"):(i=a.fourth,z[n][6].content=a.fourth.toString(),z[n][6].x=1716-15*a.fourth.toString().length),void 0!==t&&void 0!==i&&(a.third===a.fourth?z[n][5].content="=":a.third<a.fourth?z[n][5].content="<":z[n][5].content=">")}}!async function(){var e;navigator.storage&&navigator.storage.estimate&&((e=await navigator.storage.estimate()).usage,e.quota,e=e.quota-e.usage,r.quota=(e/1024/1024).toFixed(1))}();function i(){s.first=n.t,s.second=g.t,s.third=n.bt,s.fourth=ge[P-1][L-1].csec,t(0,s),s.first=n.s,s.second=g.s,s.third=n.bs,s.fourth=ge[P-1][L-1].s,t(1,s),s.first=n.b,s.second=g.b,s.third=n.bb,s.fourth=0,t(2,s)}"restart"===e||"infoBtn"===e?i():"end"===e&&(n.bt=Math.min(n.bt<=0?1/0:n.bt,g.t),n.bs=Math.min(n.bs<=0?1/0:n.bs,g.s),n.bb=Math.min(n.bb<=0?1/0:n.bb,g.b),i())}function $(e,s){return B.canvas.ctx.font=e,{width:B.canvas.ctx.measureText(s).width,height:B.canvas.ctx.measureText("M").width}}function ht(){j=[],x=B.sprite(B.assets["images/save_img.png"]),y=B.sprite(B.assets["images/save_img_in.png"]),b=B.text("temp","30px puzzler","black"),f=B.text("temp","30px puzzler","black"),w=B.text("temp","30px puzzler","black"),k=B.text("temp","30px puzzler","black"),Ue=B.text("temp","30px puzzler","black"),S=B.text("temp","30px puzzler","black"),Ge=B.text("temp","30px puzzler","black"),Ne=B.text("temp","30px puzzler","black"),_t(),(Qe=B.button([B.assets["images/save_cancel_512_up.png"],B.assets["images/save_cancel_512_over.png"],B.assets["images/save_cancel_512_up.png"]])).x=.25*y.width-.5*Qe.width*p,Qe.y=y.height-1.2*Qe.height*p-32,Qe.scaleX=p,Qe.scaleY=p,(Je=B.button([B.assets["images/save_ok_512_up.png"],B.assets["images/save_ok_512_over.png"],B.assets["images/save_ok_512_up.png"]])).x=.75*y.width-.5*Je.width*p,Je.y=y.height-1.2*Je.height*p-32,Je.scaleX=p,Je.scaleY=p,Je.press=()=>{if(V)(j=[]).push(g),j.push(X),localStorage.removeItem("data"+P+L),localStorage.setItem("data"+P+L,JSON.stringify(j));else{if(!(H=JSON.parse(localStorage.getItem("data"+P+L))))return Gs(P,L),void B.slide(m,m.x,B.canvas.height,30);var s=H[0],t=H[1];Gs(P,L),g={...s},X=[...t],B.setGameInfo(g),B.setStepArray(X),st();let e=1;if(1===X.length)return void B.slide(m,m.x,B.canvas.height,30);B.setReplayMode(!0),vs=setInterval(()=>{"u"===X[e].d?E.move("up",h,E,Y):"d"===X[e].d?E.move("down",h,E,Y):"r"===X[e].d?E.move("right",h,E,Y):"l"===X[e].d&&E.move("left",h,E,Y),++e===X.length&&(clearInterval(vs),B.setReplayMode(!1))},100)}B.slide(m,m.x,B.canvas.height,30)},Qe.press=()=>{B.slide(m,m.x,B.canvas.height,30)},(m=B.group(y,S,Ge,Ne,Je,Qe)).x=.5*B.canvas.width-.5*y.width,m.y=B.canvas.height,m.layer=50,(je=B.button([B.assets["images/save_512_in_up.png"],B.assets["images/save_512_in_over.png"],B.assets["images/save_512_in_up.png"]])).press=()=>{let e,s,t;U=!1,V=!0,B.slide(m,m.x,.5*B.canvas.height-.5*y.height,30),B.slide(qe,qe.x,-B.canvas.height,30),t=q?(e="Already saved",s="Want to save anyway !","The last saved game will be lost."):(e="Save !",s="First time saved.","Only one saved game at a time."),ut(e,s,t)},je.x=.25*x.width-.5*je.width*p,je.y=x.height-1.2*je.height*p-32,je.scaleX=p,je.scaleY=p,(He=B.button([B.assets["images/save_512_out_up.png"],B.assets["images/save_512_out_over.png"],B.assets["images/save_512_out_up.png"]])).x=.75*x.width-.5*He.width*p,He.y=x.height-1.2*He.height*p-32,He.scaleX=p,He.scaleY=p,He.press=()=>{let e,s,t;U=!0,V=!1,B.slide(m,m.x,.5*B.canvas.height-.5*y.height,30),B.slide(qe,qe.x,-B.canvas.height,30),t=q?(e="Load the game !",s="Present data will be lost.","Load anyway !"):(e="Can not open this game !",s="Not saved yet.","Only saved game can be opened."),ut(e,s,t)},(qe=B.group(x,b,f,w,k,Ue,je,He)).x=.5*B.canvas.width-.5*x.width,qe.y=-B.canvas.height}function _t(e,s,t,i,n){let a="40px puzzler",o="60px puzzler";Xs&&(a="40px puzzler",o="50px puzzler"),U=V=!1,(j=[]).push(g),j.push(X),n=(H=JSON.parse(localStorage.getItem("data"+P+L)))?(q=!0,D=!0,e="Open the game !",s=rs[P-1]+" Level:"+L,t="Time : "+lt(H[0].t),i="Steps : "+H[0].s,"Bananas : "+H[0].b):(q=!1,D=!1,e="Save the game !",s=rs[P-1]+" Level:"+L,t="Time : "+lt(g.t),i="Steps : "+g.s,"Bananas : "+g.b),b.font=o,b.content=e,b.width=$(o,e).width,b.height=$(o,e).height,b.x=.5*x.width-.5*b.width,b.y=32,f.font=o,f.content=s,f.width=$(o,s).width,f.height=$(o,s).height,f.x=.5*x.width-.5*f.width,f.y=b.y+b.height+10,w.content=t,w.font=a,w.width=$(a,t).width,w.height=$(a,t).height,w.x=.5*x.width-.5*w.width,w.y=f.y+f.height+20,k.content=i,k.font=a,k.width=$(a,i).width,k.height=$(a,i).height,k.x=.5*x.width-.5*k.width,k.y=w.y+w.height+10,Ue.content=n,Ue.font=a,Ue.width=$(a,n).width,Ue.height=$(a,n).height,Ue.x=.5*x.width-.5*Ue.width,Ue.y=k.y+k.height+10}function ut(e,s,t){let i="40px puzzler",n="60px puzzler";Xs&&(i="40px puzzler",n="50px puzzler"),S.font=n,S.content=e,S.width=$(n,e).width,S.height=$(n,e).height,S.x=.5*y.width-.5*S.width,S.y=32,Ge.font=n,Ge.content=s,Ge.width=$(n,s).width,Ge.height=$(n,s).height,Ge.x=.5*y.width-.5*Ge.width,Ge.y=S.y+S.height+10,Ne.content=t,Ne.font=i,Ne.width=$(i,t).width,Ne.height=$(i,t).height,Ne.x=.5*y.width-.5*Ne.width,Ne.y=Ge.y+Ge.height+20}async function vt(e){var s={is_M:Xs,is_T:Ls,DPI:Ps,WA:window.screen.availWidth,HA:window.screen.availHeight,WW:window.innerWidth,WH:window.innerHeight,DW:document.body.width,DH:document.body.height,S_C:r.scaleCanvas.toFixed(2),S_X:r.scaleX.toFixed(2),S_Y:r.scaleY.toFixed(2),Q:r.quota},t={scene:P,level:L},i=[],s=(i.push(s,t,g,X),document.createElement("a")),t=new Blob([JSON.stringify(i)],{type:"text/plain"});s.setAttribute("href",URL.createObjectURL(t)),s.setAttribute("download","yo_gameConfig".toLowerCase()+".json"),s.click(),URL.revokeObjectURL(s.href)}B.start(),B.scaleToWindow(r),window.addEventListener("resize",e=>{B.scaleToWindow(r),Zs(),rt(),gt()}),document.addEventListener("fullscreenchange",e=>{B.scaleToWindow(r),Zs(),(ue=!ue)?s.src=B.assets["images/fullscreen_off_512_over.png"].src:s.src=B.assets["images/fullscreen_on_512_over.png"].src});