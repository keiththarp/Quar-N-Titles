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
  let storedMovies;

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

    loadObject[dataDestination]();
  });

  const loadObject = {
    homecard: function () {
      return
    },
    moviecard: function () {
      storedMovies = JSON.parse(localStorage.getItem("movies"));
      if (!storedMovies) {
        return
      };
      buildMovieCards(storedMovies)
    },
    bookcard: function () {

    },
    tvcard: function () {

    }
  };

  function buildMovieCards(storedMovies) {
    movieHolder.empty();

    let i=0;
    storedMovies.forEach(function (index) {
      const thisHolder = titleBox.contents().clone().attr("id", index.movTitle).attr("data-index", i);
      thisHolder.find(".title-img").css("background-image", "url(" + index.movImgSrc + ")");
      thisHolder.find(".title-title").text(index.movTitle);
      thisHolder.find(".title-genre").text(index.movGenre);
      thisHolder.find(".title-rating").text(index.movRate);
      thisHolder.find(".title-review").text(index.movReviews);
      thisHolder.find(".title-plot").text(index.movPlot);
      thisHolder.find(".memory-buttons").attr("data-memory", index.movTitle);
      movieHolder.prepend(thisHolder);
      i++
    });

    const clickListener = $(".individual-title");
    const addButt = $(".add-butt");
    const subButt = $(".sub-butt");

    // addButt.on("click", function (event) {
    //   alert("This title already exists");
    // });


    
    clickListener.on("click", function (event) {
      let thisIndex = ($(this).attr("data-index"));
      const thisClick = $(event.target);
      if(thisClick.hasClass("add-butt")) {
        alert("This title already exists");
      } else if (thisClick.hasClass("sub-butt")) {
        console.log(thisIndex);
        storedMovies.splice(thisIndex, 1);
        localStorage.setItem('movies', JSON.stringify(storedMovies));
        buildMovieCards(storedMovies);
      }
      return;
    })

  };

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

      // var selectedMov = []

      $.get(queryURL, function (response) {

        if (response.Response === "False") { alert("No results found"); return }
        else {

          var movObj = { movPlot: response.Plot, movReviews: response.Ratings[0].Value, movTitle: response.Title, movGenre: response.Genre, movRate: response.Rated, movImgSrc: response.Poster }
          // Making the template clone 
          const thisHolder = titleBox.contents().clone().attr("id", searchTerm);

          // Populating the title box
          thisHolder.find(".title-img").css("background-image", "url(" + response.Poster + ")");
          thisHolder.find(".title-title").text(response.Title);
          thisHolder.find(".title-genre").text(response.Genre);
          thisHolder.find(".title-rating").text(response.Rated);
          thisHolder.find(".title-review").text(response.Ratings[0].Value);
          thisHolder.find(".title-plot").text(response.Plot);
          thisHolder.find(".memory-buttons").attr("data-memory", response.Title);

          movieHolder.prepend(thisHolder);
          const addButt = $(".add-butt");

          addButt.on("click", function (event) {
            thisSaveButt = $(this).parent().attr("data-memory");
            storedMovies = JSON.parse(localStorage.getItem("movies"));
            if (!storedMovies) {
              storedMovies = [];
              storedMovies.push(movObj);
              localStorage.setItem('movies', JSON.stringify(storedMovies));

              return;
            }
            let exists = false;
            storedMovies.forEach(function (index) {

              if (thisSaveButt === index.movTitle) {
                alert("This title already exists in your list");
                exists = true
                return;
              }
            });
            if (!exists) {
              storedMovies.push(movObj);
              localStorage.setItem('movies', JSON.stringify(storedMovies));
            }
            buildMovieCards(storedMovies);
          });

        }
      });

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

    // All code above here for document ready function
  }
});



                          // function exist() {
                          //   for (i = 0; i < selectedMov.length; i++) {
                          //     if (title === selectedMov[i].movTitle) { return true }

                          //   }
                          // }
                          // if (exist === true) { return }

                           // function renderList() {
        //   $("#newDiv").html("");
        //   for (i = 0; i < selectedMov.length; i++) {
          //     var movBut = $("<button>");
          //     movBut.text(selectedMov[i].movTitle);
          //     movBut.attr('data-index', i);
          //     movBut.attr('value', selectedMov[i]);
          //     movBut.on("click", function () {
            //       var Index = this.dataset.index;


            //       thisHolder.find(".title-img").css("background-image", "url(" + selectedMov[Index].movImgSrc + ")");
            //       thisHolder.find(".title-title").text(selectedMov[Index].movTitle);
            //       thisHolder.find(".title-genre").text(selectedMov[Index].movGenre);
            //       thisHolder.find(".title-rating").text(selectedMov[Index].movRate);
            //       thisHolder.find(".title-review").text(selectedMov[Index].movReviews);
            //       thisHolder.find(".title-plot").text(selectedMov[Index].movPlot);


            //       // var removeBut = $("<button>");
            //       // removeBut.text("Remove");
            //       // removeBut.on("click", function () {

              //       const subButt = $(".sub-butt");
              //       subButt.on("click", function () {

                //         var thisMov = localStorage.getItem("movies");
                //         var movArray = JSON.parse(thisMov);
                //         movArray.splice(Index, 1);
                //         localStorage.setItem("movies", JSON.stringify(movArray));
                //         selectedMov.splice(Index, 1);
                //         clear();
                //         load();

                //       })
                //     });
                //   }
                // }


                // function load() {

                  //   if (localStorage.getItem("movies") === null) { return }
                  //   else {
                    //     var tempMov = localStorage.getItem("movies");
                    //     selectedMov = JSON.parse(tempMov);
                    //   }

                    //   renderList();
                    // }

                    // function clear() {
                      //   thisHolder.find(".title-img").html("");
                      //   thisHolder.find(".title-title").text("");
                      //   thisHolder.find(".title-genre").text("");
                      //   thisHolder.find(".title-rating").text("");
                      //   thisHolder.find(".title-review").text("");
                      //   thisHolder.find(".title-plot").text("");

                      // }



                      // load();