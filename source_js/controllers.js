/* Sample Controller */
app.controller('demoController', ['$scope', '$http', function($scope,$http) {
	$scope.myName = "Matthew Ly";

	$scope.classdata = {
		"title": "CS498RK",
		"names": ["matthew", "annie", "biplab", "devin"]
	}

	$scope.change = function() {
		$scope.classdata.names.push($scope.inputValue);
		$scope.inputValue = "";
	}

	$http.get('data/imdb250.json').success(function(data) {
		$scope.oldStaff = data;
		console.log(data);
	}).error(function (err) {
		console.log(err);
	});
}]);

app.controller('demoTwoController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$scope.myRank = $routeParams.rank;
}]);