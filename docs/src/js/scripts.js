const init = () => {
  buildApp();
},
buildApp = () => {
  var body = byId("body"),
      welcomePage = createEle("div");
  
  welcomePage.innerHTML = "Welcome to the meditation app!";
  console.log("hello JS");
  body.append(welcomePage);
};
window.onload = () => {
  init();
};
