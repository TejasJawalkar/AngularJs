// import dependency module
var express=require('express');
var session =require('express-session');
var parseurl=require('parseurl');
var path=require('path');
var bodyParser=require('body-parser');
const cors = require('cors');

const app=express();
//configure HTTP pipeline 

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Session Memory Configuration
var sessionOptions={
   secret:"secret",
   resave:true,
   saveUninitialized:false
};
app.use(session(sessionOptions));

//Configure Interceptor for session Management
app.use(function(req, res,next){
   // define session variables
   if (!req.session.views) {
      req.session.views = {};
      req.session.views.shoppingCart=[];
   }

   var pathname=parseurl(req).pathname;
   // count the views
   req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;
   next();
})


// Simple route to simulate authentication
app.post('/login', (req, res) => {
   const { email, password } = req.body;
   console.log(req.body)
   if (email === 'admin@tsystem.in' && password === 'tsystem') {
       res.json({ success: true, status:200 });
   } else {
       res.json({ success: false,status:401});
   }
});

//Router configuration
var routes=require("./router");
routes(app);

var staticFolder=express.static(path.join(__dirname,"public"));
app.use(staticFolder);

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
});``

app.listen(8000);
console.log("ShoppingCart Web App is listening on port 8000");

module.exports = app;