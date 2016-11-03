angular.module('todoListApp')
  .directive('helloWorld', function() {
    return {
      template: "This is the hello world directive!",
      restrict: "E"
    }
  });