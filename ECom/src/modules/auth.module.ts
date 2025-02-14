import { authController } from "../controllers/auth.controller"
import * as angular from 'angular';
import { AuthService } from "../services/auth.service";
angular.module("authModule",[])
    .controller("AuthController",authController)
    .service("AuthService",AuthService);