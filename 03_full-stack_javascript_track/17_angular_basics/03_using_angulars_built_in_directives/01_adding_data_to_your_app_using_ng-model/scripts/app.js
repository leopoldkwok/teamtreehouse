angular.module("todoListApp", [])
  .controller('mainCtrl', function($scope) {
    $scope.helloWorld = function() {
      console.log("Hello there! This is the helloWorld controller function, in the mainCtrl!");
    };
  });