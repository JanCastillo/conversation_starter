var items1 = data.questions;
var items2 = data.phrasal_verbs;
var items3 = data.agree;
var items4 = data.disagree;

var button1 = d3.select("#questions");
var button2 = d3.select("#verbs");
var button3 = d3.select("#agree");
var button4 = d3.select("#disagree");

button1.on("click", function() {
    d3.event.preventDefault();
    let i;
    d3.select("#list1").append("br");
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
    let verbs = d3.select("#list1")
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

  button3.on("click", function() {
    d3.event.preventDefault();
    let expression = d3.select("#list2")
    let table = expression.append("table")
    expression.append("br")
    let tbody = table.append("tbody")
        let random = Math.floor((Math.random() * items3.length));
        let randomItem = items3[random];
        let row = tbody.append("tr")
        let cell = row.append("td")
        cell.text(randomItem)
  });

  button4.on("click", function() {
    d3.event.preventDefault();
    let expression = d3.select("#list2")
    let table = expression.append("table")
    expression.append("br")
    let tbody = table.append("tbody")
        let random = Math.floor((Math.random() * items4.length));
        let randomItem = items4[random];
        let row = tbody.append("tr")
        let cell = row.append("td")
        cell.text(randomItem)
  });