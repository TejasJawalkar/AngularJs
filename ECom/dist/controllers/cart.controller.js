var cartController = (function () {
    function cartController($scope, cartService) {
        this.$scope = $scope;
        this.cartService = cartService;
        $scope["crt"] = this;
    }
    cartController.prototype.addtocart = function (id) {
    };
    cartController.$inject = ["$scope", "CartService"];
    return cartController;
}());

