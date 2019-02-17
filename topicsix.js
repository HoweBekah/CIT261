var section = document.querySelector('section');

var requestURL = 'https://howebekah.github.io/CIT261/json/topmovies.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function () {
    var afiText = request.response;
    var afimovies = JSON.parse(afiText);
    showMovies(afimovies);
}

function showMovies(jsonObj) {
    var movies = jsonObj['movies'];

    for (var i = 0; i < movies.length; i++) {
        var myArticle = document.createElement('article');
        var myH4 = document.createElement('h4');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');


        myH4.textContent = (i + 1) + ". " + movies[i].title;
        myPara1.textContent = 'Rating: ' + movies[i].rating;
        myPara2.textContent = 'Director: ' + movies[i].director;
        myPara3.textContent = 'Year: ' + movies[i].year;

        myArticle.appendChild(myH4);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);

        section.appendChild(myArticle);
    }
}

function myFunction() {
    var newMovie = document.createElement("LI");
    var textnode = document.createTextNode("Water");
    newItem.appendChild(textnode);

    var list = document.getElementById("myList");
    list.insertBefore(newItem, list.childNodes[0]);
}