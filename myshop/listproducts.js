var fa = require('faker');

for(var i=0;i<10;i++){
    var name = fa.commerce.productName();
    var price= fa.commerce.price();
    console.log(name,price);
}