
var appModule = angular.module("MyEcomApplication", ['ngRoute', 'catalogModule', 'authModule', 'CartModule', 'ProductDetailsModule']);
appModule.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when("/products", {
            templateUrl: "src/views/catalog.html",
            controller: "CatalogController"
        })
            .when("/login", {
            templateUrl: "src/views/auth.html",
            controller: "AuthController"
        })
            .when("/product/:id", {
            templateUrl: "src/views/productDetails.html",
            controller: "ProductDetailsController"
        })
            .otherwise({
            redirectTo: "products"
        });
    }]);
