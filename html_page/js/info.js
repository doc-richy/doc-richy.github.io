
let btn_1 = document.getElementById("btn-1");
let btn_2 = document.getElementById("btn-2");
let btn_3 = document.getElementById("btn-3");
let btn_4 = document.getElementById("btn-4");
let btn_5 = document.getElementById("btn-5");
let mainTag = document.getElementById("main");
let para = document.getElementById("para");

let rootvar = document.querySelector(":root");


//rootvar.style.setProperty("--win-innerheight", `${window.innerHeight}`);

btn_1.onclick = () => {
  console.log("button click")
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

btn_4.onclick = () => {
  if (parent.buttonsExplained)  parent.buttonsExplained(this);
  else window.top.postMessage("message", "*");
}

btn_5.onclick = () => {
  if (parent.spareButton)  parent.spareButton(this);
  else window.top.postMessage("message", "*");
}

mainTag.onclick = () => {
  if (parent.infoHide)  parent.infoHide(this);
  else window.top.postMessage("message", "*");
}