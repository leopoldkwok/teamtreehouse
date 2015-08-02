function Dice(sides) {
	this.sides = sides;
}

var dice = new Dice(6);
var dice10 = new Dice(10);

Dice.prototype.roll = function() {
		var randomNumber = Math.floor(Math.random() * this.sides) + 1;
		return(randomNumber);
}

console.log(dice.roll === dice10.roll);






// var dice = {
// 	sides: 6,
// 	roll: function () {
// 		var randomNumber = Math.floor(Math.random() * this.sides) + 1;
// 		return(randomNumber);
// 	}
// }