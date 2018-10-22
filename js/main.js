var gameSequence = []; // order of buttons clicked 
var playerSequence = []; // order of buttons clicked by player 
var flashColor;  // number of times game flashes 
var rounds;  // what round player is on 
var correct;  // if player is on the right track or not 
var interval;
var simonTurn;  // boolean true or false - if simon's turn or player's turn 
var strict = false; // if button has been pressed - starts at false 
var sound = true;
var powerOn = false; // if power has been switched on - starts at false //
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


// switches and controls //
strictButton.addEventListener('click', (event) => {
    if (strictButton.clicked == true) {
        strict = true;
    } else {
        strict = false;
    }
});

onButton.addEventListener('click', (event) => {
    if (onButton.clicked == true) {
        powerOn = true;
        counterOn.innerHTML = "-";
    } else {
        powerOn = false;
        counterOn.innerHTML = "";
        clearColor();
        clearInterval(interval);
    }
});

startButton.addEventListener('click', (event) => {
    if (powerOn || win) {
        play();
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
