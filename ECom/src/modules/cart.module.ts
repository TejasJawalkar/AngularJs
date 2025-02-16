import * as angular from "angular"
import { cartController } from "../controllers/cart.controller"
import { CartService } from "../services/cart.service"
import { CatalogServices } from "../services/catalog.service"

angular.module("CartModule",[]).controller("CartController",cartController)
.service("CartService",CartService)