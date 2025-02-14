import * as angular from "angular"

export interface ICustomScope extends angular.IScope
{
    mn:MainController
} 

export class MainController
{
    static $inject=["$scope"]
    constructor(private $scope:ICustomScope) {
        this.$scope["mn"]=this
    }

    
}