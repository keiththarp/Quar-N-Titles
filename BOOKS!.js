$(document).ready(function() {
    var item, title, author, publisher, bookLink, Bookimg,
    var outputlist = document.getElementById("list-output");
    var bookurl = "https://www.googleapis.com/books/v1/volumes?q="
    var placeholder = "https://via.placeholder.com/350x150"
    var searchData;

             //listener search button here
            $("#search").click(function() {
                  outputlist.innerHTML = ""
                 searchData = $("#search-box").val();
            //empty search field data results
                    if(searchData === "" || searchData === null){
                    DisplayError();
                }
     else{
        $.ajax({
            url: bookurl + searchData,
            datatype: "json",
            success: function(res) {
            console.log(res)
            if(respone.totalItem === 0) {
                alert("no results found");
                    }
                    else {
                        $("title").antiem({'margin-top: 10px'});
                        $(".book-list").css('visibility.visibile');
                        displayResults(res);
                    }
                }
                error: function() {
                    alert("something is wrong");
                }
        })
     }
     $("#search-box").val("");
    })
})
