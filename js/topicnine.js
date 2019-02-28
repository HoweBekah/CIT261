libButton.addEventListener("click", madLib);

function madLib() {
    var job = document.getElementById('job');
    var person = document.getElementById("person");
    var verb = document.getElementById("verb");
    var place = document.getElementById("place");
    var movie = document.getElementById("movie");
    var story = document.getElementById("story");

    job = job.value.bold().fontsize(6);
    person = person.value.bold().fontsize(6);
    verb = verb.value.bold().fontsize(6);
    place = place.value.bold().fontsize(6);
    movie = movie.value.bold().fontsize(6);

    document.getElementById("story").innerHTML = "When " + person + " and I used to go to the " + place + ", he would always try to " + verb + " the ending of the " + place + ". And he would always " + verb + " that the " + job + " had been dead the whole time. Even when we saw " + movie + ".";

    story.style.backgroundColor = "whitesmoke";
}
window.onload = function () {
    var divs = document.getElementsByTagName('div');
    for (var i = divs.length; i-- > 0;)
        if (divs[i].className === 'question')
            Toggler(divs[i]);
};

function Toggler(div) {
    var state = false;
    var toggled = div.nextSibling;
    while (toggled.nodeType !== 1)
        toggled = toggled.nextSibling;

    div.onclick = function () {
        state = !state;
        toggled.style.display = state ? 'block' : 'none';
    };
};