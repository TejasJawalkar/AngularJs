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
    

    static $inject=["$http"];
    service:string="http://localhost:8000/"

    constructor(private $http:angular.IHttpService) {

    }

    getCatalogData() {
        return this.$http.get<IProduct[]>(this.service+"/products");
    }
}