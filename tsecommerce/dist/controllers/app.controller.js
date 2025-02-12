var appController = /** @class */ (function () {
    function appController($scope) {
        this.$scope = $scope;
        this.message = "Hello User";
        this.$scope["vm"] = this;
    }
    appController.$inject = ['$scope'];
    return appController;
}());

