var catalogController = (function () {
    function catalogController($scope, catalogServices) {
        this.$scope = $scope;
        this.catalogServices = catalogServices;
        this.products = [];
        this.getProductList();
        $scope["vm"] = this;
    }
    catalogController.prototype.getProductList = function () {
        var _this = this;
        this.products = this.catalogServices.getproductlocalstorage();
        if (this.products.length === 0) {
            this.catalogServices.getCatalogData()
                .then(function (products) {
                _this.products = products;
                _this.catalogServices.addproductinlocalstoare(_this.products);
            })
                .catch(function (error) {
                console.error('Error fetching product data:', error);
                _this.productMessage = 'Failed to load products. Please try again later.';
            });
        }
    };
    catalogController.$inject = ["$scope", "CatalogServices"];
    return catalogController;
}());

