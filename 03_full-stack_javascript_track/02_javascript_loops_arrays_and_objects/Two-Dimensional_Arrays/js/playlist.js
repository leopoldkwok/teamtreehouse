var playlist = [
	['I Did It My Way', 'Frank Sinatra'],
	['Respect', 'Arentha Franklin'],
	['Imagine', 'John Lennon'],
	['Born to Run', 'Bruce Springsteen'],
	['Louie Louie', 'The Kingsmen'],
	['Maybellene', 'Chuck Berry']
];


function print(message) {
	document.write('<p>' + message + '</p>');
}

function printSongs(songs) {
	var listHTML = '<ol>';
	for (var i = 0; i < songs.length; i +=1) {
		listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] +  '</li>';
	}
	listHTML += '</ol>';
	print(listHTML);
}

printSongs(playlist);