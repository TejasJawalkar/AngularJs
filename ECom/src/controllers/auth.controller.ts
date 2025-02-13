import { IScope } from "angular"

interface ICustomScope extends IScope {
    lg: authController
}

interface Iuser {
    userName: string,
    password: string
}

export class authController {
    user: Iuser;
    message: string = "Login";
 

    //To convert the typescript into javascript we use the $scope
    static $Inject = ["CatalogServices"];

    constructor(private $scope: ICustomScope) {
        
        $scope["lg"] = this;
    }




}