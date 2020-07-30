//const searchBar = document.getElementById("searchBar");
//var searchVal = searchBar.val();



function search() {

  var movie = "fargo";
  var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
var selectedMov = []

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    console.log(response);
    var title = response.Title;
    var genre = response.Genre;
    var imageSrc = response.Poster;
    var rating = response.Rated;
    var movObj ={movTitle:title, movGenre:genre, movRate:rating, movImgSrc:imageSrc}


    $("#title").html(title);
    $("#genre").html(genre);
    $("#image").html("<img src='" + imageSrc + "'>");
    $("#rating").html(rating);
    selectedMov.push(movObj);
    console.log(movObj);
    console.log(selectedMov);

  });
}

function renderList(){

  for (i=0; i<selectedMov.length; i++){
displaycard[i].title.html(selectedMov[i].movTitle);
displaycard[i].rating.html(selectedMov[i].movRate);
displaycard[i].genre.html(selectedMov[i].movGenre);
displaycard[i].image.html("<img src='" + selectedMov[i].movTitle + "'>");
displaycard[i].attr('data-num', i)

  }
}

function renderMov(){


}
search();
