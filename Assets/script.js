const searchBar = document.getElementById("searchBar");
var searchVal = searchBar.val();



function search() {

  var movie = searchVal;
  var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";


  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    console.log(response);
    var title = response;
    var genre = response;
    var image = response;
    var rating = response;


  });
}
search();
