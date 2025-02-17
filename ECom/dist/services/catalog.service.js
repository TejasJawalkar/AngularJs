var CatalogServices = (function () {
    function CatalogServices($http) {
        this.$http = $http;
        this.service = "http://localhost:8000/";
    }
    CatalogServices.prototype.getCatalogData = function () {
        return this.$http.get(this.service + 'products')
            .then(function (response) {
            return response.data.data;
        });
    };
    CatalogServices.prototype.addproductinlocalstoare = function (product) {
        sessionStorage.setItem("ProductList", JSON.stringify(product));
    };
    CatalogServices.prototype.getproductlocalstorage = function () {
        var productsList = sessionStorage.getItem("ProductList");
        if (productsList) {
            var parsedData = JSON.parse(productsList);
            if (Array.isArray(parsedData) && Array.isArray(parsedData[0])) {
                return [].concat.apply([], parsedData);
            }
            return parsedData;
        }
        return [];
    };
    CatalogServices.prototype.getProductById = function (id) {
        return this.$http.get(this.service + 'products/' + id)
            .then(function (response) {
            var resdata = response.data.data;
            return resdata;
        });
    };
    CatalogServices.$inject = ["$http"];
    return CatalogServices;
}());

