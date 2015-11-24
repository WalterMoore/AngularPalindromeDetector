angular.module('PalindromeApp').controller('WelcomeController', ['$scope', '$location', function ($scope, $location, Data){ 
 	$scope.message ="This is the Welcome View"
	console.log("inside WelcomeController")
	
		$scope.forwardWord = '';
		
    	$scope.$watch('forwardWord', function (newValue, oldValue) {
        	if (newValue !== oldValue) Data.setForwardWord(newValue);
    	});				
		
		$scope.continueToSecond = function() {
		$location.path('/second');
	};
}]);