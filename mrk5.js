const rs=require("readline-sync")
let num=rs.question("Enter your number:")
if (num<10){
    console.log("number is less than 10")
}
else if(num>10 && num<20){
    console.log("number is less than 20")
}
else {
    console.log("greater than 20")
}