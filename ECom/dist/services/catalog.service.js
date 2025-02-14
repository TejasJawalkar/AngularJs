var CatalogServices = /** @class */ (function () {
    function CatalogServices($http) {
        this.$http = $http;
        this.service = "http://localhost:8000/";
    }
    CatalogServices.prototype.getCatalogData = function () {
        return this.$http.get(this.service + "/products");
    };
    CatalogServices.$inject = ["$http"];
    return CatalogServices;
}());

