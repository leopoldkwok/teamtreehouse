angular.module("todoListApp", [])
  .controller('mainCtrl', function($scope) {
    $scope.learningNgChange = function() {
      console.log("An input changed!");
    };

    $scope.todos = [
      {"name": "clean the house"},
      {"name": "water the dog"},
      {"name": "feed the lawn"},
      {"name": "pay dem bills"},
      {"name": "run"},
      {"name": "swim"},
    ]

  });