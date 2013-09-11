'use strict';

angular.module('gaurillaApp')
.controller('PraiseCtrl', function ($scope) {
	$scope.state = true;
	$scope.name = 'Sir Dennis Ritchie';

	$scope.toggleState = function() {
		$scope.state = ! $scope.state;
	}
});
