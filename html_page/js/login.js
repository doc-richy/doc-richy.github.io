let button = document.getElementById("buttonLogin");
let user = document.getElementById("username");
let pwd = document.getElementById("password");


button.onclick = () => {
  if (parent.loginHide)  parent.loginHide(this, user.value, pwd.value);
  else window.top.postMessage("message", "*");
}