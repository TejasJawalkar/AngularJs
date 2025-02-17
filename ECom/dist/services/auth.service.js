var AuthServices = (function () {
    function AuthServices($http) {
        this.$http = $http;
        this.service = "http://localhost:8000/";
        this.aStatus = false;
    }
    AuthServices.prototype.validate = function (User) {
        return this.$http.post(this.service + "login", User)
            .then(function (res) {
            return res.data.success;
        }).catch(function (ex) {
            return false;
        });
    };
    AuthServices.prototype.setsessionforauth = function (user) {
        sessionStorage.setItem("AuthUser", JSON.stringify(user));
    };
    AuthServices.prototype.checkisLogged = function () {
        if (sessionStorage.getItem("AuthUser")) {
            this.aStatus = true;
        }
        else {
            this.aStatus = false;
        }
        return this.aStatus;
    };
    AuthServices.prototype.getsessionforauth = function () {
        var userData = sessionStorage.getItem("AuthUser");
        if (userData) {
            var parsedData = JSON.parse(userData);
            return parsedData;
        }
        return null;
    };
    AuthServices.prototype.removeSessions = function () {
        sessionStorage.clear();
    };
    AuthServices.$inject = ["$http", "$location"];
    return AuthServices;
}());

