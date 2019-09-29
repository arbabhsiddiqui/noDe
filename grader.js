function average(arr){
    var sum = 0;
   arr.forEach(function(score){
       sum+=score
   });
  var  avg=sum/arr.length;
   Math.round(avg);
  return(avg);
   
}
var scores=[90,98,89,100,100,86,94];
var x = average(scores);
console.log(x);