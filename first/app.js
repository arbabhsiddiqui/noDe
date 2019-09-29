var express = require('express');

var app=express();



// root
app.get("/",function(req,res){
    res.send("hey there");

});



// /something
app.get("/dog", function (req, res) {
    res.send("hey there nice dog");

});

// for creating a no page found error
app.get("*", function (req, res) {
    res.send("No Page Found");

});


//  creating server
app.listen(3000,function(){
    console.log("server start");
});