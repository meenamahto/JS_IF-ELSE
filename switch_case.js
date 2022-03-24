var rs=require("readline-sync");
var num=rs.questionInt("Enter your number:")
switch(true){
    case(num%3==0 && num%7==0):console.log("navgurkul",num)
    break
    case(num%7==0):console.log("gurukul",num)
    break;
    case(num%3==0):console.log("nav",num)
    break;
    default:console.log("not divisible",num)
    break;
}

var a=5
var b=4
switch(true){
    case(a<b):console.log("meena")
    break;
    case (a>b):console.log("mahto")
    break
    default:console.log("meena mahto")
}

