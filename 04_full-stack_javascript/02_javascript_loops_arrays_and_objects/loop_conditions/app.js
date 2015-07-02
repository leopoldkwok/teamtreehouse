var upper = 10000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;


function getRandomNumber(upper) {
	return Math.floor(Math.random() * upper) + 1;_