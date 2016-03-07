var app = angular.module('mp3',['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/gallery', {
			templateUrl : 'partials/gallery.html',
			controller: 'demoController'
		})
		.when('/list/:rank', {
			templateUrl : 'partials/list.html',
			controller : 'demoTwoController'
		})
		.otherwise({ // if url doesn't exist, go to /gallery
			redirectTo: '/gallery'
		});
})
