const rs=require("readline-sync")
var x=rs.questionInt("Enter your number:")
if (x%2==0){
    console.log("Divisible")
}
else{
    console.log("Not Divisible")
}