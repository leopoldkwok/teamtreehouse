function getRandomNumber() {
  var randomNumber = Math.floor( Math.random() * 6 ) + 1;
  return randomNumber;
}

alert(getRandomNumber());
console.log(getRandomNumber());
var dieRoll = getRandomNumber();