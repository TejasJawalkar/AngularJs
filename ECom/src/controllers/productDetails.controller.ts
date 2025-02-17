import angular from "angular";
import { CatalogServices } from "../services/catalog.service";
import { IProduct } from "../interfaces/IProduct"
import { CartService } from "../services/cart.service";

export interface ICustomScope extends angular.IScope {
    pdm: ProductDetailsController
}

export class ProductDetailsController {
    product: IProduct[] = [];
    ProductData;
    cartSaveStatus:boolean;
    filterredProduct: IProduct;


    id: number = 0;
    static $inject = ["$scope", "$routeParams", "CatalogServices","CartService"]

    constructor(private $scope: ICustomScope, private $routeParams: any, private catalogServices: CatalogServices,private cartService:CartService) {
        this.id = $routeParams.id;
        this.viewProduct(this.id);
        $scope["pdm"] = this
    }

    viewProduct(productId: Number) {
        //#region OldCode
        // debugger;
        // // Get the product list from session storage
        // this.product = this.catalogServices.getproductlocalstorage();

        // if (this.product.length !== 0) {
        //     // Use a for loop to find the product by id
        //     for (let i = 0; i < this.product.length; i++) {
        //         if (this.product[i].id == productId) {
        //             // Use push to add the found product to the filtered array
        //             this.filterredProduct=this.product[i];
        //             console.log(this.filterredProduct)
        //             return this.filterredProduct[0];  // Return the found product immediately
        //         }
        //     }
        // }
        // return undefined;  // If no product is found, return undefined
        //#endregion

        //#region NewCode
        this.catalogServices.getProductById(this.id).then((productData: IProduct[]) => {

            if (productData && productData.length > 0) {
                for (let i = 0; i < productData.length; i++) {
                    if(productData[i].id.toString()===this.id.toString())
                    {
                        this.filterredProduct=productData[i];
                    }
                }
            }
        })
        //#endregion
    }

    AddToCart(item:IProduct)
    {
        this.cartSaveStatus=this.cartService.AddToCart(item);
    }
}