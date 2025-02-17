import { ICart } from "../interfaces/ICart";
import { ICartData } from "../interfaces/ICartData";
import { IProduct } from "../interfaces/IProduct";
import { } from "./catalog.service"
import * as angular from "angular"

export class CartService {

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
        let sessionCart = localStorage.getItem("CartItems");
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
            localStorage.setItem("CartItems", JSON.stringify(cart));
    
            return true; // Successfully added the item to the cart
        }
    }
    
    
    CalculatePrice(price: number, qty: number) {
        return price * qty;
    }

    RemoveCartItem(item:ICartData)
    {
        
    }
    
}