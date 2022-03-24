var number1 = 44 * 30
const rs=require("readline-sync")
var number2=rs.questionInt("Enter your number:")
if (number1>=number2){
    console.log("number2 is greater than or Equal")
}
else{
    console.log("number2 is lesser than number1")
}