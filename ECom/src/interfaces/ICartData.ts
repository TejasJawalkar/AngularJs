import { IProduct } from "./IProduct";

export interface ICartData{
    cartId:number,
    ProductId:number,
    Quantity:number,
    Price:number,
    TotalPrice:number,
    product:IProduct    
}