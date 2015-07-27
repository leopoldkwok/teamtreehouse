var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if(xhr.readystate === 4) {
		var employees = JSON.parse(xhr.responseText);
    console.log(employees);
	}
};
xhr.open('GET', 'data/employees.json');
xhr.send();