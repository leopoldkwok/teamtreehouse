function getRandomNumber(lower, upper) {
	if (isNaN(lower) || isNaN(upper)) {
		throw new Error('Both arguments must be numbers');
	}
	return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

console.log(getRandomNumber(1,100));
console.log(getRandomNumber('nine', 24));
console.log(getRandomNumber(200, 74637));
console.log(getRandomNumber(1000, 20000));
console.log(getRandomNumber(50, 'one-hundred'));


// function getRandomNumber(upper) {
// 	var randomNumber = Math.floor(Math.random() * upper) + 1;
// 	return randomNumber;
// }



// console.log(getRandomNumber(6));
// console.log(getRandomNumber(100));
// console.log(getRandomNumber(10000));
// console.log(getRandomNumber(2));

// alert(getRandomNumber());
// console.log(getRandomNumber());
// var dieRoll = getRandomNumber();

// function getArea(width, length, unit) {
// 	var area = width * length;
// 	return area + " " + unit;
// }

// console.log(getArea(10, 20, 'sq ft'));