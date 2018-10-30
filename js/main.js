/* global $ */
$(function() {
var gameSequence = []; // order of buttons clicked by game 
var playerSequence = []; // order of buttons clicked by player 
var flashColor;  // number of times button flashes 
var rounds;  // what round player is on 
var correct;  // if player is correct
var interval;
var simonTurn;  // if simon's turn
var strict = false;  
var sound = true;
var on = false;
var powerOn = false; // if on button pressed
var win; // player has won 

 // pass in selector with ID tag 
var counterOn = $("#counter");
var red = $("#red");
var blue = $("#blue");
var yellow = $("#yellow");
var green = $("#green");
var onButton = $("#on");
var strictButton = $("#strict");


// switches and controls //
$('#on').on('click', function() {
  if (!onButton == true) {
    counterOn.html("0");
  } else {
    onButton = false;
    counterOn.html("--");
    clearColor();
    clearInterval(interval);
  }
});

$('#start').on('click', function() {
  if (on || win) {
    play();
  }
});

$('#strict').on('click', function() {
  if (strictButton == true) {
    strict = true;
  } else {
    strict = false;
  }
});



// functions //
function play() {
    win = false;
    gameSequence = [];
    playerSequence = [];
    flashColor = 0;
    interval = 0;
    rounds = 1;
    counterOn.html("1");
    correct = true;
    for (var i = 0; i < 20; i++) {
        gameSequence.push(Math.floor(Math.random() * 4) + 1);
}
        simonTurn = true;
        
        interval = setInterval(simonGame, 800);
}

function simonGame() {
    powerOn = false;
    
    if (flashColor == rounds) {
        clearInterval(interval);
        simonTurn = false;
        clearColor();
        powerOn = true;
    }
    if (simonTurn) {
        clearColor();
        setTimeout(() => {
            if (gameSequence[flashColor] == 1) one();
            if (gameSequence[flashColor] == 2) two();
            if (gameSequence[flashColor] == 3) three();
            if (gameSequence[flashColor] == 4) four();
            flashColor++;
        }, 200);
    }
}

function one() {
    if (sound) {
        var audio = $("sound1");
        audio.play();
    }
    sound = true;
    $(".red").css("opacity", "1");
}

function two() {
    if (sound) {
        var audio = $("sound2");
        audio.play();
    }
    sound = true;
    $(".blue").css("opacity", "1");
}

function three() {
    if (sound) {
        var audio = $("sound3");
        audio.play();
    }
    sound = true;
    $(".yellow").css("opacity", "1");
}

function four() {
    if (sound) {
        var audio = $("sound4");
        audio.play();
    }
    sound = true;
    $(".green").css("opacity", "1");
}

function clearColor() {
    $(".red").css("background-color", "red");
    $(".blue").css("background-color", "blue");
    $(".yellow").css("background-color", "yellow");
    $(".green").css("background-color", "green");
}

function gameFlash() {
    $(".red").css("background-color", "red").style.opacity = "0.5";
    $(".blue").css("background-color", "blue").style.opacity = "0.5";
    $(".yellow").css("background-color", "yellow").style.opacity = "0.5";
    $(".green").css("background-color", "green").style.opacity = "0.5";
}

// events //
$('#red').on('click', function() {
    if (powerOn) {
        playerSequence.push(1);
        confirm();
        one();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

$('#blue').on('click', function() {
    if (powerOn) {
        playerSequence.push(2);
        confirm();
        two();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
            
        }
    }
});

$('#yellow').on('click', function() {
    if (powerOn) {
        playerSequence.push(3);
        confirm();
        three();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
            
        }
    }
});

$('#green').on('click', function() {
    if (powerOn) {
        playerSequence.push(4);
        confirm();
        four();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
            
        }
    }
});

function confirm() {
    if (playerSequence[playerSequence.length -1] !== gameSequence[playerSequence.length - 1]) correct = false;
    
    if (playerSequence.length == 20 && correct) {
        winGame();
    }
        if (correct == false) {
            gameFlash();
            counterOn.html("END");
            setTimeout(() => {
                counterOn.html("rounds");
                clearColor();
                
                if (strict) {
                    play();
                    } else {
                        simonTurn = true;
                        flashColor = 0;
                        playerSequence = [];
                        correct = true;
                        interval = setInterval(simonGame, 800);
                    }
                }
            , 800);
            
            sound = false;
    }
    
    if (rounds == playerSequence.length && correct && !win) {
        rounds++;
        playerSequence = [];
        simonTurn = true;
        flashColor = 0;
        counterOn.html("rounds");
        interval = setInterval(simonGame, 800);
    } 
}


function winGame() {
    flashColor();
    counterOn.html("YOU WIN!");
    powerOn = false;
    win = true;
}
});