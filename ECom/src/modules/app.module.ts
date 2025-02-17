import * as angular from "angular"
import { AuthServices } from "../services/auth.service";
import { MainController } from "../controllers/main.controller";
import { CartService } from "../services/cart.service";

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
    .when("/cart",{
        templateUrl:"src/views/cart.html",
        controller:"CartController"
    })
    .otherwise({
        redirectTo:"products"
    })
}]);

appModule.controller("MainController",MainController)
appModule.service("AuthServices",AuthServices)
appModule.service("CartService",CartService)

// appModule.controller("AuthController",authController)
// appModule.controller("CatalogController",catalogController)