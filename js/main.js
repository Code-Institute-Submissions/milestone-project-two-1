var gameSequence = []; // order of buttons clicked 
var playerSequence = []; // order of buttons clicked by player 
var flashColor;  // number of times game flashes 
var rounds;  // what round player is on 
var simonTurn;  // boolean true or false - if simon's turn or player's turn 
var strict = false; // if button has been pressed - starts at false 
var sound = true;
var on = false; // if power has been switched on - starts at false 
var win; // player has won 

 // pass in css selector with ID tag 
var counterOn = document.querySelector("#counter");
var red = document.querySelector("#red");
var blue = document.querySelector("#blue");
var yellow = document.querySelector("#yellow");
var green = document.querySelector("#green");
var onButton = document.querySelector("#on");
var startButton = document.querySelector("#start");
var strictButton = document.querySelector("#strict");


