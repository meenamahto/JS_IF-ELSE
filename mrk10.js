let rs=require("readline-sync");
var x=rs.questionInt("Enter your first number :");
var y=rs.questionInt("Enter your second number :");
if (x%y==0){
    console.log("divisible");
}
else{
    console.log("not divisible");
}
