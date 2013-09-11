'use strict';

angular.module('gaurillaApp')
  .controller('BlameCtrl', function ($scope) {
  	$scope.state = true;
  	$scope.name = 'Mr Prime Minister';

    $scope.toggleState = function() {
    	$scope.state = ! $scope.state;
    }
  });
