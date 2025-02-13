import * as angular from "angular";
import {AuthController} from "./controllers/auth.controller";

const appModule = angular.module('EcomSite', ['ngRoute']);

// Configure routing with the $routeProvider
appModule.config(['$routeProvider', ($routeProvider:any) => {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/auth.component.html',  // Template for the home route
        controller: 'auth.controller',  // Controller for the home route
      })
      .when('/login', {
        redirectTo: 'login' 
      })
      .otherwise({
        redirectTo: 'login'  // Default route is home
      });
  }]);

  appModule.controller("authController",AuthController);

export default appModule;