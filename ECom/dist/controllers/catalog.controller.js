var catalogController = /** @class */ (function () {
    function catalogController($scope, catalogServices) {
        this.$scope = $scope;
        this.catalogServices = catalogServices;
        this.products = [];
        this.getProductList();
        $scope["vm"] = this;
    }
    catalogController.prototype.getProductList = function () {
        var _this = this;
        this.catalogServices.getCatalogData()
            .then(function (res) {
            _this.products = res.data;
        }).catch(function (ex) {
        });
    };
    catalogController.prototype.viewProduct = function (product) {
    };
    catalogController.$inject = ["$scope", "CatalogServices"];
    return catalogController;
}());

