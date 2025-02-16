import * as angular from "angular";
import { IUser } from "../interfaces/IUser";

export class AuthServices {
    static $inject = ["$http"];
    service: string = "http://localhost:8000/";

    constructor(private $http: angular.IHttpService, private $window: angular.IWindowService) {}

    validate(User: IUser): Promise<boolean> {
        return this.$http.post<{ success: boolean, status: number }>(this.service + "login", User)
            .then((res: angular.IHttpResponse<{ success: boolean, status: number }>) => {
                console.log(res);
                return res.data.success;
            }).catch((ex) => {
                return false;
            });
    }

    setsessionforauth(user: IUser): void {
        debugger;
        const userData=JSON.stringify(user)
        // Save the user object directly instead of in an array
        this.$window.localStorage.setItem("AuthUser",userData );
    }

    checkisLogged(): boolean {
        // Check if 'AuthUser' exists in sessionStorage
        return this.$window.localStorage.getItem("AuthUser") !== null;
    }

    getsessionforauth(): IUser | null {
        const userData = this.$window.localStorage.getItem("AuthUser");

        if (userData) {
            // Parse and return the user object
            const parsedData: IUser = JSON.parse(userData);
            return parsedData;
        }

        // Return null if no user data is found
        return null;
    }
}
