// var time = 9;
const ps=require("prompt-sync")
const prom=ps()
let time=prom("Enter your number:")
if (time >= 5 && time <= 6) {
 console.log("sleep well");
}
else if (time > 6 && time <= 7) {
 console.log("Morning Exercise");
}
else if(time > 7 && time <=8.30){
 console.log("Break+Breakfast");
}
else if ( time > 8.30 && time < 12){
 console.log("Study");
}
 
