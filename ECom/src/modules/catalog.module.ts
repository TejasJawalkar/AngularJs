import * as angular from 'angular';
import { catalogController } from '../controllers/catalog.controller';
import { CatalogServices } from '../services/catalog.service';
    angular.module("catalogModule",[])
        .controller("CatalogController",catalogController)
       
