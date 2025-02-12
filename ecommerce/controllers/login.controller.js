var config = angular.module("authModule", []);
config.controller("loginController", function ($scope) {
    $scope.userCred = [{
        email: "",
        password: ""
    }]

    $scope.validate = function () {
       let status=authentication($scope.userCred.email,$scope.userCred.password);
       if(status)
       {

       }
       else
       {
        
       }
    }
})