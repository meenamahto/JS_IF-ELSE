const rs=require('readline-sync');
var age=rs.questionInt("Enter your age:");
if(age>=5){
    console.log('you can go school');
}
if(age>=18){
    console.log("you can vote in elections");
}
if (age>=21){
    console.log('you can drive a car');
}
if (age>=24){
    console.log("you can marry");
}
if (age>=25){
    console.log("you can ligally drink");
}
// else{
    // console.log("nothing")
// }

var now = new Date();
var dayOfWeek = now.getDay(); // Sunday - Saturday : 0 - 6
console.log(dayOfWeek)
if(dayOfWeek == 4) {
    console.log("Have a nice weekend!")
} else {
    console.log("Have a nice day!")
}