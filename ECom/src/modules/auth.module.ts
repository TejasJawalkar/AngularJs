import * as angular from 'angular';
import { authController } from "../controllers/auth.controller"
import { AuthServices } from "../services/auth.service";
angular.module("authModule",[])
.controller("AuthController",authController)
.service("AuthServices",AuthServices);