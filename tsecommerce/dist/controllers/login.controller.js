var LoginController = /** @class */ (function () {
    function LoginController($scope) {
        this.$scope = $scope;
        this.status = false;
        this.user = {
            email: "",
            password: ""
        };
        this.$scope["lg"] = this;
    }
    LoginController.prototype.validate = function () {
        if (this.user.email == "tejas@gmail.com" && this.user.password == "1212") {
            this.status = true;
        }
    };
    LoginController.$inject = ["$scope"];
    return LoginController;
}());

