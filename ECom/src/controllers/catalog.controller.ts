import { IScope } from "angular";
import { CatalogServices } from "../services/catalog.service";
import {IProduct} from "../interfaces/IProduct"

interface ICustomScope extends IScope {
    vm: catalogController
}

export class catalogController {
    static $inject = ["$scope", "CatalogServices"];
    productMessage: string;
    products: IProduct[] = [];

    constructor(private $scope: ICustomScope, private catalogServices: CatalogServices) {
        this.getProductList()
        $scope["vm"] = this;
    }

    getProductList() {
        this.products = this.catalogServices.getproductlocalstorage();
        if (this.products.length === 0) {
            this.catalogServices.getCatalogData()
                .then((products: IProduct[]) => {  // This directly gets the product array
                    this.products = products;
                })
                .catch((error) => {
                    console.error('Error fetching product data:', error);
                    this.productMessage = 'Failed to load products. Please try again later.';  // Show error message if fetch fails
                });
        }
    }
}