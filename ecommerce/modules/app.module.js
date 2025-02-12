var app=angular.module("productModule",[]);
app.controller("productController",function($scope){
    $scope.productsList=[
        {
            name:"Iphone 15",
            price:"54,000",
            processor:"IOS",
            brand:"Apple",
            url:"https://cdn.shopify.com/s/files/1/0376/5420/0459/files/BA_ALAK_200.1001_2381f096-6ff8-4260-aac1-9cfc3faf411d.png?v=1693208232"
        },
        {
            name:"Samsung 25",
            price:"75,000",
            processor:"Snapdragon",
            brand:"Samsung",
            url:"https://cdn.shopify.com/s/files/1/0376/5420/0459/files/BA_ALAK_200.1001_2381f096-6ff8-4260-aac1-9cfc3faf411d.png?v=1693208232"
        },
        {
            name:"Nothing 2a",
            processor:"Dimensity",
            price:"24,000",
            brand:"Nothing",
            url:"https://cdn.shopify.com/s/files/1/0376/5420/0459/files/BA_ALAK_200.1001_2381f096-6ff8-4260-aac1-9cfc3faf411d.png?v=1693208232"
        },
        {
            name:"Realme 13 Pro",
            processor:"Dimensity",
            price:"20,000",
            brand:"Realme",
             url:"https://cdn.shopify.com/s/files/1/0376/5420/0459/files/BA_ALAK_200.1001_2381f096-6ff8-4260-aac1-9cfc3faf411d.png?v=1693208232"
        },
        {
            name:"POCO F7",
            processor:"Snapdragon",
            price:"27,000",
            brand:"POCO",
             url:"https://cdn.shopify.com/s/files/1/0376/5420/0459/files/BA_ALAK_200.1001_2381f096-6ff8-4260-aac1-9cfc3faf411d.png?v=1693208232"
        },
        {
            name:"Iphone 15",
            price:"54,000",
            processor:"IOS",
            brand:"Apple",
             url:"https://cdn.shopify.com/s/files/1/0376/5420/0459/files/BA_ALAK_200.1001_2381f096-6ff8-4260-aac1-9cfc3faf411d.png?v=1693208232"
        },
        {
            name:"Samsung 25",
            price:"75,000",
            processor:"Snapdragon",
            brand:"Samsung",
             url:"https://cdn.shopify.com/s/files/1/0376/5420/0459/files/BA_ALAK_200.1001_2381f096-6ff8-4260-aac1-9cfc3faf411d.png?v=1693208232"
        },
        {
            name:"Nothing 2a",
            processor:"Dimensity",
            price:"24,000",
            brand:"Nothing",
             url:"https://cdn.shopify.com/s/files/1/0376/5420/0459/files/BA_ALAK_200.1001_2381f096-6ff8-4260-aac1-9cfc3faf411d.png?v=1693208232"
        },
        {
            name:"Realme 13 Pro",
            processor:"Dimensity",
            price:"20,000",
            brand:"Realme",
             url:"https://cdn.shopify.com/s/files/1/0376/5420/0459/files/BA_ALAK_200.1001_2381f096-6ff8-4260-aac1-9cfc3faf411d.png?v=1693208232"
        },
        {
            name:"POCO F7",
            processor:"Snapdragon",
            price:"27,000",
            brand:"POCO",
             url:"https://cdn.shopify.com/s/files/1/0376/5420/0459/files/BA_ALAK_200.1001_2381f096-6ff8-4260-aac1-9cfc3faf411d.png?v=1693208232"
        },
        {
            name:"Iphone 15",
            price:"54,000",
            processor:"IOS",
            brand:"Apple",
             url:"https://cdn.shopify.com/s/files/1/0376/5420/0459/files/BA_ALAK_200.1001_2381f096-6ff8-4260-aac1-9cfc3faf411d.png?v=1693208232"
        },
        {
            name:"Samsung 25",
            price:"75,000",
            processor:"Snapdragon",
            brand:"Samsung",
             url:"https://cdn.shopify.com/s/files/1/0376/5420/0459/files/BA_ALAK_200.1001_2381f096-6ff8-4260-aac1-9cfc3faf411d.png?v=1693208232"
        },
        {
            name:"Nothing 2a",
            processor:"Dimensity",
            price:"24,000",
            brand:"Nothing",
             url:"https://cdn.shopify.com/s/files/1/0376/5420/0459/files/BA_ALAK_200.1001_2381f096-6ff8-4260-aac1-9cfc3faf411d.png?v=1693208232"
        },
        {
            name:"Realme 13 Pro",
            processor:"Dimensity",
            price:"20,000",
            brand:"Realme",
             url:"https://cdn.shopify.com/s/files/1/0376/5420/0459/files/BA_ALAK_200.1001_2381f096-6ff8-4260-aac1-9cfc3faf411d.png?v=1693208232"
        },
        {
            name:"POCO F7",
            processor:"Snapdragon",
            price:"27,000",
            brand:"POCO",
             url:"https://cdn.shopify.com/s/files/1/0376/5420/0459/files/BA_ALAK_200.1001_2381f096-6ff8-4260-aac1-9cfc3faf411d.png?v=1693208232"
        },
        {
            name:"Iphone 15",
            price:"54,000",
            processor:"IOS",
            brand:"Apple",
             url:"https://cdn.shopify.com/s/files/1/0376/5420/0459/files/BA_ALAK_200.1001_2381f096-6ff8-4260-aac1-9cfc3faf411d.png?v=1693208232"
        },
        {
            name:"Samsung 25",
            price:"75,000",
            processor:"Snapdragon",
            brand:"Samsung",
             url:"https://cdn.shopify.com/s/files/1/0376/5420/0459/files/BA_ALAK_200.1001_2381f096-6ff8-4260-aac1-9cfc3faf411d.png?v=1693208232"
        },
        {
            name:"Nothing 2a",
            processor:"Dimensity",
            price:"24,000",
            brand:"Nothing",
             url:"https://cdn.shopify.com/s/files/1/0376/5420/0459/files/BA_ALAK_200.1001_2381f096-6ff8-4260-aac1-9cfc3faf411d.png?v=1693208232"
        },
        {
            name:"Realme 13 Pro",
            processor:"Dimensity",
            price:"20,000",
            brand:"Realme",
             url:"https://cdn.shopify.com/s/files/1/0376/5420/0459/files/BA_ALAK_200.1001_2381f096-6ff8-4260-aac1-9cfc3faf411d.png?v=1693208232"
        },
        {
            name:"POCO F7",
            processor:"Snapdragon",
            price:"27,000",
            brand:"POCO",
             url:"https://cdn.shopify.com/s/files/1/0376/5420/0459/files/BA_ALAK_200.1001_2381f096-6ff8-4260-aac1-9cfc3faf411d.png?v=1693208232"
        }
    ]
})