import * as angular from "angular";
import { AuthServices } from "../services/auth.service";
import { CartService } from "../services/cart.service";

export interface ICustomScope extends angular.IScope {
    mn: MainController;
}

export class MainController {
    static $inject = ["$scope", "$location", "AuthServices", "$timeout","CartService"];
    status: boolean;
    cartCount:number;

    constructor(
        private $scope: ICustomScope, 
        private $location: angular.ILocationService,
        private authServices: AuthServices,
        private cartService: CartService,
        private $timeout: angular.ITimeoutService
    ) {
        this.getAuthenticationStatus();
      
    }

    getCoundofCart()
    {
        
    }

    // Retrieves the current authentication status
    getAuthenticationStatus() {
        this.status = this.authServices.checkisLogged();
        // If outside Angular's digest cycle, schedule an update
        if (!this.$scope.$root.$$phase) {
            this.$scope.$apply();  // Only apply if not already in a digest cycle
        }
    }

    // Checks if the user is logged in by calling getAuthenticationStatus
    checkStatus() {
        this.getAuthenticationStatus();
        return this.status;
    }

    // Handles user logout process
    logout() {
        this.authServices.removeSessions();
        this.checkStatus();
        // Using $timeout to safely update the location after session removal
        this.$timeout(() => {
            this.$location.url("/products");
        });
    }
}
