
var appModule = angular.module('EcomSite', ['ngRoute']);
// Configure routing with the $routeProvider
appModule.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/login', {
            templateUrl: 'views/auth.component.html', // Template for the home route
            controller: 'auth.controller', // Controller for the home route
        })
            .when('/login', {
            redirectTo: 'login'
        })
            .otherwise({
            redirectTo: 'login' // Default route is home
        });
    }]);
appModule.controller("authController", AuthController);
