import { IScope } from "angular"
import { AuthService } from "../services/auth.service";

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
    status:boolean=false;

    //To convert the typescript into javascript we use the $scope
    static $Inject = ["AuthService"];

    constructor(private $scope: ICustomScope,private authService:AuthService) {
        $scope["lg"] = this;
    }

    onValidate(user)
    {
        this.authService.validate(user).then((res)=>{
            this.status= res.data as boolean;
        }).catch((e)=>{
            console.log(e.message);
        });
    }
}