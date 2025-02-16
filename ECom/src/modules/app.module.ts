import * as angular from "angular"

const appModule=angular.module
(
    "MyEcomApplication",
    [
        'ngRoute',
        'catalogModule',
        'authModule',
        'CartModule',
        'ProductDetailsModule',
    ]
);
appModule.config(['$routeProvider', ($routeProvider:any) => 
    {
    $routeProvider
    .when("/products",{
        templateUrl:"src/views/catalog.html",
        controller:"CatalogController"
    })
    .when("/login",{
        templateUrl:"src/views/auth.html",
        controller:"AuthController"
    })
    .when("/product/:id",{
        templateUrl:"src/views/productDetails.html",
        controller:"ProductDetailsController"
    })
    .otherwise({
        redirectTo:"products"
    })
}]);

// appModule.controller("AuthController",authController)
// appModule.controller("CatalogController",catalogController)