
app.controller('demoController', ['$scope', '$http', function($scope,$http) {

	$http.get('data/imdb250.json').success(function(data) {
		$scope.oldStaff = data;
	
	}).error(function (err) {
		console.log(err);
	});
}]);

app.controller('detailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$http.get('data/imdb250.json').success(function(data) {
		$scope.movie = data[$routeParams.rank - 1];
		console.log($scope.genres);
	}).error(function (err) {
		console.log(err);
	});
}]);

app.controller('galleryController', ['$scope', '$http', function($scope, $http) {
	$http.get('data/imdb250.json').success(function(data) {
		$scope.movies = data;
		$scope.selectedGenre = ""

	}).error(function (err) {
		console.log(err);
	});
}]);

app.controller('listController', ['$scope', '$http', function($scope, $http) {
	$http.get('data/imdb250.json').success(function(data) {
		$scope.movies = data;
	}).error(function (err) {
		console.log(err);
	});

	$scope.predicate = 'rank';
}]);