var CartService = (function () {
    function CartService() {
        this.count = 1;
        this.cart = [];
        this.cartData = [];
    }
    CartService.prototype.getCartData = function () {
        var sessioncart = localStorage.getItem("CartItems");
        if (sessioncart) {
            return JSON.parse(sessioncart);
        }
        return this.cartData = [];
    };
    CartService.prototype.IncreaseQuantityInCart = function () {
    };
    CartService.prototype.AddToCart = function (item) {
        var sessionCart = this.getcartfromlocalstorage();
        var cart = sessionCart ? JSON.parse(sessionCart) : [];
        var itemExists = cart.find(function (data) { return data.ProductId.toString() === item.id.toString(); });
        if (itemExists) {
            return false;
        }
        else {
            var mycart = {
                cartId: cart.length + 1,
                ProductId: item.id,
                Quantity: 1,
                Price: item.price,
                TotalPrice: this.CalculatePrice(item.price, 1),
                product: item
            };
            cart.push(mycart);
            this.setcartinlocalstorage(cart);
            return true;
        }
    };
    CartService.prototype.setcartinlocalstorage = function (cart) {
        localStorage.setItem("CartItems", JSON.stringify(cart));
    };
    CartService.prototype.getcartfromlocalstorage = function () {
        return localStorage.getItem("CartItems");
    };
    CartService.prototype.CalculatePrice = function (price, qty) {
        return price * qty;
    };
    CartService.prototype.RemoveCartItem = function (id) {
        var sessioncart = this.getcartfromlocalstorage();
        ;
        var cart = sessioncart ? JSON.parse(sessioncart) : [];
        var index = cart.findIndex(function (data) { return data.cartId.toString() === id; });
        console.log(index);
        cart.splice(index, 1);
        this.setcartinlocalstorage(cart);
    };
    CartService.$inject = ["$location"];
    return CartService;
}());

