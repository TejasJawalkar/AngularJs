import { ICart } from "../interfaces/ICart";
import { ICartData } from "../interfaces/ICartData";
import { IProduct } from "../interfaces/IProduct";
import { } from "./catalog.service"
import * as angular from "angular"

export class CartService 
{

    static $inject = ["$location"];
    count: number = 1;

    cart: ICart[] = [];
    cartData:ICartData[]=[]

    constructor() {
    }

    getCartData():ICartData[] {
        let sessioncart=localStorage.getItem("CartItems");
        if(sessioncart)
        {
            return JSON.parse(sessioncart);
        }
        return this.cartData=[];
    }

    IncreaseQuantityInCart() {

    }

    AddToCart(item: IProduct) {
        // Get cart items from localStorage, default to an empty array if none exists
        let sessionCart = this.getcartfromlocalstorage();
        let cart = sessionCart ? JSON.parse(sessionCart) : [];
    
        // Check if item already exists in the cart
        let itemExists = cart.find((data) => data.ProductId.toString() === item.id.toString());
    
        if (itemExists) {
            return false; // Item already exists, do nothing
        } else {
            // Create new cart item
            const mycart = {
                cartId: cart.length + 1, // Generate new cart ID
                ProductId: item.id,
                Quantity: 1,
                Price: item.price,
                TotalPrice: this.CalculatePrice(item.price, 1), // Calculate total price
                product: item // Store the full product data
            };
    
            // Add the new item to the cart
            cart.push(mycart);
    
            // Save the updated cart back to localStorage
            this.setcartinlocalstorage(cart)

            return true; // Successfully added the item to the cart
        }
    }

    setcartinlocalstorage(cart:ICartData[])
    {
        localStorage.setItem("CartItems", JSON.stringify(cart));
    }

    getcartfromlocalstorage()
    {
        return localStorage.getItem("CartItems");
    }
    
    
    CalculatePrice(price: number, qty: number) {
        return price * qty;
    }

    RemoveCartItem(id: string) 
    {
        let sessioncart = this.getcartfromlocalstorage();;
        let cart = sessioncart ? JSON.parse(sessioncart) : [];
        // Find the index of the item to remove
        const index = cart.findIndex((data) => data.cartId.toString() === id);
        console.log(index);
        cart.splice(index, 1);
        this.setcartinlocalstorage(cart);
    }
}