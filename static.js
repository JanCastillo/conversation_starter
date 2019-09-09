var items1 = data.questions;
var items2 = data.phrasal_verbs;

var button1 = d3.select("#questions");
var button2 = d3.select("#verbs");

button1.on("click", function() {
    d3.event.preventDefault();
    let i;
    d3.select("ul").append("br");
    for (i = 0; i < 5; i++) { 
        let random = Math.floor((Math.random() * items1.length));
        let randomItem = items1[random];
        let li1 = d3.select("ul").append("li");
        li1.text(randomItem);
        d3.select("ul").append("hr");
    }
    d3.select("ul").append("br");
  });

button2.on("click", function() {
    d3.event.preventDefault();
    let i;
    let verbs = d3.select("ul")
    let table = verbs.append("table")
    verbs.append("br")
    let tbody = table.append("tbody")
    for (i = 0; i < 10; i++) { 
        let random = Math.floor((Math.random() * items2.length));
        let randomItem = items2[random];
        let row = tbody.append("tr")
        let cell = row.append("td")
        cell.text(randomItem)
    }
  });