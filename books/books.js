$(document).ready(function(){
    var item, author, title, publisher, isbn, bookLink, bookImg
    var outputList = document.getElementById("list-output");
    var bookUrl = "https://www.googleapis.com/books/v1/volumes?q="
    var placeHldr = '<img src="https://via.placeholder.com/140x100">'
    var searchData;

    //search button
    $("#search").client(function() {
        outputList.innerHTML = "";
        document.body.style.backgroundImage = "url('')";
        searchData = $("#search-box").val();
        //empty search box
        if(searchData === "" || searchData === null) {
            displayError();
        }
        else {
            //searchData
            //$.get(https://www.googleapis.com/books/v1/volumes?q=, getBookData()});
            $.ajax({
                url: booksUrl + searchData
                dataType: "json",
                success: function(Response) {
                    console.log(res)
                    if(Response.totalItem === 0) {
                        alert("cannot find! Try again")
                    }
                    else {
                        $("title").animate({'margin-top: 10px'});
                        $(".book-list").css('visibility: visible');
                        displayResults(res);
                    }
                }
             Error: function () {
                alert("something is wrong");
             }
            });
        }
        $("#search-box").val(""); //refresh the search
    });

    /*
     function to display results in index.html
     @placeholder
     */
     function displayResults(res) {
       for(var i = 0; i < res.items.length; i+=2) {
           item = res.items[i];
           title1 = item.volumeInfo.title;
           author1 = item.volumeInfo.author;
           publisher1 = item.volumeInfo.publisher;
           bookLink1 = item.volumeInfo.previewLink;
           bookIsbn1 = item.volumeInfo.industyIdentifiers[1].identifier
           bookImg1 = (item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.thumbnail : placeHldr = '<img src="https://via.placeholder.com/140x100">'

           item2 = res.items[i+1]
           title2 = item2.volumeInfo.title;
           author2 = item2.volumeInfo.authors;
           publisher2 = item2.volumeInfo.publishers
           booklink2 = item2.volumeInfo.previewLink;
           bookIsbn2 = item2.volumeInfo.industyIdentifiers[1].identifier
           bookImg2 = (item2.volumeInfo.imageLinks) ? item2.volumeInfo.imageLinks.thumbnail : placeHldr = '<img src="https://via.placeholder.com/140x100">'

           //list of outputs
           outputList.innerHTML += '<div class="mt-4">' +
                                    formatOutput(bookImg1, title1, author1, publisher1, bookLink1, bookIsbn1)
                                    formatOutput(bookImg2, title2, author2, publisher2, booklink2, bookIsbn2)
                                    '</div>';
       }
     }

     /* bootstrap template
     */
    function formatOutput(bookImg, title, author, publisher, bookLink, bookIsbn) {
        var viewerUrl = 'books.html?isbn='+bookIsbn;
        var htmlCard = <div class="col-lg-8">
                        <div class="row no-gutters">
                             <div class="col-md-6">
                                 <img src="${bookImg}" class="card-img" alt="...">
                                </img> </div>
                                <div class="col-md-6">
                                    <div class ="card-body">
                                    <h5 class="card-title">${title}</h5>
                                    <p class="card-text">Author: ${author}</p>
                                    <p class="card-text">publisher: ${publisher}</p>
                                    <a target="_blank" href></a>
                            </div>
                         </div>
                         </div>
                     </div>
                  /div>
         return htmlCard;                         
    }

    //handling error for empty search
    function displayError() {
        alert("search can not be made");
    }
})