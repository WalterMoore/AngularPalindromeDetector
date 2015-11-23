var app = angular.module('PalindromeApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "WelcomeController",
      templateUrl: "views/welcome.html"
    })
    .when( /*'some_event*/, {
      controller: 'SecondController',
      templateUrl: 'views/second.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});