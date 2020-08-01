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
});