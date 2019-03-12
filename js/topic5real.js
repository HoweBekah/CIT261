   var shows = [];

   function showList() {
       var show = document.getElementById("addshow").value;
       var txt = document.createTextNode(show);
       var nextItem = document.createElement("li");
       nextItem.appendChild(txt);
       document.getElementById("showoptions").appendChild(nextItem);
       shows.push(show);
       localStorage.setItem("showoptions", JSON.stringify(shows));
   }

   function removeShow() {
       var showslist = document.getElementById("showoptions");
       var showItems = showslist.getElementsByTagName("li");
       var last = showItems[showItems.length - 1];
       showslist.removeChild(last);
   }

   function pickShow() {
       var shows = JSON.parse(localStorage.getItem("showoptions"));
       var ranint = getRandomInt(shows.length);
       var picked = shows[ranint];
       document.getElementById("watchDiv").innerHTML = "You should watch: " + picked + "!";
   }

   function returnList() {
       var shows = JSON.parse(localStorage.getItem("showoptions"));
       var shows = shows.join(", ");
       document.getElementById("listDiv").innerHTML = "Your show options are " + shows + ".";
   }

   function getRandomInt(max) {
       return Math.floor(Math.random() * Math.floor(max));
   }