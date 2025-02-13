var authController = /** @class */ (function () {
    function authController($scope) {
        this.$scope = $scope;
        this.message = "Login";
        $scope["lg"] = this;
    }
    //To convert the typescript into javascript we use the $scope
    authController.$Inject = ["CatalogServices"];
    return authController;
}());

