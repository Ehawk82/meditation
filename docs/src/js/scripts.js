const init = () => {
  buildApp();
},
buildApp = () => {
  var body = byId("body"),
      welcomePage = createEle("div"),
      welcomeMessage = createEle("div"),
      contBtn = createEle("button");
  
  contBtn.innerHTML = "CONTINUE";
  contBtn.onclick = contFunc(body);
  
  welcomeMessage.innerHTML = "Welcome to the meditation app";
  
  welcomePage.append(welcomeMessage,contBtn);

  body.append(welcomePage);
},
contFunc = (body) => {
  return () => {
    body.innerHTML = "";
    
    var assessmentChart = createEle("div"),
        table = createEle("table");
    
    for (let r = 0; r < 10; r++) {
        var row = createEle("tr");
      
        row.innerHTML = r;
    }
    
    body.append(assessmentChart);
  }
};
window.onload = () => {
  init();
};
