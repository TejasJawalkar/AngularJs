import { CatalogServices } from "./catalog.service"

export interface cartItems{
    id: number,
    name:string,
    price: number,
    image: string
}

export class CartService{

    static $inject=["$scope","CatalogServices"];

    constructor(private catlogService:CatalogServices) {
        
    }

    products=[];
    cart=[];

    addtocart(){
        
    }
}