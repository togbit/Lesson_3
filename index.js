
// // var express = require("express");
// // var app = express();


// // var Square = require("./module");
// // var mySquareObject = new Square(5);

// // // app.get("/", function (req, res) {
// // //     res.send("<h1>Hello world</h1>")
// // // });
// // // app.get("/name/:name", function (req, res) {
// // //     var n = req.params.name;
// // //     res.send("<h1>Hello " + n + "</h1>");
// // // });

// // function main() {
// //     console.log(mySquareObject.getArea());
// // }
// // main();
// // var fs = require("fs");

// // function main(){
// //     fs.writeFile("hell text","Hello world/n",function(err){
// //     console.log("fs.writeFile ended");
// //     });
// //     console.log("fs.writeFile");
// // }
// // main();
// // var fs = require("fs");

// // function main(){
// //     fs.writeFileSync("hell text","Hello world/n")
// //     console.log("fs.writeFile");
// // }
// // main();
// var fs = require("fs");
// var dummyText = "Apple yep";



// function main(){
//     fs.writeFileSync("dummytext.txt",dummyText);
//     var text = fs.readFileSync("dummytext.txt").toString();
//     console.log(dummyText == text);
//     console.log(text);
//     fs.writeFileSync("undummytext.txt",text.replace("Apple","Microsoft"));
// }
// main();

var fs = require("fs");

var obj =
{
    "first_name":"Vardan",
    "last-name":"Hovsepyan",
    "age":13,
    "tumo_student":true
}
var myJSON = JSON.stringify(obj);
console.log(myJSON);
function main(){
    fs.writeFileSync("obj.json",myJSON);
}
main();


