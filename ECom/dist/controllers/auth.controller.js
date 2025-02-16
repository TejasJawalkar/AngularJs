var authController = (function () {
    function authController($scope, AuthServices) {
        this.$scope = $scope;
        this.AuthServices = AuthServices;
        this.message = "Login";
        this.status = false;
        this.loginbtnstyle = {
            "backgroundColor": "#4CAF50",
            "color": "white",
            "padding": "10px 20px",
            "fontSize": "16px",
            "border": "none",
            'borderRadius': "5px",
            "cursor": "pointer"
        };
        $scope["lg"] = this;
    }
    authController.prototype.onValidate = function (user) {
        var _this = this;
        this.AuthServices.validate(user).then(function (isValid) {
            _this.status = isValid;
            console.log(isValid);
            if (_this.status) {
                debugger;
                _this.AuthServices.setsessionforauth(user);
            }
        }).catch(function (ex) {
            _this.status = false;
        });
    };
    authController.$Inject = ["$scope", "AuthService"];
    return authController;
}());

