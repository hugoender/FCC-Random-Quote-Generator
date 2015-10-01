$(document).ready(function() {
  // Load random quote on page load
  $.getJSON('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?', genQuote);
  
  // When button is clicked
  $(".btn-new-quote").click(function() {
    
    // Animate icon on button
    $("#cog-icon").addClass('fa-spin');
    
    // API call
    $.getJSON('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?', genQuote);
    
    // Stop icon animation on button
    var stopAnimation = function(){
      $("#cog-icon").removeClass('fa-spin');
    }
    
    // Set time interval to wait before stopping animation
    setTimeout(stopAnimation, 600);
    
  });
});

// 8 quotes total
//var quotesArray = ["Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.  –Robert Frost", "I attribute my success to this: I never gave or took any excuse. –Florence Nightingale", "You miss 100% of the shots you don’t take. –Wayne Gretzky", "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed. –Michael Jordan", "The most difficult thing is the decision to act, the rest is merely tenacity. –Amelia Earhart", "Every strike brings me closer to the next home run. –Babe Ruth", "Definiteness of purpose is the starting point of all achievement. –W. Clement Stone", "Life isn’t about getting and having, it’s about giving and being. –Kevin Kruse"];

// Returns a random number between min (inclusive) and max (exclusive)
/*function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}*/

function genQuote(response) {
  
  // Parse out the quote and author from returned API JSON data
  var randomQuote = response.quoteText + ' -' + response.quoteAuthor;
  //console.log (randomQuote);
  // Get a random quote for the prepopulated array
  //var randomQuote = quotesArray[getRandomNum(0, 8)];
  
  // Change text in the #quote span to the random quote generated
  $("#quote").text(randomQuote);

  //ev.preventDefault();
  // Remove existing iframe
  $('#tweetBtn iframe').remove();
  // Generate new markup
  var tweetBtn = $('<a></a>')
    .addClass('twitter-share-button')
    .attr('data-size', 'large')
    .attr('href', 'http://twitter.com/share')
    .attr('data-url', ' ')
    .attr('data-text', randomQuote);
  $('#tweetBtn').append(tweetBtn);
  twttr.widgets.load();

}

// Twitter API function
! function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    p = /^http:/.test(d.location) ? 'http' : 'https';
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = p + '://platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js, fjs);
  }
}(document, 'script', 'twitter-wjs');