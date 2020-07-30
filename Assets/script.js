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

function renderMov(){

  
displaycard.title.html(selectedMov[i].movTitle);
displaycard.rating.html(selectedMov[i].movRate);
displaycard.genre.html(selectedMov[i].movGenre);
displaycard.image.html("<img src='" + selectedMov[i].movTitle + "'>");


  }


function renderMov(){
  for (i=0; i<selectedMov.length; i++){
    var movBut = $("<button>")
    movBut.html(selectedMov[i].movTitle);
    movBut.attr('id', 'but' + i);
    $("#buttonDiv").append(movBut);

}
}
search();
