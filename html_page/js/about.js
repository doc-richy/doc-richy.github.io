
let btn_1 = document.getElementById("btn-1");
let btn_2 = document.getElementById("btn-2");
let btn_3 = document.getElementById("btn-3");
/* let btn_4 = document.getElementById("btn-4");
let btn_5 = document.getElementById("btn-5") */;
let mainTag = document.getElementById("main");
let para = document.getElementById("para");

let rootvar = document.querySelector(":root");

let 
  isMobile = (/Mobile/i.test(navigator.userAgent)),
  isTouch = false;

if (('ontouchstart' in window) ||
  (navigator.maxTouchPoints > 0) ||
  (navigator.msMaxTouchPoints > 0) ||
  ("ontouchstart" in document.documentElement) ||
  ("touchstart" in document.documentElement)) {
   // browser with either Touch Events of Pointer Events running on touch-capable device
  isTouch = true;
}

//rootvar.style.setProperty("--win-innerheight", `${window.innerHeight}`);

if (isMobile) {
  rootvar.style.setProperty("--font-p", `15px`);
  rootvar.style.setProperty("--margin-p-v", `5px`);
  rootvar.style.setProperty("--margin-p-h", `10px`);
  rootvar.style.setProperty("--font-header", `10px`);
  rootvar.style.setProperty("--font-footer", `10px`);
  rootvar.style.setProperty("--font-buttons", `12px`);
  rootvar.style.setProperty("--btn-width", `80px`);
  rootvar.style.setProperty("--bnt-height", `25px`);
  rootvar.style.setProperty("--img-w", `64px`);
  rootvar.style.setProperty("--img-h", `64px`);
  rootvar.style.setProperty("--margin-flex", `5%`);
  rootvar.style.setProperty("--margin-line", `2px`);
}

btn_1.onclick = () => {
  //console.log("button click")
  if (parent.infoHide)  parent.infoHide(this);
  else window.top.postMessage("message", "*");
}

btn_2.onclick = () => {
  if (parent.about)  parent.about(this);
  else window.top.postMessage("message", "*");
}

btn_3.onclick = () => {
  if (parent.general)  parent.general(this);
  else window.top.postMessage("message", "*");
}

/* btn_4.onclick = () => {
  if (parent.buttonsExplained)  parent.buttonsExplained(this);
  else window.top.postMessage("message", "*");
}

btn_5.onclick = () => {
  if (parent.spareButton)  parent.spareButton(this);
  else window.top.postMessage("message", "*");
} */

mainTag.onclick = () => {
  if (parent.infoHide)  parent.infoHide(this);
  else window.top.postMessage("message", "*");
}