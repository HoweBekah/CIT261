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
    for (var i = 0; i < libwords.blanks.length; i++) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        var brake = document.createElement("br");

        input.type = "text";
        var wordtype = libwords.blanks[i];
        input.id = "word" + i;
        label.textContent = wordtype + ": ";
        label.setAttribute("for", input);
        fillin.appendChild(input);
        fillin.insertBefore(label, document.getElementById("word" + i));
        fillin.appendChild(brake);
    }

};

function popLib() {
    libbed.innerHTML = "";
    var para = document.createElement("p");
    para.textContent += "\"";
    for (var i = 0; i < libwords.story.length; i++) {

        para.textContent += libwords.story[i];
        if (document.getElementById("word" + i)) {
            para.textContent += document.getElementById("word" + i).value;
        }
    }
    para.id = "lib";
    console.log(para);
    para.textContent += "\"";
    libbed.appendChild(para);
    //libbed.className = "seeit";

}