angular.module('PalindromeApp').controller('WelcomeController', ['$scope', '$location', function ($scope, $location){ 
 	$scope.message ="This is the Welcome View"
	console.log("inside WelcomeController")
		$scope.continueToSecond = function() {
		$location.path('/second');
	};
}]);