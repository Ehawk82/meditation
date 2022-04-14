const init = () => {
  buildApp();
},
buildApp = () => {
  var body = byId("body");
  body.innerHTML = "hello js";
};
window.onload = () => {
  init();
};
