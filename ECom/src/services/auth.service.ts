import * as angular from "angular";
import { IUser } from "../interfaces/IUser";

export class AuthServices {
    static $inject = ["$http","$location"];
    service: string = "http://localhost:8000/";
    aStatus:boolean=false;

    constructor(private $http: angular.IHttpService) {
        
    }

    validate(User: IUser): Promise<boolean> {
        return this.$http.post<{ success: boolean, status: number }>(this.service + "login", User)
            .then((res: angular.IHttpResponse<{ success: boolean, status: number }>) => {
                return res.data.success;
            }).catch((ex) => {
                return false;
            });
    }

    setsessionforauth(user: IUser): void {
        // Save the user object directly instead of in an array
        sessionStorage.setItem("AuthUser",JSON.stringify(user));
    }

    checkisLogged()  {
        // Check if 'AuthUser' exists in sessionStorage
        if(sessionStorage.getItem("AuthUser"))
        {
             this.aStatus=true;
        }
        else{
            this.aStatus=false;
        }
        return this.aStatus;
    }

    getsessionforauth(): IUser | null {
        const userData = sessionStorage.getItem("AuthUser");
        if (userData) {
            // Parse and return the user object
            const parsedData: IUser = JSON.parse(userData);
            return parsedData;
        }

        // Return null if no user data is found
        return null;
    }

    removeSessions()
    {
        sessionStorage.clear();
    }
}
