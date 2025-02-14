var MainController = (function () {
    function MainController($scope) {
        this.$scope = $scope;
        this.$scope["mn"] = this;
    }
    MainController.$inject = ["$scope"];
    return MainController;
}());

