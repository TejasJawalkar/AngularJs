(function (){
    var app=angular.module("MyApplication",["ngRoute"])

    app.config(function($routeProvider){
        $routeProvider
        .when("/login",{
            templateUrl:"views/auth.html",
            controller:"auth.controller"
        })
        .when("/product",{
            templateUrl:"views/catlog.html",
            controller:"catlog.controller"
        })
        .otherwise("/",{
            templateUrl:"views/auth.html",
            controller:"auth.controller"
        })
    });
}());