import { IScope } from "angular"
import { AuthServices } from "../services/auth.service";
import {IUser} from "../interfaces/IUser"

interface ICustomScope extends IScope {
    lg: authController
}

export class authController {
    user: IUser;
    message: String = "Login";
    status:Boolean=false;

    loginbtnstyle={
        "backgroundColor": "#4CAF50",
        "color": "white",
        "padding": "10px 20px", 
        "fontSize": "16px",
        "border": "none",
        'borderRadius': "5px",
        "cursor": "pointer"
    }

    //To convert the typescript into javascript we use the $scope
    static $Inject = ["$scope","AuthService"];

    constructor(private $scope: ICustomScope,private AuthServices:AuthServices) {
        
        
        $scope["lg"] = this;
    }

    onValidate(user:IUser)
    {
        this.AuthServices.validate(user).then((isValid:Boolean)=>{
            this.status=isValid;
            console.log(isValid);
            if(this.status)
            {
                debugger;
                this.AuthServices.setsessionforauth(user);
            }
        }).catch((ex)=>{
            this.status=false;
        })
    }
}