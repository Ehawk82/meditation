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
        for(let d = 0; d < 10; d++) {
            var td = createEle("td");
          
            td.innerHTML = "r:" + r + "; d: " + d;
          
            row.append(td)
        }
    }
    table.className = "table w3-grey w3-card-4";
    assessmentChart.append(table);
    
    body.append(assessmentChart);
  }
};
window.onload = () => {
  init();
};
