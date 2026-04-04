// Joel Rivera April 2, 2026 Assignment 2.3 JavaScript-Functions


function play ()
{
    var set;
    var result;
    var lotto1;
    var lotto2;
    var lotto3;
    var lotto4;
    var lotto5;
    var lotto6;

set=lotto1,lotto6;
result=lotto1,lotto2,lotto3,lotto4,lotto5;
lotto1=Math.ceil(Math.random()*69);//This tells random numbers from 1-69 be selected.
lotto2=Math.ceil(Math.random()*69);//To include 0 in ny=muber range use Number-1.
lotto3=Math.ceil(Math.random()*69);
lotto4=Math.ceil(Math.random()*69);
lotto5=Math.ceil(Math.random()*69);
lotto6=Math.ceil(Math.random()*26);
document.getElementById("lotto1").innerHTML="1st Number = "+lotto1;// The ".innerHTML allows JavaScript to write results to HTML file"
document.getElementById("lotto2").innerHTML="2nd Number = "+lotto2;
document.getElementById("lotto3").innerHTML="3rd Number = "+lotto3;
document.getElementById("lotto4").innerHTML="4th Number = "+lotto4;
document.getElementById("lotto5").innerHTML="5th Number = "+lotto5;
document.getElementById("lotto6").innerHTML="6th Number = "+lotto6;

// the || symbol means or when listing multiple commamds.
if (lotto1==lotto2||lotto1==lotto3||lotto1==lotto4||lotto1==lotto5||lotto2==lotto3||lotto2==lotto4||lotto2==lotto5||lotto3==lotto4||lotto3==lotto5||lotto4==lotto5)
 document.getElementById("result").innerHTML="Spin Again!!";   

//Not sure about the set up for else if and else but they work sort of
else if (lotto1)
 document.getElementById("result").innerHTML="Lucky Numbers!";

//This was suppose to only display when 6 number is a 7 however doesnt work??
else (lotto6==7)
 document.getElementById("set").innerHTML="A Very Lucky Set";

}
