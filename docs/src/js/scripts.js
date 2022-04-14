const init = () => {
  buildApp();
},
buildApp = () => {
  body.innerHTML = "hello js";
};
window.onload = () => {
  init();
};
