angular.module('PalindromeApp').controller('WelcomeController', ['$scope', '$location', function ($scope, $location){ 
 	$scope.message ="This is the Welcome View"
	console.log("inside WelcomeController")
	
		$scope.forwardWord = "";
	
	
	
		
		$scope.continueToSecond = function() {
			$scope.forwardWord.toLowerCase();
			
		$location.path('/second/' + $scope.forwardWord);
	};
}]);