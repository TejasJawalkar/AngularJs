import * as angular from "angular"
import { ProductDetailsController } from "../controllers/productDetails.controller"
import { CatalogServices } from "../services/catalog.service"


angular.module("ProductDetailsModule",[])
    .controller("ProductDetailsController",ProductDetailsController)
    .service("CatalogServices",CatalogServices)