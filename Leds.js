var JohnnyFive = require("johnny-five");
var Circuito = new JohnnyFive.Board({port :"COM10"});

 var Nine = true;

Circuito.on("ready", prender);


function prender (){
var Led1 = new JohnnyFive.Led (9);
var Led2 = new JohnnyFive.Led (13);

var WaitingTime = 300;

thisone();

function thisone(){
  Led2.off();
  Led1.on();
  Circuito.wait(WaitingTime, anotherone);
  function anotherone(){
    Led1.off();
    Led2.on();
    Circuito.wait(WaitingTime, thisone);
  }
}


console.log ("Hola mama, se hacer Hardware");

}
