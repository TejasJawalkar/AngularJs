var cartController = (function () {
    function cartController($scope, CartService) {
        this.$scope = $scope;
        this.CartService = CartService;
        this.data = "Cart Data";
        this.TotalAmount = 0;
        this.cartData = [];
        this.getCartData();
        $scope["crt"] = this;
    }
    cartController.prototype.getCartData = function () {
        var _this = this;
        this.cartData = this.CartService.getCartData();
        this.cartData.forEach(function (element) {
            _this.TotalAmount += element.TotalPrice;
        });
    };
    cartController.prototype.getCartDatas = function () {
        this.cartData = this.CartService.getCartData();
    };
    cartController.prototype.RemoveItemFromCart = function (item) {
        this.TotalAmount -= item.TotalPrice;
        this.CartService.RemoveCartItem(item.cartId.toString());
        this.getCartDatas();
    };
    cartController.$inject = ["$scope", "CartService"];
    return cartController;
}());

