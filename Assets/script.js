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


}


function renderList() {
  $("#buttonDiv").html("");
  for (i = 0; i < selectedMov.length; i++) {
    var movBut = $("<button>");
    movBut.text(selectedMov[i].movTitle);
    movBut.attr('data-index', i);
    movBut.attr('value', selectedMov[i]);
    movBut.on("click", function () { 
      var Index=this.dataset.index; 
      
      $("#title").html(selectedMov[Index].movTitle);
      $("#rating").html(selectedMov[Index].movRate);
      $("#genre").html(selectedMov[Index].movGenre);
      $("#image").html("<img src='" + selectedMov[Index].movImgSrc+ "'>");
      var removeBut = $("<button>");
      removeBut.text("Remove");
      removeBut.on("click", function(){
var thisMov=localStorage.getItem("movies");
var movArray=JSON.parse(thisMov);
movArray.splice(Index, 1);
localStorage.setItem("movies", JSON.stringify( movArray));
selectedMov.splice(Index,1);
        clear();
       load();

      })
      $("#image").append(removeBut);

    });
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

function clear(){
  $("#title").html("");
  $("#rating").html("");
  $("#genre").html("");
  $("#image").html("");
}

console.log(localStorage.getItem('movies'));

load();

