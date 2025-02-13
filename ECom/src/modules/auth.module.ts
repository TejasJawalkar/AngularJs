import { authController } from "../controllers/auth.controller"
import * as angular from 'angular';
angular.module("authModule",[]).controller("AuthController",authController)