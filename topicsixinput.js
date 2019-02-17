 var movielist = [];
 var title = [];
 var rating = [];
 var director = [];
 var year = [];
 var myAFI = document.querySelector('myAFI');

 function Movie(title, rating, director, year) {
     this.title = title;
     this.rating = rating;
     this.director = director;
     this.year = year;
     this.doReport = function () {
         return this.title + this.rating + this.director + this.year;
     }
 }

 function doReport() {
     output = "";
     for (var i = 0; i < movielist.length; i++) {
         output += movielist[i].doReport() + "<br>";
     }
     title.push(title.value);
     rating.push(rating.value);
     director.push(director.value);
     year.push(year.value);


 }

 function listing() {
     var newMovie = new Movie(
         document.getElementById("titleBox").value,
         document.getElementById("ratingBox").value,
         document.getElementById("directorBox").value,
         document.getElementById("yearBox").value
     );
     movielist.push(newMovie);
     doReport();
 }

 function showMovielist(jsonObj) {
     var movies = jsonObj['movielist'];

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

         myAFI.appendChild(myArticle);
     }
 }