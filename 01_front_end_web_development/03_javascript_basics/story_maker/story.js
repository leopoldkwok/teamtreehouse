var questions = 3;
var questionsLeft = '[' + questions + ' questions left]';
var adjective = prompt('Please type an adjective ' + questionsLeft);
questions -= 1;
questionsLeft = '[' + questions + ' questions left]';
var verb = prompt('Please type a verb' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var noun = prompt('Please type a noun ' + questionsLeft);
alert('All done. Ready for the message?');
var sentence = "<h2>There once was a " + adjective;


sentence += ' programmer who wanted to use Javascript to ' + verb;
sentence += ' the ' + noun + '.</h2>';
document.write(sentence);