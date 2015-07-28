$(document).ready(function() {
	var url="../data/employees.json";
	$.getJSON(url, function(response) {
		var statusHTML = '<ul class="bulleted">';
		$.each(response, function(index, employee) {
			if(employee.inoffice === true) {
				statusHTML +='<li class="in">';
			}	else {
				statusHTML +='<li class="out">';
			}
			statusHTML += employee.name + '</li>';
		});
		statusHTML += '</ul>';
		$('#employeeList').html(statusHTML);
	}); // end getJSON
}); // end ready





// var xhr = new XMLHttpRequest();
// xhr.open('GET', '../data/employees.json');
// xhr.onreadystatechange = function () {
//   if(xhr.readyState === 4 && xhr.status === 200) {
//     var employees = JSON.parse(xhr.responseText);
//     var statusHTML = '<ul class="bulleted">';
//     for (var i=0; i<employees.length; i += 1) {
//       if (employees[i].inoffice === true) {
//         statusHTML += '<li class="in">';
//       } else {
//         statusHTML += '<li class="out">';
//       }
//       statusHTML += employees[i].name;
//       statusHTML += '</li>';
//     }
//     statusHTML += '</ul>';
//     document.getElementById('employeeList').innerHTML = statusHTML;
//   }
// };
// xhr.send();