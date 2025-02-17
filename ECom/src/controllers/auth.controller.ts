import { ILocationProvider, ILocationService, IScope } from "angular"
import { AuthServices } from "../services/auth.service";
import {IUser} from "../interfaces/IUser"

interface ICustomScope extends IScope {
    lg: authController
}

export class authController {
    user: IUser;
    message: String = "Login";
    status:Boolean=false;

    formAlign={
        "width": "25%",
        "position":" relative"
    }

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
    static $Inject = ["$scope","$location","AuthService"];

    constructor(private $scope: ICustomScope,private $location:ILocationService,private AuthServices:AuthServices) 
    {
        this.status=this.checkLogin()
        if(this.status)
        {
            $location.url("/products")
        }
        else{
            $location.url("/login")
        }
        $scope["lg"] = this;
    }

    onValidate(user:IUser)
    {
        this.AuthServices.validate(user).then((isValid:Boolean)=>{
            this.status=isValid;
            if(this.status)
            {
                this.AuthServices.setsessionforauth(user);
                this.$location.url("/products")          
            }
        }).catch((ex)=>{
            this.status=false;
        })
    }

    checkLogin()
    {
        return this.AuthServices.checkisLogged()
    }
}