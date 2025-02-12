import * as angular from "angular"
import {appController} from "../controllers/app.controller"; 
angular.module("MyApp",["catlogModule","authModule"]).controller('AppController',appController)