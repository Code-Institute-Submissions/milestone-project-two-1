let sequence = []; // order of buttons clicked //
let playerSequence = []; // order of buttons clicked by player //
let lightUp;  // number of times game flashes //
let round;  // what round player is on //
let correct;  // if player is on the right track or not //
let simon;  // boolean true or false - if simon's turn or player's turn //
let intervalId; 
let strict = false; // if button has been pressed - starts at false //
let sound = true;
let on = false; // if power has been switched on - starts at false //
let win; // player has won //

 // pass in css selector with ID tag //
const counterOn = document.querySelector("#counter");
const red = document.querySelector("#red");
const blue = document.querySelector("#blue");
const yellow = document.querySelector("#yellow");
const green = document.querySelector("#green");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");
const strictButton = document.querySelector("#strict");

// switches and controls //
strictButton.addEventListener('click', (event) => {
    if (strictButton.checked == true) {
        strict = true;
    } else {
        strict = false;
    }
});

onButton.addEventListener('click', (event) => {
    if (onButton.checked == true) {
        on = true;
        counterOn.innerHTML = "-";
    } else {
        on = false;
        counterOn.innerHTML = "";
        clearColor();
        clearInterval(intervalId);
    }
});

startButton.addEventListener('click', (event) => {
    if (on || win) {
        play();
    }
});

// functions //
function play() {
    win = false;
    sequence = [];
    playerSequence = [];
    lightUp = 0;
    intervalId = 0;
    round = 1;
    counterOn.innerHTML = 1;
    correct = true;
    for (var i = 0; i < 20; i++) {
        sequence.push(Math.floor(Math.random() * 4) + 1);
}
        simon = true;
        
        intervalId = setInterval(simonTurn, 800);
}

function simonTurn() {
    on = false;
    
    if (lightUp == round) {
        clearInterval(intervalId);
        simon = false;
        clearColor();
        on = true;
    }
    if (simon) {
        clearColor();
        setTimeout(() => {
            if (sequence[lightUp] == 1) one();
            if (sequence[lightUp] == 2) two();
            if (sequence[lightUp] == 3) three();
            if (sequence[lightUp] == 4) four();
            lightUp++;
        }, 200);
    }
}

function one() {
    if (sound) {
        let audio = document.getElementById("sound1");
        audio.play();
    }
    sound = true;
    red.style.backgroundColor = "OrangeRed";
}

function two() {
    if (sound) {
        let audio = document.getElementById("sound2");
        audio.play();
    }
    sound = true;
    blue.style.backgroundColor = "Aqua";
}

function three() {
    if (sound) {
        let audio = document.getElementById("sound3");
        audio.play();
    }
    sound = true;
    yellow.style.backgroundColor = "LemonChiffon";
}

function four() {
    if (sound) {
        let audio = document.getElementById("sound4");
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

function lightUpColour() {
    red.style.backgroundColor = "OrangeRed";
    blue.style.backgroundColor = "Aqua";
    yellow.style.backgroundColor = "LemonChiffon";
    green.style.backgroundColor = "GreenYellow";
}

// events //
red.addEventListener('click', (event) => {
    if (on) {
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
    if (on) {
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
    if (on) {
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
    if (on) {
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
    if (playerSequence[playerSequence.length -1] !== sequence[playerSequence.length - 1]) correct = false;
    
    if (playerSequence.length == 20 && correct) {
        winGame();
    }
        if (correct == false) {
            lightUpColour();
            counterOn.innerHTML = "END";
            setTimeout(() => {
                counterOn.innerHTML = round;
                clearColor();
                
                if (strict) {
                    play();
                    } else {
                        simon = true;
                        lightUp = 0;
                        playerSequence = [];
                        correct = true;
                        intervalId = setInterval(simonTurn, 800);
                    }
                }
            , 800);
            
            sound = false;
    }
    
    if (round == playerSequence.length && correct && !win) {
        round++;
        playerSequence = [];
        simon = true;
        lightUp = 0;
        counterOn.innerHTML = round;
        intervalId = setInterval(simonTurn, 800);
    } 
}


function winGame() {
    lightUpColour();
    counterOn.innerHTML = "YOU WIN!";
    on = false;
    win = true;
}
