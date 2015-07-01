function getRandomNumber(lower, upper) {
	return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

console.log(getRandomNumber(1,6));
console.log(getRandomNumber(1,100));
console.log(getRandomNumber(200, 500));
console.log(getRandomNumber(1000, 20000));
console.log(getRandomNumber(50, 100));


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