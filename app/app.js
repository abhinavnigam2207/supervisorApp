'use strict';

angular.module('directives',[]);
var supervisorApp = angular.module('supervisorApp', [
	'ngRoute',
	'directives',
	'supervisorApp.version'
	]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	
	$routeProvider.otherwise({redirectTo: '/dashboard'});
	$routeProvider.when('/dashboard', {
		templateUrl: 'modules/dashboard/dashboard.html',
		controller: 'DashBoardCtrl'
	});

}])
.run(['$rootScope', function($rootScope){
	
	$rootScope.today = new Date();
	
}]);
