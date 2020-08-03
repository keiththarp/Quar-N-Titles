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

    function addBut(){
      var selBut = $("<button>");
      selBut.text("Add");
      selBut.on("click", function () {
  
  
        selectedMov.push(movObj);
  
        //if (localStorage.getItem)
        localStorage.setItem('movies', JSON.stringify(selectedMov));
  
        console.log(movObj);
  
  
        console.log(selectedMov);
        console.log(localStorage.movies);
        renderList();
      });
$("#image").append(selBut);
    }

var exist = exist();
function exist(){
    for (i = 0; i < selectedMov.length; i++) {
      if (title===selectedMov[i].movTitle) {return true}

    }
  }
  if (exist === true) {return}
  else {addBut()}

  });
};

function renderMov() {


  $("#title").html(selectedMov[i].movTitle);
  $("#rating").html(selectedMov[i].movRate);
  $("#genre").html(selectedMov[i].movGenre);
  $("#image").html("<img src='" + selectedMov[i].movTitle + "'>");
  //var favBut = $("<button>");
  //favBut.text("Favorite");
  //favBut.on('click', setFavorite());

  //can use THIS if onclick function//

}


function renderList() {
  $("#buttonDiv").html("");
  for (i = 0; i < selectedMov.length; i++) {
    var movBut = $("<button>");
    movBut.text(selectedMov[i].movTitle);
    movBut.attr('data-index', i);
    movBut.on("click", function () { renderMov() });
    $("#buttonDiv").append(movBut);

  }
}


function load() {
  console.log(localStorage.movies.length);
  if (localStorage.getItem("movies") === null) { return }
  else {
    var tempMov = localStorage.getItem("movies");
    selectedMov = JSON.parse(tempMov);
  }
  console.log(selectedMov);
  renderList();
}

console.log(localStorage.getItem('movies'));

load();

