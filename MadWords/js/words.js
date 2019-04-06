var section = document.querySelector("section");

var requestURL =
    "http://madlibz.herokuapp.com/api/random?minlength=2&maxlength=7";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "text";
request.send();

request.onload = function () {
    var madText = request.responseText;
    var libwords = JSON.parse(madText);
    var libs = libwords["templates"];
    var ran = Math.floor(Math.random() * Math.floor(5));
    var picked = libs[ran];
    var h2 = document.createElement("h2");
    h2.textContent = picked.title;
    popLib(picked);
};

function popLib(madwords) {


    var para1C = document.createElement("p");
    var para2C = document.createElement("p");
    var para3C = document.createElement("p");
    var para4C = document.createElement("p");
    for (var i = 0; i < madwords.blanks.length; i++) {


        h3C.textContent = towns[i].name;
        para1C.textContent = '"' + towns[i].motto + '"';
        para2C.textContent = "Year Founded: " + towns[i].yearFounded;
        para3C.textContent = "Current Population: " + towns[i].currentPopulation;
        para4C.textContent = "Average Rainfall: " + towns[i].averageRainfall;
        para1C.style.fontWeight = "bolder";

        articleC.appendChild(h3C);
        articleC.appendChild(para1C);
        articleC.appendChild(para2C);
        articleC.appendChild(para3C);
        articleC.appendChild(para4C);


        for (var j = i; j < jPics.length;) {
            var pic = document.createElement("img");
            pic.src = jPics[j];
            articleC.appendChild(pic);
            break;
        }

        section.appendChild(articleC);
    }
}