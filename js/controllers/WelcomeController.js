//change 'photos'

app.controller('WelcomeController', ['$scope', 'photos', function($scope, photos) {
  photos.success(function(data) {
    $scope.photos = data;
  });
}]);