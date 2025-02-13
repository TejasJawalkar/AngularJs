var catalogController = /** @class */ (function () {
    function catalogController($scope, catalogServices) {
        this.$scope = $scope;
        this.catalogServices = catalogServices;
        this.products = [];
        this.getProductList();
        $scope["vm"] = this;
    }
    catalogController.prototype.getProductList = function () {
        this.products = this.catalogServices.getCatalogData();
    };
    catalogController.$inject = ["$scope", "CatalogServices"];
    return catalogController;
}());

