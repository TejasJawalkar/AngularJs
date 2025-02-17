import { IScope } from "angular";
import { CartService } from "../services/cart.service";
import { ICartData } from "../interfaces/ICartData";

interface ICustomScope extends IScope{
    crt:cartController
}


export class cartController{
    static $inject=["$scope","CartService"];
    data:string="Cart Data"
    TotalAmount:number=0;
    cartData:ICartData[]=[];
    constructor(private $scope:ICustomScope,private CartService:CartService) {
        this.getCartData();
        $scope["crt"]=this;
    }


    getCartData()
    {
        this.cartData= this.CartService.getCartData();
        this.cartData.forEach(element => {
            this.TotalAmount+=element.TotalPrice;
        });
    }

    getCartDatas()
    {
        this.cartData= this.CartService.getCartData();
    }


    RemoveItemFromCart(item:ICartData)
    {
        this.TotalAmount-=item.TotalPrice;
        this.CartService.RemoveCartItem(item.cartId.toString());
        this.getCartDatas();
    }

}