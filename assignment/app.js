var express = require("express");
var app=express();


app.get("/",function(req,res){
res.send("hey there , welcome to my assignment");
});

app.get("/speak/:animal",function(req,res){
    var animal= req.params.animal;
    if(animal=="cow"){
        res.send("moo");
    }
    else if(animal=="dog"){
        res.send("bark");
    }
    else if(animal=="cat"){
        res.send("meow");
    }
    else {
        res.send("page not found");
    }
    
});


app.get("/repeat/:message/:number",function(req,res){
    var message=req.params.message;
    var number= Number(req.params.number);
    var results="";
    for(i=1;i<=number;i++){
        results +=" "+ message;
    }
        res.send("_"+results+"_");

});





app.listen(3000,function(){
console.log("sever started");
})