$(document).ready(function () {
     $(".btn-new-quote").on("click", function(){genQuote()});
});

var quotesArray = ["Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.  –Robert Frost","I attribute my success to this: I never gave or took any excuse. –Florence Nightingale","You miss 100% of the shots you don’t take. –Wayne Gretzky","I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed. –Michael Jordan","The most difficult thing is the decision to act, the rest is merely tenacity. –Amelia Earhart","Every strike brings me closer to the next home run. –Babe Ruth","Definiteness of purpose is the starting point of all achievement. –W. Clement Stone","Life isn’t about getting and having, it’s about giving and being. –Kevin Kruse"];

// 8 quotes total

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function genQuote() {  
  var randomQuote = quotesArray[getRandomNum(0, 8)];
  console.log(randomQuote);
  $(".quote-text").text(randomQuote);
}