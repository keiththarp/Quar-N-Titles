$(document).ready(function () {

  // Frontend Variables
  const allCards = $(".all-cards");

  //This queries all search fields
  const titleSearch = $(".title-search");

  // Variables for search results containers
  const titleBox = $(".title-box"); // This is the template for the search results container

  // These are the locations where we will place the correct results
  const movieHolder = $(".movie-title-box-holder");
  const bookHolder = $(".book-title-box-holder");
  const tvHolder = $(".tv-title-box-holder");

  // Card Switcher
  $(".destination").on("click", function (event) {
    // Turn off all the cards
    allCards.addClass("hide-card");
    // Retrieve the data-destination of the clicked element
    const dataDestination = $(this).attr("data-destination");
    // Use data-destination to query the correct card
    const destination = $(`#${dataDestination}`);
    // Then remove the hide-card class
    destination.removeClass("hide-card");
  });

  // *** Search form - collect search and direct to correct API

  // Collects search term from currently displayed card
  titleSearch.submit(function (event) {
    event.preventDefault();
    const _this = $(this);

    // This collects the search term from that field
    const searchTerm = _this.children("input").val();

    // This determines which card we're getting the search from and is used to invoke the correct function
    const searchAPI = _this.children().attr("id");

    // Invoking the correct function
    apiObject[searchAPI](searchTerm);

    // Clearing the search field
    _this.children("input").val("")
  });

  const apiObject = {
    // Movie API call function
    movieAPI: function (searchTerm) {

      // Building the API query URL
      const queryURL = `https://www.omdbapi.com/?t=${searchTerm}&apikey=trilogy`;

<<<<<<< HEAD
      // Calling the API
      $.get(queryURL, function (result) {

        // Destructuring the result
        const title = result.Title;
        const genre = result.Genre;
        const imgSrc = result.Poster;
        const rating = result.Rated;
        const plot = result.Plot;
        const reviews = result.Ratings[0].Value;

        // Cloning the template
        const thisHolder = titleBox.contents().clone().attr("id", searchTerm); // Adding id = to the search term
        // Placing the Values in the new element
        thisHolder.find(".title-img").css("background-image", "url(" + imgSrc + ")");
        thisHolder.find(".title-title").text(title);
        thisHolder.find(".title-genre").text(genre);
        thisHolder.find(".title-rating").text(rating);
        thisHolder.find(".title-review").text(reviews);
        thisHolder.find(".title-plot").text(plot);// This is set to only display on >= medium screens
        // Positioning it in the DOM
        movieHolder.prepend(thisHolder);
=======
      var selectedMov = []







  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    if (response.Response === "False") { alert("No results found"); return }
    else {


      const title = response.Title;
      const genre = response.Genre;
      const imgSrc = response.Poster;
      const rating = response.Rated;
      const plot = response.Plot;
      const reviews = response.Ratings[0].Value;
      var movObj = { movPlot: plot, movReviews: reviews, movTitle: title, movGenre: genre, movRate: rating, movImgSrc: imgSrc }


           thisHolder.find(".title-img").css("background-image", "url(" + imgSrc + ")");
           thisHolder.find(".title-title").text(title);
           thisHolder.find(".title-genre").text(genre);
           thisHolder.find(".title-rating").text(rating);
           thisHolder.find(".title-review").text(reviews);
           thisHolder.find(".title-plot").text(plot);

      function addBut() {
        var selBut = $("<button>");
        selBut.text("Add");
        selBut.on("click", function () {


          selectedMov.push(movObj);


          localStorage.setItem('movies', JSON.stringify(selectedMov));


          renderList();
        });
        $("#newDiv").append(selBut);
      }


      function exist() {
        for (i = 0; i < selectedMov.length; i++) {
          if (title === selectedMov[i].movTitle) { return true }

        }
      }
      if (exist === true) { return }
      else { addBut() }
    }
  });




function renderList() {
  $("#newDiv").html("");
  for (i = 0; i < selectedMov.length; i++) {
    var movBut = $("<button>");
    movBut.text(selectedMov[i].movTitle);
    movBut.attr('data-index', i);
    movBut.attr('value', selectedMov[i]);
    movBut.on("click", function () {
      var Index = this.dataset.index;


      thisHolder.find(".title-img").css("background-image", "url(" + selectedMov[Index].movImgSrc + ")");
      thisHolder.find(".title-title").text(selectedMov[Index].movTitle);
      thisHolder.find(".title-genre").text(selectedMov[Index].movGenre);
      thisHolder.find(".title-rating").text(selectedMov[Index].movRate);
      thisHolder.find(".title-review").text(selectedMov[Index].movReviews);
      thisHolder.find(".title-plot").text(selectedMov[Index].movPlot);
      var removeBut = $("<button>");
      removeBut.text("Remove");
      removeBut.on("click", function () {
        var thisMov = localStorage.getItem("movies");
        var movArray = JSON.parse(thisMov);
        movArray.splice(Index, 1);
        localStorage.setItem("movies", JSON.stringify(movArray));
        selectedMov.splice(Index, 1);
        clear();
        load();

>>>>>>> 6e003e6595d910f6ef7e093a8233dd7da392d6bd
      })
      $("#newDiv").append(removeBut);

    });
    $("#newDiv").append(movBut);

  }
}


function load() {

  if (localStorage.getItem("movies") === null) { return }
  else {
    var tempMov = localStorage.getItem("movies");
    selectedMov = JSON.parse(tempMov);
  }

  renderList();
}

function clear() {
  thisHolder.find(".title-img").html("");
  thisHolder.find(".title-title").text("");
  thisHolder.find(".title-genre").text("");
  thisHolder.find(".title-rating").text("");
  thisHolder.find(".title-review").text("");
  thisHolder.find(".title-plot").text("");

}



load();


    },

    // Book API call function
    bookAPI: function (searchTerm) {
      thisHolder = bookHolder.prepend(titleBox.contents().clone());

      console.log(`${searchTerm} is the book`);
    },

    // TV API call function
    tvAPI: function (searchTerm) {
      thisHolder = tvHolder.prepend(titleBox.contents().clone());

      console.log(`${searchTerm} is the T.V. show`);
    },
  }






  // All code above here for document ready function

});
