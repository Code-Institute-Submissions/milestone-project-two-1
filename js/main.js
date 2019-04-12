/* global $ */
$(function() {
//Console Game Pieces
var gameSequence = [], // order of buttons clicked by game
    playerSequence = [], // buttons clicked by player
    simonTurn = 0, // start round at zero
    rounds = 0, // displays counter
    onButton = false, // starts game
    playerButton = false,
    strictButton = false,
    flashColor = 200, // duration of buttons flashing colour
    colorButtons = ["green", "red", "yellow", "blue"];


// Start with the Switch on/off to activate game
    $(".simon-switch").click(function() {
        if (!onButton) {
            onButton = true;
            $(".simon-switch-toggle").addClass("turnon");
            $(".counter-text").addClass("turn");
        } else {
            onButton = false;
            strictButton = false;
            gameSequence = [];
            playerSequence = [];
            $(".counter-text").text("--");
            rounds = 0;
            console.clear(); // reset all active buttons
            $(".simon-switch-toggle").removeClass("turnon");
            $(".counter-text").removeClass("turn");
            $(".strict-button").removeClass("light-up");
            $(".start-button").removeClass("on");
        }
    });

// Press Start button to begin game
    $(".start-button").click(function() {
        if (onButton) {
            startMove();
            $(".start-button").addClass("on");
        }
        else {
            console.clear();
            $(".start-button").removeClass("on");
        }
    });

// Toggle Strict Button
    $(".strict-button").click(function() {
        if (onButton) {
            if (!strictButton) {
                strictButton = true;
                $(".strict-button").addClass("light-up");
            } else {
                strictButton = false;
                $(".strict-button").removeClass("light-up");
            }
        }
    });

// Player to follow game sequence
$(".square-buttons").click(function() {
    if (onButton && playerButton) {
        playerTurn(this);
        validate();
    }
});

// Player Turn
function playerTrue() {
playerButton = true;
    $(".square-buttons").addClass("true");
}

// Game Turn
function playerFalse() {
playerButton = false;
    $(".square-buttons").removeClass("true");
}


// Sound Effects - Audio files found here: https://learn.freecodecamp.org/coding-interview-prep/take-home-projects/build-a-simon-game & freesound.org
var sounds = {
    green: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
    red: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
    yellow: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
    blue: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"),
    win: new Audio("https://freesound.org/data/previews/428/428156_8014960-lq.mp3"),
    wrong: new Audio("https://freesound.org/data/previews/415/415764_6090639-lq.mp3"),
 };

// Create Game Sequence
    //-----Assigned the Math.random() function for this sequence. Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function press() {
    gameSequence.push(colorButtons[Math.floor(Math.random() * 4)]);
    play();
    return setTimeout(counting, 500);

}

// Game Sequence Activates
function steps(activate) {
    $("." + gameSequence[activate]).addClass("light");
    sounds[gameSequence[activate]].play();

    setTimeout(function() {
        $("." + gameSequence[activate]).removeClass("light");
    }, flashColor);
}

// Displays Rounds in Counter
function counting() {
    rounds++;
    $(".counter-text").text(rounds < 10 ? "0" + rounds : rounds); // If number less than 10, display eg: 03
}

function countingError() { // if user presses incorrectly, display ??
    rounds = 0;
    $(".counter-text").text("??");
}

// Game Sequence in Play
function play() {
    var interval = 1000;
    var i = 0,
    simonTurn = gameSequence.length;
    function loop() {
        if (i < simonTurn) {
            playerFalse();
            steps(i);
            i++;
            setTimeout(loop, interval);
        } else {
            console.log(i);
            playerTrue();
        }
    }
    setTimeout(loop, interval);
}

// Player Sequence
//----- reference https://codepen.io/zentech/pen/XaYygR?editors=0010 line 63 - 80 in JS file
function playerTurn(go) {
    var playerColor = $(go).attr("id");
    playerSequence.push(playerColor);
    sounds[playerColor].play();
    $("." + playerColor).addClass("light");
    setTimeout(function() {
        $("." + playerColor).removeClass("light");
    }, flashColor);
}

// Player Starts
function startMove() {
    playerSequence = [];
    gameSequence = [];
    rounds = 0;
    press();
    play();
}

// Player Makes Wrong Move
function wrongMove() {
    playerSequence = [];
    console.log("??");
    sounds.wrong.play();
}


// Player Wins
function win() {
    setTimeout(function() {
        sounds.win.play();
        rounds = 0;
        $(".counter-text").text("YAY!").animate({opacity: "0.2"}).animate({opacity: "1"}).animate({opacity: "0.2"}).animate({opacity: "1"}).animate({opacity: "0.2"}).animate({opacity: "1"});
        $(".square-buttons").animate({opacity: "0.2"}).animate({opacity: "1"}).animate({opacity: "0.2"}).animate({opacity: "1"}).animate({opacity: "0.2"}).animate({opacity: "1"});
    }, 1000); //Animation referenced from: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_ani_opacity
    

    return setTimeout(function() {
        playerSequence = [];
        gameSequence = [];
        press();
        play();
    }, 5000); // Time to enjoy the win!
    

}

// Validate Game Sequence against Player Sequence
function validate() {
    var playerLength = playerSequence.length -1;
    if (playerSequence[playerLength] !== gameSequence[playerLength]) {
        if (strictButton) { //strict button on
            playerFalse();
            setTimeout(wrongMove, 500);
            setTimeout(countingError, 500);
            setTimeout(startMove, 1000);

        } else {
            playerFalse();
            $(".counter-text").text("??");
            setTimeout(function() {
                $(".counter-text").text(rounds < 10 ? "0" + rounds : rounds);
            }, 1000);
            setTimeout(wrongMove, 500);
            setTimeout(play, 1000);
        }
    } else {
        console.log("YAY!");
        if (playerSequence.join("") === gameSequence.join("")) {
            simonTurn = gameSequence.length;

            if (simonTurn === 3) {
                return win();
                
            } else {
                playerSequence = [];
                press();
                console.log(gameSequence);
                return play();
            }
        }
    }
}

});
