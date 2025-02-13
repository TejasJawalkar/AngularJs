
var appModule = angular.module("MyEcomApplication", ['ngRoute', 'catalogModule', 'authModule']);
appModule.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when("/product", {
            templateUrl: "src/views/catalog.html",
            controller: "CatalogController"
        })
            .when("/login", {
            templateUrl: "src/views/auth.html",
            controller: "AuthController"
        })
            .otherwise({
            redirectTo: "product"
        });
    }]);
// appModule.controller("AuthController",authController)
// appModule.controller("CatalogController",catalogController)
