let rs=require("readline-sync");
var num=rs.questionInt("Enter your number:");
if (num%5==0 && num%15==0){
    console.log("divisible by both");
}
else{
    console.log('not divisible by both');
}