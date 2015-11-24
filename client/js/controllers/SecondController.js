angular.module('PalindromeApp').controller('SecondController', ['$scope', '$location','$routeParams', function ($scope, $location, $routeParams){
	 	$scope.message = "This is the Second View"
		console.log("Inside the SecondController");
		
	 
		$scope.forwardWord = $routeParams.forwardWord;
		
		$scope.returnToWelcome = function() {
		$location.path('/welcome');
	};
 }]);