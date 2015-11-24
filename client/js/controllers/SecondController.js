angular.module('PalindromeApp').controller('SecondController', ['$scope', '$location','$routeParams', function ($scope, $location, $routeParams){

		console.log("Inside the SecondController");
		
	 
		$scope.forwardWord = $routeParams.forwardWord;
		
		$scope.reversedWord = "hey"
		
		$scope.returnToWelcome = function() {
		$location.path('/welcome');
	};
 }]);