function testing(){

    var movie = "fargo";
            var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
    
            
            $.ajax({
              url: queryURL,
              method: "GET"
            }).then(function(response) {console.log(response);});
        }
        testing();