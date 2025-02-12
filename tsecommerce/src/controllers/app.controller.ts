import angular from "angular";

interface ICustomScope extends angular.IScope{
    vm:any
}

export class appController {
    static $inject=['$scope'];
    message:String;
    
    constructor(private $scope : ICustomScope) {
        this.message="Hello User";
        this.$scope["vm"] = this;
    }
    
}