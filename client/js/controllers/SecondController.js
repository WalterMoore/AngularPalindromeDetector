angular.module('PalindromeApp').controller('SecondController', ['$scope', '$location', function ($scope, $location, Data){
	 	$scope.message = "This is the Second View"
		console.log("Inside the SecondController");

    	$scope.$watch(function () { return Data.getForwardWord(); }, function (newValue, oldValue) {
        if (newValue !== oldValue) $scope.forwardWord = newValue;
    });

		
		// $scope.switchView = function(view){
		// 	$location.path(view);
		// };
		$scope.returnToWelcome = function() {
		$location.path('/welcome');
	};
 }]);