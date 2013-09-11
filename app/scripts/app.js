'use strict';

angular.module('gaurillaApp', [])
.config(function ($routeProvider) {
	$routeProvider
	.when('/blame', {
		templateUrl: 'views/blame.html',
		controller: 'BlameCtrl'
	})
	.when('/praise', {
		templateUrl: 'views/praise.html',
		controller: 'PraiseCtrl'
	})
	.otherwise({
		redirectTo: '/blame'
	});
});
