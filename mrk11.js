let rs=require("readline-sync");
var num1=rs.questionInt("Enter your first number :");
var num2=rs.questionInt("Enter your  second number:");
if (num1>num2){
    console.log("num1 is greater=",num1);
}
else{
    console.log("num2 is greater=",num2);
}