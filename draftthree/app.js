//1. Define Angularjs module
   //|- [] to create dependency {if module need logic of some other module}

var app=angular.module("loginModule",[])
app.controller("loginController",function($scope){
    //defining model

    // $scope.userList = 
    // [
    //     {
    //         name: "john sharma",
    //         email: "john@gmail.com",
    //         code: "E1"
    //     },
    //     {
    //         name: "peter ganguli",
    //         email: "peter@gmail.com",
    //         code: "E2"
    //     },
    //     {
    //         name: "subhodh pant",
    //         email: "subhodh@gmail.com",
    //         code: "E3"
    //     }
    // ]

    // $scope.user={
    //     email:"",
    //     password:""
    // }

    // $scope.valiate=function(){
    //     if($scope.user.email=="xyz@gmail.com" && $scope.user.password=="1234")
    //     {
    //        document.getElementById("userlist").style.display="block";
    //     }
    //     else
    //     {
    //         document.getElementById("userlist").style.display="none";
    //     }
    // }

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
    },
    {
        name:"POCO F7",
        processor:"Snapdragon",
        price:"27,000",
        brand:"POCO",
    },
    {
        name:"Iphone 15",
        price:"54,000",
        processor:"IOS",
        brand:"Apple",
    },
    {
        name:"Samsung 25",
        price:"75,000",
        processor:"Snapdragon",
        brand:"Samsung",
    },
    {
        name:"Nothing 2a",
        processor:"Dimensity",
        price:"24,000",
        brand:"Nothing",
    },
    {
        name:"Realme 13 Pro",
        processor:"Dimensity",
        price:"20,000",
        brand:"Realme",
    },
    {
        name:"POCO F7",
        processor:"Snapdragon",
        price:"27,000",
        brand:"POCO",
    },
    {
        name:"Iphone 15",
        price:"54,000",
        processor:"IOS",
        brand:"Apple",
    },
    {
        name:"Samsung 25",
        price:"75,000",
        processor:"Snapdragon",
        brand:"Samsung",
    },
    {
        name:"Nothing 2a",
        processor:"Dimensity",
        price:"24,000",
        brand:"Nothing",
    },
    {
        name:"Realme 13 Pro",
        processor:"Dimensity",
        price:"20,000",
        brand:"Realme",
    },
    {
        name:"POCO F7",
        processor:"Snapdragon",
        price:"27,000",
        brand:"POCO",
    },
    {
        name:"Iphone 15",
        price:"54,000",
        processor:"IOS",
        brand:"Apple",
    },
    {
        name:"Samsung 25",
        price:"75,000",
        processor:"Snapdragon",
        brand:"Samsung",
    },
    {
        name:"Nothing 2a",
        processor:"Dimensity",
        price:"24,000",
        brand:"Nothing",
    },
    {
        name:"Realme 13 Pro",
        processor:"Dimensity",
        price:"20,000",
        brand:"Realme",
    },
    {
        name:"POCO F7",
        processor:"Snapdragon",
        price:"27,000",
        brand:"POCO",
    }
]
})