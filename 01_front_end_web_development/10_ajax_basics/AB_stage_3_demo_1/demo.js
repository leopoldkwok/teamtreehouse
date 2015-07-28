var url ='/employees.php';
var data = {
	firstName : "Dave",
	lastname : "McFarland"
};
var callback = function(response){
	// do something with the response
};
$.get(url, data, callback);
