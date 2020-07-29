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
search();
