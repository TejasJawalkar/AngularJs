import * as angular from "angular";
interface ICustomScope extends angular.IScope 
{
    pr:any
}

export class CatlogController{
    static $inject=["$scope"];
    products:Array<any>;

    constructor(private $scope:ICustomScope) {
      this.products=[
        {
          "url":"https://cdn.shopify.com/s/files/1/0376/5420/0459/files/BA_ALAK_200.1001_2381f096-6ff8-4260-aac1-9cfc3faf411d.png?v=1693208232",
          "brand": "Apple",
          "model": "iPhone 14",
          "price": 799
        },
        {
          "url":"https://cdn.shopify.com/s/files/1/0376/5420/0459/files/BA_ALAK_200.1001_2381f096-6ff8-4260-aac1-9cfc3faf411d.png?v=1693208232",
          "brand": "Samsung",
          "model": "Galaxy S23",
          "price": 999
        },
        {
          "url":"https://cdn.shopify.com/s/files/1/0376/5420/0459/files/BA_ALAK_200.1001_2381f096-6ff8-4260-aac1-9cfc3faf411d.png?v=1693208232",
          "brand": "OnePlus",
          "model": "OnePlus 11",
          "price": 749
        },
        {
          "url":"https://cdn.shopify.com/s/files/1/0376/5420/0459/files/BA_ALAK_200.1001_2381f096-6ff8-4260-aac1-9cfc3faf411d.png?v=1693208232",
          "brand": "Google",
          "model": "Pixel 7",
          "price": 599
        },
        {
          "url":"https://cdn.shopify.com/s/files/1/0376/5420/0459/files/BA_ALAK_200.1001_2381f096-6ff8-4260-aac1-9cfc3faf411d.png?v=1693208232",
          "brand": "Xiaomi",
          "model": "Xiaomi 13",
          "price": 849
        }
    ];
      this.$scope["pr"]=this;
    }
}