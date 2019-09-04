var items = data.questions;

var button = d3.select("#click-me");

button.on("click", function() {
    let i;
    for (i = 0; i < 5; i++) { 
        let random=  Math.floor((Math.random() * items.length));
        let randomItem=items[random];
        let li1 = d3.select("ul").append("li");
        li1.text(randomItem);
        d3.select("ul").append("hr");
    }
    d3.select("ul").append("br");
    d3.select("ul").append("br");
  });
  