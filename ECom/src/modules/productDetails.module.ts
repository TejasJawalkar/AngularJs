import * as angular from "angular"
import { ProductDetailsController } from "../controllers/productDetails.controller"
import { CatalogServices } from "../services/catalog.service"
import { CartService } from "../services/cart.service"


angular.module("ProductDetailsModule",[])
    .controller("ProductDetailsController",ProductDetailsController)
    .service("CatalogServices",CatalogServices)
    .service("CartService",CartService)