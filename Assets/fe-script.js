$(document).ready(function () {
  const allCards = $(".all-cards");

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


  // All code above here

  /* Movie object
  {Title: "Fargo", Year: "1996", Rated: "R", Released: "05 Apr 1996", Runtime: "98 min",…}
Actors: "William H. Macy, Steve Buscemi, Peter Stormare, Kristin Rudrüd"
Awards: "Won 2 Oscars. Another 81 wins & 57 nominations."
BoxOffice: "N/A"
Country: "USA, UK"
DVD: "24 Jun 1997"
Director: "Joel Coen, Ethan Coen"
Genre: "Crime, Drama, Thriller"
Language: "English"
Metascore: "85"
Plot: "Jerry Lundegaard's inept crime falls apart due to his and his henchmen's bungling and the persistent police work of the quite pregnant Marge Gunderson."
Poster: "https://m.media-amazon.com/images/M/MV5BNDJiZDgyZjctYmRjMS00ZjdkLTkwMTEtNGU1NDg3NDQ0Yzk1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
Production: "Gramercy Pictures"
Rated: "R"
Ratings: [{Source: "Internet Movie Database", Value: "8.1/10"}, {Source: "Rotten Tomatoes", Value: "94%"},…]
Released: "05 Apr 1996"
Response: "True"
Runtime: "98 min"
Title: "Fargo"
Type: "movie"
Website: "N/A"
Writer: "Ethan Coen, Joel Coen"
Year: "1996"
imdbID: "tt0116282"
imdbRating: "8.1"
imdbVotes: "598,350"
*/
});
