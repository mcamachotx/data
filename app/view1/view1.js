'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http', function($scope, $http) {

  var url = "http://lobus.nlared.com/service.php";
  var data = '';


  $http({
    method: 'GET',
    url: url
  }).then(function(response){
    data = response.data;
    console.log(data);
  },function(response){
    data = response;
  });

  $scope.testString = data;
}]);