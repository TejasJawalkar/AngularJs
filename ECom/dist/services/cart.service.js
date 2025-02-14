var CartService = (function () {
    function CartService(catlogService) {
        this.catlogService = catlogService;
        this.products = [];
        this.cart = [];
    }
    CartService.prototype.addtocart = function () {
    };
    CartService.$inject = ["$scope", "CatalogServices"];
    return CartService;
}());

