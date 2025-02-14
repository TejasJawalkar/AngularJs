import { IScope } from "angular";
import { CartService } from "../services/cart.service";

interface ICustomScope extends IScope{
    crt:cartController
}


export class cartController{
    static $inject=["$scope","CartService"];
    constructor(private $scope:ICustomScope,private cartService:CartService) {
        $scope["crt"]=this;
    }

    addtocart(id:number){

    }
}