var authController = (function () {
    function authController($scope, authService) {
        this.$scope = $scope;
        this.authService = authService;
        this.message = "Login";
        this.status = false;
        $scope["lg"] = this;
    }
    authController.prototype.onValidate = function (user) {
        var _this = this;
        this.authService.validate(user).then(function (res) {
            _this.status = res.data;
        }).catch(function (e) {
            console.log(e.message);
        });
    };
    authController.$Inject = ["AuthService"];
    return authController;
}());

