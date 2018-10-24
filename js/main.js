$(document).ready(function(){ 
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

//pass in jquery id selectors
var counterOn = $("#counter");
var red = $("#red");
var blue = $("#blue");
var yellow = $("#yellow");
var green = $("#green");
var onButton = $("#on");
var startButton = $("#start");
var strictButton = $("#strict");


// switches and controls //

  $('#start').on('click', function() { // when the player clicks start
    noButtons = false;
    simonStart();    
  });
  
  $('#strict').on('click', function (){ // when the player clicks strict
    if (strict) {
      strict = false;
      $(this).removeClass('red-button');
    } else {
      strict = true;
      $(this).addClass('red-button');
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
    counterOn.innerHTML = 1;
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
        var audio = document.getElementById("sound1");
        audio.play();
    }
    sound = true;
    red.style.backgroundColor = "OrangeRed";
}

function two() {
    if (sound) {
        var audio = document.getElementById("sound2");
        audio.play();
    }
    sound = true;
    blue.style.backgroundColor = "Aqua";
}

function three() {
    if (sound) {
        var audio = document.getElementById("sound3");
        audio.play();
    }
    sound = true;
    yellow.style.backgroundColor = "LemonChiffon";
}

function four() {
    if (sound) {
        var audio = document.getElementById("sound4");
        audio.play();
    }
    sound = true;
    green.style.backgroundColor = "GreenYellow";
}

function clearColor() {
    red.style.backgroundColor = "red";
    blue.style.backgroundColor = "blue";
    yellow.style.backgroundColor = "yellow";
    green.style.backgroundColor = "green";
}

function gameFlash() {
    red.style.backgroundColor = "OrangeRed";
    blue.style.backgroundColor = "Aqua";
    yellow.style.backgroundColor = "LemonChiffon";
    green.style.backgroundColor = "GreenYellow";
}

// events //
red.addEventListener('click', (event) => {
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

blue.addEventListener('click', (event) => {
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

yellow.addEventListener('click', (event) => {
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

green.addEventListener('click', (event) => {
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
            counterOn.innerHTML = "END";
            setTimeout(() => {
                counterOn.innerHTML = rounds;
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
        counterOn.innerHTML = rounds;
        interval = setInterval(simonGame, 800);
    } 
}


function winGame() {
    flashColor();
    counterOn.innerHTML = "YOU WIN!";
    powerOn = false;
    win = true;
}
});