var items1 = data.questions;
var items2 = data.phrasal_verbs;
var items3 = data.agree;
var items4 = data.disagree;

  function clear_data(){
    d3.select("#list1").selectAll("li").remove();
    d3.select("#list1").selectAll("br").remove();
    d3.select("#list2").selectAll("table").remove();
    d3.select("#list2").selectAll("br").remove();
    d3.select("#list3").selectAll("table").remove();
    d3.select("#list3").selectAll("br").remove();
  }

  function random_question(){
    for (i = 0; i < 1; i++) { 
        let random = Math.floor((Math.random() * items1.length));
        let randomItem = items1[random];
        let li1 = d3.select("ul").append("li");
        li1.text(randomItem);
    }
    d3.select("#list1").append("br");
  }

  function random_verbs(){
    let i;
    let verbs = d3.select("#list2")
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
  }

  function agree(){
    let expression = d3.select("#list3")
    let table = expression.append("table")
    expression.append("br")
    let tbody = table.append("tbody")
        let random = Math.floor((Math.random() * items3.length));
        let randomItem = items3[random];
        let row = tbody.append("tr")
        let cell = row.append("td")
        cell.text(randomItem)
  }

  function disagree(){
    let expression = d3.select("#list3")
    let table = expression.append("table")
    expression.append("br")
    let tbody = table.append("tbody")
        let random = Math.floor((Math.random() * items4.length));
        let randomItem = items4[random];
        let row = tbody.append("tr")
        let cell = row.append("td")
        cell.text(randomItem)
  }