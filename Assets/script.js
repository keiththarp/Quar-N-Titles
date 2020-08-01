
var selectedMov = []
//var displaycard=

function search() {

  var movie = $("#searchBar").val();
  var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";



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

    //if (localStorage.getItem)
    localStorage.setItem('movies', JSON.stringify(selectedMov));

    console.log(movObj);


    console.log(selectedMov);
    console.log(localStorage.movies);
     

  });
};

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


function load() {

  if (localStorage.getItem("movies") == null) { return }
  else { selectedMov = localStorage.getItem("movies"); }
  console.log(selectedMov);
}

console.log(localStorage.getItem('movies'));

load();

