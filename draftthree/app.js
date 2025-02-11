//1. Define Angularjs module
   //|- [] to create dependency {if module need logic of some other module}

var app=angular.module("loginModule",[])
app.controller("loginController",function($scope){

    //defining model
    $scope.user={
        email:"xyz@gmail.com",
        password:"1234"
    }

    $scope.valiate=function(){
        if($scope.user.email=="xyz@gmail.com" && $scope.user.password=="1234")
        {
            console.log("Welcome User");
        }
        else
        {
            console.log("Login Failed");
        }
    }
})