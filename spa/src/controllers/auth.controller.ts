export class AuthController{
    static $inject=["$scope"];

    message:string="";
   
    constructor() {
        this.message="Login Page"
    }
}