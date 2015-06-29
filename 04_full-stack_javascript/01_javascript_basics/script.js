var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
if (parseInt(guess) === randomNumber ) {
	correctGuess = true;
}
if (correctGuess) {
	document.write('<p>You guessed the number!</p>');
} else {
	document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
}

// if (true) {
// document.write('The condition is true');
// } else {
// document.write('The condition is false');
// }