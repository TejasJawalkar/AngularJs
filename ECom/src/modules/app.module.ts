import * as angular from "angular"
import { authController } from "../controllers/auth.controller";
import { catalogController } from "../controllers/catalog.controller";
import { MainController } from "../controllers/main.controller";

//

const appModule=angular.module("MyEcomApplication",['ngRoute','catalogModule','authModule','CartModule']);
appModule.config(['$routeProvider', ($routeProvider:any) => {
    $routeProvider
    .when("/product",{
        templateUrl:"src/views/catalog.html",
        controller:"CatalogController"
    })
    .when("/login",{
        templateUrl:"src/views/auth.html",
        controller:"AuthController"
    })
    .otherwise({
        redirectTo:"product"
    })
    
}]);



// appModule.controller("AuthController",authController)
// appModule.controller("CatalogController",catalogController)