var url = '/employees.php';
var data = {
  firstName : "Dave",
  lastName: "McFarland"
};

var callback = function(response) {
  // do something with the response
};

$.get('/employees.php', {
  firstName : "Dave",
  lastName: "McFarland"
}, function(response) {
  // do something with the response
};);

