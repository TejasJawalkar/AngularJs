import angular from "angular";
import { CatalogServices, IProduct } from "../services/catalog.service";

export interface ICustomScope extends angular.IScope
{
    pdm:ProductDetailsController
}

export class ProductDetailsController
{
    product:IProduct[]=[]
    filterredProduct:IProduct;
    id:Number=0;
    static $inject=["$scope","$routeParams","CatalogServices"]
    
    constructor(private $scope:ICustomScope,private $routeParams:any,private catalogServices:CatalogServices) {      
        debugger;
        this.id=$routeParams.id;
        this.viewProduct(this.id);
        $scope["pdm"]=this
    }

    viewProduct(productId: Number): IProduct | undefined {
        debugger;
        // Get the product list from session storage
        this.product = this.catalogServices.getproductlocalstorage();
    
        if (this.product.length !== 0) {
            // Use a for loop to find the product by id
            for (let i = 0; i < this.product.length; i++) {
                if (this.product[i].id == productId) {
                    // Use push to add the found product to the filtered array
                    this.filterredProduct=this.product[i];
                    console.log(this.filterredProduct)
                    return this.filterredProduct[0];  // Return the found product immediately
                }
            }
        }
        return undefined;  // If no product is found, return undefined
    }

    AddToCart(Item:IProduct)
    {
        
    }
}