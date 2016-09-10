var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    // console.log(xhr.responseText);
    var employees = JSON.parse(xhr.responseText);
    console.log(employees);
  }
};
xhr.open('GET', 'data/employees.json');
xhr.send();

