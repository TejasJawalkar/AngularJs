import * as angular from "angular";
interface ICustomScope extends angular.IScope 
{
    lg:any
}

export class LoginController{
    static $inject=["$scope"]
    status:boolean=false;
    user=
    {
        email:"",
        password:""
    }
    constructor(private $scope:ICustomScope) {
        this.$scope["lg"]=this;
    }

    validate()
    {
        if(this.user.email=="tejas@gmail.com" && this.user.password=="1212")
        {
            this.status=true;
        }
    }
}