var upper = 10000; /* upper limit of the random number */
var randomNumber = getRandomNumber(upper);
var guess; /* holds the computer guess */
var attempts = 0;

function getRandomNumber(upper) {
  return Math.floor(Math.random() * upper) + 1;
}

while (guess !== randomNumber) {
  guess = getRandomNumber(upper);
  attempts += 1; /* tracks number of guesses */
}

document.write("<p>The random number was: " + randomNumber + "</p>");
document.write("<p>It took the computer " + attempts + " attempts to get it right.</p>");
