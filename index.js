// var express = require("express");
// var app = express();

// app.get("/", function (req, res) {
//     res.send("Hello world");
// });

// app.listen(3000, function () {
//     console.log("Example is running on port 3000");
// });
var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send("<h1>Hello world</h1>")
});
app.get("/name/:name",function(req,res){
    var n = req.params.name;
    res.send("<h1>Hello " + n +"</h1>");
});
app.get("/google/:search", function(req, res){
    
       var s = req.params.search;
    res.redirect("https://www.google.com/search?q="+ s);
 });
 app.get("/*", function(req, res){
    res.send("Eror 404");
  
});


app.listen(3000,function(){
    console.log("Exsample is running on port 3000");
});