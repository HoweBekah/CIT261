var fillin = document.getElementById("fillWords");
var libbed = document.getElementById("madlib");
var requestURL =
    "https://next.json-generator.com/api/json/get/Ek0JxcMYI";
var request = new XMLHttpRequest();
request.open("GET", requestURL, true);
request.responseType = "text";
request.send();

request.onload = function () {
    var madText = request.responseText;
    var libwords = JSON.parse(madText);
    var ran = Math.floor(Math.random() * Math.floor(5));
    libwords = libwords["templates"];
    libwords = libwords[ran];
    console.log(libwords);
    var h2 = document.createElement("h2");
    h2.textContent = libwords.title;
    var art = document.createElement("article");
    fillin.appendChild(h2);
    for (var i = 0; i < libwords.story.length - 1; i++) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        var brake = document.createElement("br");
        var para = document.createElement("p");
        input.type = "text";
        var wordtype = libwords.blanks[i];
        input.id = "word" + i;
        neededId = "word" + i;
        label.textContent = wordtype + ": ";
        label.setAttribute("for", input);
        fillin.insertBefore(label, document.getElementById("input"));
        fillin.appendChild(input);
        fillin.appendChild(brake);
        var neededId = "word" + i;
        para.textContent = libwords.story[i] + neededId.value;
        art.appendChild(para);
    }

    libbed.appendChild(art);
};

function popLib() {
    libbed.className = "seeit";
}