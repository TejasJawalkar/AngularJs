import { IScope } from "angular";
import { CatalogServices, IProduct } from "../services/catalog.service";

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
                    this.catalogServices.addproductinlocalstoare(this.products)
                })
                .catch((error) => {
                    console.error('Error fetching product data:', error);
                    this.productMessage = 'Failed to load products. Please try again later.';  // Show error message if fetch fails
                });
        }
    }
}