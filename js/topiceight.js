function getRandomColor() {
    var red = document.querySelector('div#loader .red');
    var blue = document.querySelector('div#loader .blue');
    var white = document.querySelector('div#loader .white');

    red.style.backgroundColor = randomColor();
    blue.style.backgroundColor = randomColor();
    white.style.backgroundColor = randomColor();
}

function randomColor() {
    //'#' + Math.random().toString(16).substr(-6);
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function myMove() {
    var getaclass = document.getElementById("littlebox")
    if (getaclass.className === "box") {
        document.getElementById("littlebox").className = "box2";
    } else if (getaclass.className === "box2") {
        document.getElementById("littlebox").className = "box3";
    } else if (getaclass.className === "box3") {
        document.getElementById("littlebox").className = "box4";
    } else {
        document.getElementById("littlebox").className = "box";
    }

}