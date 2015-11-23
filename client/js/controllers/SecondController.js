angular.module('PalindromeApp').controller('SecondController', ['$scope', '$location', function ($scope, $location){
	 	$scope.message = "This is the Second View"
		console.log("Inside the SecondController");
		$scope.returnToWelcome = function() {
		$location.path('/welcome');
	};
 }]);