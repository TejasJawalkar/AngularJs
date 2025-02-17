var MainController = (function () {
    function MainController($scope, $location, authServices, cartService, $timeout) {
        this.$scope = $scope;
        this.$location = $location;
        this.authServices = authServices;
        this.cartService = cartService;
        this.$timeout = $timeout;
        this.getAuthenticationStatus();
    }
    MainController.prototype.getCoundofCart = function () {
    };
    MainController.prototype.getAuthenticationStatus = function () {
        this.status = this.authServices.checkisLogged();
        if (!this.$scope.$root.$$phase) {
            this.$scope.$apply();
        }
    };
    MainController.prototype.checkStatus = function () {
        this.getAuthenticationStatus();
        return this.status;
    };
    MainController.prototype.logout = function () {
        var _this = this;
        this.authServices.removeSessions();
        this.checkStatus();
        this.$timeout(function () {
            _this.$location.url("/products");
        });
    };
    MainController.$inject = ["$scope", "$location", "AuthServices", "$timeout", "CartService"];
    return MainController;
}());

