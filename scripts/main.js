$(document).ready(function() {
  var quote;
  var author;
  var i = 0;

  function getNewQuote(){
    $.ajax({
      url:"https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en",
      jsonp: "jsonp",
      dataType: "jsonp",
      success: function(response){
        quote = response.quoteText;
        author = response.quoteAuthor || "unknown";
        $("#quote").text(quote);
        $("#author").text("- " + author);
      }
    });
  }

  function change(){
    var background = document.getElementById("background");
    var color = ["#4055c2","#2ccbdc","#660066","#fef65b","#66cdaa"];
      background.style.backgroundColor = color[i];
      i = (i + 1) % color.length;
  }


  $(".get-quote").click(function(x){
    x.preventDefault();
    getNewQuote();
    $(".row").fadeOut(70).fadeIn(3000);
    $("#background").animate(1000,change);
  });

  $(".share-quote").click(function(x){
    x.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent($('.quote-box').text()));
  });

});
