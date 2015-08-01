var dice = {
	roll: function () {
	  var sides = 6;
	  var randomNumber = Math.floor(Math.random() * sides) + 1;
	  console.log(randomNumber);
	}
}