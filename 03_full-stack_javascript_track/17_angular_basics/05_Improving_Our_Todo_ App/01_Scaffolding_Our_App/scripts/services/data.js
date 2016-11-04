'use strict'

angular.module('todoListApp')
 .service('dataService', function($http) {
    this.helloConsole = function() {
      console.log("This is the data service's method!");
    };

    this.getTodos = function(callback) {
      $http.get('mock/todos.json')
    .then(callback)
    };

    this.deleteTodo = function(todo) {
      console.log("The " + todo.name + " todo has been deleted!");
      // other logic
    };

    this.saveTodo = function(todo) {
      console.log("The " + todo.name + " todo has been saved!");
      // other logic...
    };
});