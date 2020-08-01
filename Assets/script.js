/* commenting out the entire file

//const searchBar = document.getElementById("searchBar");
//var searchVal = searchBar.val();
var selectedMov = []


function search() {

  var movie = "fargo";
  var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";


  for (i = 0; i < selectedMov.length; i++) {
    if (movie === selectedMov[i].movTitle) { return }
    else {


      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {

        console.log(response);
        var title = response.Title;
        var genre = response.Genre;
        var imageSrc = response.Poster;
        var rating = response.Rated;
        var movObj = { movTitle: title, movGenre: genre, movRate: rating, movImgSrc: imageSrc }


        $("#title").html(title);
        $("#genre").html(genre);
        $("#image").html("<img src='" + imageSrc + "'>");
        $("#rating").html(rating);
        selectedMov.push(movObj);
        localStorage.setItem('movies', movObj)

        console.log(movObj);


        console.log(selectedMov);

      });
    }
  }
}
function renderMov() {


  displaycard.title.html(selectedMov[i].movTitle);
  displaycard.rating.html(selectedMov[i].movRate);
  displaycard.genre.html(selectedMov[i].movGenre);
  displaycard.image.html("<img src='" + selectedMov[i].movTitle + "'>");
  var favBut = $("<button>");
  favBut.text("Favorite");
  favBut.attr('click', setFavorite());

  //can use THIS if onclick function//

}


function renderMov() {
  for (i = 0; i < selectedMov.length; i++) {
    var movBut = $("<button>")
    movBut.html(selectedMov[i].movTitle);
    movBut.attr('data-index', i);
    $("#buttonDiv").append(movBut);

  }
}


function localLoad() {

  //USE THIS AT ONLOAD TO CHECK FOR LOCAL STORAGE ITEMS

  var locLen = localStorage.movies.length;

  if (locLen === 0) { return }
  else {
    {
      for (i = 0; i < locLen; i++) {

        var storObj = localStorage.getItem(movies[i]);
        selectedMov.push(storObj);
      }


    }
  }
}

function setFavorite() {

  var favMovie = //FAVORITE MOVIE OBJECT HERE;

    localStorage.removeItem('movieFav');
  localStorage.setItem('movieFav', favMovie);
}

search();

*/

