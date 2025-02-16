var AuthServices = (function () {
    function AuthServices($http, $window) {
        this.$http = $http;
        this.$window = $window;
        this.service = "http://localhost:8000/";
    }
    AuthServices.prototype.validate = function (User) {
        return this.$http.post(this.service + "login", User)
            .then(function (res) {
            console.log(res);
            return res.data.success;
        }).catch(function (ex) {
            return false;
        });
    };
    AuthServices.prototype.setsessionforauth = function (user) {
        debugger;
        var userData = JSON.stringify(user);
        this.$window.localStorage.setItem("AuthUser", userData);
    };
    AuthServices.prototype.checkisLogged = function () {
        return this.$window.localStorage.getItem("AuthUser") !== null;
    };
    AuthServices.prototype.getsessionforauth = function () {
        var userData = this.$window.localStorage.getItem("AuthUser");
        if (userData) {
            var parsedData = JSON.parse(userData);
            return parsedData;
        }
        return null;
    };
    AuthServices.$inject = ["$http"];
    return AuthServices;
}());

