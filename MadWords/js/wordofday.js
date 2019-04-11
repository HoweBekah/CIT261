var today = document.getElementById("todayword");
var def = document.getElementById("todaydef");
var backtitle = document.getElementById("wordtitle");
var backdefs = document.getElementById("worddefs");
var wordchoice = [
    "mysterious",
    "maniacal",
    "adhesive",
    "cohesion",
    "voluminous",
    "aluminum",
    "quizzical",
    "facetious",
    "narcolepsy",
    "terrify",
    "atonement",
    "rehabilitation",
    "freedom",
    "creativity",
    "peace",
    "unrequited",
    "bluster",
    "protagonist",
    "champion",
    "sedentary",
    "whisper",
    "cyclone",
    "single",
    "peacock",
    "haphazard",
    "greed",
    "sloth",
    "lethargy",
    "miracle",
    "fortress"
];
var ran1 = Math.floor(Math.random() * Math.floor(30));
var ran2 = Math.floor(Math.random() * Math.floor(30));
var use = wordchoice[ran1];
var backuse = wordchoice[ran2];
var requestURL =
    "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + use + "?key=e61b4f92-5759-43e9-bf37-afb567a0a660";
var request = new XMLHttpRequest();
request.open("GET", requestURL, true);
request.responseType = "text";
request.send();
var wordText;
var wordInfo;

var brequestURL =
    "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + backuse + "?key=e61b4f92-5759-43e9-bf37-afb567a0a660";
var brequest = new XMLHttpRequest();
brequest.open("GET", brequestURL, true);
brequest.responseType = "text";
brequest.send();

request.onload = function () {
    var h3 = document.createElement("h3");
    var ordered = document.createElement("ol");

    wordText = request.responseText;
    wordInfo = JSON.parse(wordText);

    //console.log(wordInfo);
    h3.id = "word";
    var booger = wordInfo[0].meta.id.split(":");
    h3.textContent = booger[0];

    for (var i = 0; i < wordInfo[0].shortdef.length; i++) {
        var item = document.createElement("li");
        item.textContent = wordInfo[0].shortdef[i];
        ordered.appendChild(item);
    }
    today.appendChild(h3);
    def.appendChild(ordered);

}

function backDef() {
    var bh3 = document.createElement("h3");
    var para = document.createElement("p");
    var bordered = document.createElement("ol");
    var h4 = document.createElement("h4");
    bwordText = brequest.responseText;
    bwordInfo = JSON.parse(bwordText);

    var booger = bwordInfo[0].meta.id.split(":");
    bh3.textContent = booger[0];
    bh3.id = "titleBack";
    backtitle.appendChild(bh3);
    console.log(bwordInfo);
    h4.textContent += bwordInfo[0].fl;

    backtitle.appendChild(h4);
    for (var i = 0; i < bwordInfo[0].shortdef.length; i++) {
        var bitem = document.createElement("li");
        bitem.textContent = bwordInfo[0].shortdef[i];
        bordered.appendChild(bitem);
    }
    para.textContent += "Other forms include: ";
    for (var i = 0; i < bwordInfo[0].meta.stems.length; i++) {

        para.textContent += bwordInfo[0].meta.stems[i] + ", ";
    }

    backdefs.appendChild(bordered);
    backdefs.appendChild(para);

    pinkbox.style.display = "none";
}

function backClear() {
    while (backtitle.firstChild) {
        backtitle.removeChild(backtitle.firstChild);
    }
    while (backdefs.firstChild) {
        backdefs.removeChild(backdefs.firstChild);
    }

    pinkbox.style.display = "block";
}