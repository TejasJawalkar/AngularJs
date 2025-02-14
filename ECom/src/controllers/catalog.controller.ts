import { IScope } from "angular";
import { CatalogServices,IProduct } from "../services/catalog.service";

interface ICustomScope extends IScope{
    vm:catalogController
}

export class catalogController
{
    static $inject=["$scope","CatalogServices"];
    productMessage:string;
    products:IProduct[]=[];
   
    constructor(private $scope: ICustomScope,private catalogServices:CatalogServices) {
        this.getProductList()
        $scope["vm"]=this;
    }

     getProductList(){
        this.catalogServices.getCatalogData().then((res)=>{
            console.log(res);
            this.products=res.data;
        }).catch((ex)=>{
            console.log(ex.message)
        });
    }

    viewProduct(product:any)
    {

    }
}