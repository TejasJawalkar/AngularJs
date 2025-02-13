import { IScope } from "angular";
import { CatalogServices } from "../services/catalog.service";

interface ICustomScope extends IScope{
    vm:catalogController
}

export class catalogController
{
    static $inject=["$scope","CatalogServices"];
    productMessage:string;
    products:any[]=[];
   
    constructor(private $scope: ICustomScope,private catalogServices:CatalogServices) {
        this.getProductList()
        $scope["vm"]=this;
    }

    getProductList(){
        this.products=this.catalogServices.getCatalogData();
    }
}