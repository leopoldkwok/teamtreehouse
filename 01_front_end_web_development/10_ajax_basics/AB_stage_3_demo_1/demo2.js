var url ='/employees.php';
var data = {
	firstName : "Dave",
	lastname : "McFarland"
};
var callback = function(response){
	// do something with the response
};
$.get(/employees.php, {
	firstName : "Dave",
	lastname : "McFarland"
}, function(response){
	// do something with the response
});
