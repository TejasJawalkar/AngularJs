import * as angular from "angular";

export class AuthService{
    static $inject=["$http"];
    service:string="http://localhost:8000/"
    
    constructor(private $http:angular.IHttpService) {   
    }

    validate(userData:any)
    {
        return this.$http.post(this.service+"login",userData);
    }
}