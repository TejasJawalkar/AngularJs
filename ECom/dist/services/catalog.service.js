var CatalogServices = (function () {
    function CatalogServices($http, $window) {
        this.$http = $http;
        this.$window = $window;
        this.service = "http://localhost:8000/";
    }
    CatalogServices.prototype.getCatalogData = function () {
        return this.$http.get(this.service + 'products')
            .then(function (response) {
            return response.data.data;
        });
    };
    CatalogServices.prototype.addproductinlocalstoare = function (product) {
        this.$window.sessionStorage.setItem("ProductList", JSON.stringify([product]));
    };
    CatalogServices.prototype.getproductlocalstorage = function () {
        var productsList = this.$window.sessionStorage.getItem("ProductList");
        if (productsList) {
            var parsedData = JSON.parse(productsList);
            if (Array.isArray(parsedData) && Array.isArray(parsedData[0])) {
                return [].concat.apply([], parsedData);
            }
            return parsedData;
        }
        return [];
    };
    CatalogServices.$inject = ["$http", "$window"];
    return CatalogServices;
}());

