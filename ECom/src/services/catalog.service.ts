import * as angular from "angular";

export interface IProduct{
    id: number,
    name:string,
    category: string,
    price: number,
    description: string,
    image: string,
    rating:number,
    availability: string
}

export class CatalogServices {
    
    static $inject=["$http","$window"];
    service:string="http://localhost:8000/"

    constructor(private $http:angular.IHttpService,private $window:angular.IWindowService) {
    }

    getCatalogData() {
        // This will specifies the api response
         return this.$http.get<{ data: IProduct[], message: string, status: number }>(this.service+'products')  // Or your actual API URL
        .then((response: angular.IHttpResponse<{ data: IProduct[], message: string, status: number }>) => {
            return response.data.data;  // Extracts only the product data
        });
    }

    addproductinlocalstoare(product:IProduct[]):void
    {
        this.$window.sessionStorage.setItem("ProductList",JSON.stringify([product]));
    }

    getproductlocalstorage(): IProduct[] {
        // Get the products list stored in localStorage
        const productsList = this.$window.sessionStorage.getItem("ProductList");
    
        if (productsList) {
            // Parse the stored JSON string into an array
            const parsedData: IProduct[] | IProduct[][] = JSON.parse(productsList);
    
            // Check if the parsed data is a nested array (array of arrays)
            if (Array.isArray(parsedData) && Array.isArray(parsedData[0])) {
                // Flatten the array manually (concatenating all subarrays into a single array)
                return ([] as IProduct[]).concat.apply([], parsedData);
            }
    
            // Return the data if it's already a flat array
            return parsedData as IProduct[];
        }
    
        // Return an empty array if no products are found in localStorage
        return [];
    }
    
}