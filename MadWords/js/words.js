var fillin = document.getElementById("fillWords");
var libbed = document.getElementById("madlib");
var requestURL =
    "https://next.json-generator.com/api/json/get/Ek0JxcMYI";
var request = new XMLHttpRequest();
request.open("GET", requestURL, true);
request.responseType = "text";
request.send();
var madText;
var libwords;
var ran;

request.onload = function () {
    madText = request.responseText;
    libwords = JSON.parse(madText);
    ran = Math.floor(Math.random() * Math.floor(4));
    libwords = libwords["templates"];
    libwords = libwords[ran];

    var h2 = document.createElement("h2");
    h2.textContent = libwords.title;
    fillin.appendChild(h2);
    //can't change this to blanks so that there isn't an extra undefined input or else the popLib() doesn't work
    for (var i = 0; i < libwords.story.length - 1; i++) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        var brake = document.createElement("br");

        input.type = "text";
        var wordtype = libwords.blanks[i];
        input.id = "word" + i;
        label.textContent = wordtype + ": ";
        label.setAttribute("for", input);
        fillin.insertBefore(label, document.getElementById("input"));
        fillin.appendChild(input);
        fillin.appendChild(brake);
    }

};

function popLib() {
    var para = document.createElement("p");
    para.textContent += "\"";
    for (var i = 0; i < libwords.story.length - 1; i++) {
        para.textContent += libwords.story[i] + document.getElementById("word" + i).value;
    }
    para.id = "lib";
    console.log(para);
    para.textContent += "\"";
    libbed.appendChild(para);
    //libbed.className = "seeit";

}