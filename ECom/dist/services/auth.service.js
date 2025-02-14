var AuthService = (function () {
    function AuthService($http) {
        this.$http = $http;
        this.service = "http://localhost:8000/";
    }
    AuthService.prototype.validate = function (userData) {
        return this.$http.post(this.service + "login", userData);
    };
    AuthService.$inject = ["$http"];
    return AuthService;
}());

