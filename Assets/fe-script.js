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
      })
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
