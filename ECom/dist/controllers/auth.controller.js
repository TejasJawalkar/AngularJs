var authController = (function () {
    function authController($scope, $location, AuthServices) {
        this.$scope = $scope;
        this.$location = $location;
        this.AuthServices = AuthServices;
        this.message = "Login";
        this.data = "Data";
        this.formAlign = {
            "width": "25%",
            "position": " relative"
        };
        this.loginbtnstyle = {
            "backgroundColor": "#4CAF50",
            "color": "white",
            "padding": "10px 20px",
            "fontSize": "16px",
            "border": "none",
            'borderRadius': "5px",
            "cursor": "pointer"
        };
        if (this.checkLogin()) {
            $location.url("/products");
        }
        else {
            $location.url("/login");
        }
        $scope["lg"] = this;
    }
    authController.prototype.onValidate = function (user) {
        var _this = this;
        this.AuthServices.validate(user).then(function (isValid) {
            _this.status = isValid;
            if (_this.status) {
                _this.AuthServices.setsessionforauth(user);
                _this.$location.url("/products");
            }
            else {
                _this.status = false;
            }
        }).catch(function (ex) {
            _this.status = false;
        });
    };
    authController.prototype.checkLogin = function () {
        return this.AuthServices.checkisLogged();
    };
    authController.$Inject = ["$scope", "$location", "AuthService"];
    return authController;
}());

