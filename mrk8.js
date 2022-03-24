const rs=require("readline-sync")
var water=rs.question("Enter your quantity of water:")
if (water<1){
    console.log("water more need to be filled")
}
else if(water>=1 && water<=10){
    console.log("no need to fill water")
}
else{
    console.log("overflow")
}