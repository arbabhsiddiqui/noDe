var express = require ("express");
var app= express();

app.get("/",function(req,res){
//  var z=req.params.z;
// res.render("home.ejs",{z: name});    
res.send("welcome");


});


app.get("/name/:name", function (req, res) {
    var name = req.params.name;
    res.render("home.ejs", {
        z : name
    });
    // res.send(z);


});


app.listen("4000",function(){
   console.log("server started"); 
})