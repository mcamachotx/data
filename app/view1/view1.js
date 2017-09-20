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
    method: 'JSONP',
    url: url
  }).then(function(response){
    data = response.data;
    console.log('hello');
  },function(response){
    data = response;
    console.log(response);
  });

  console.log(data);
  console.log('hello');

  $scope.testString = data;
}]);