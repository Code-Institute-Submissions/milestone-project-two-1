/* global $ */
$(document).ready(function () {


//Console Game Pieces
var gameSequence = [], // order of buttons clicked by game
    playerSequence = [], // order of buttons clicked by player
    simonTurn = 0,
    flashColor = 300, // number of times button flashes
    rounds = 0, // displays counter
    onButton = false, // starts game
    playerButton = false,
    strictButton = false,
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
    green: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"),
    red: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
    yellow: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
    blue: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
    win: new Audio("https://freesound.org/data/previews/109/109662_945474-lq.mp3"),
    wrong: new Audio("https://freesound.org/data/previews/415/415764_6090639-lq.mp3"),
 };

// Create Game Sequence
function press() {
    gameSequence.push(colorButtons[Math.floor(Math.random() * colorButtons.length)]);
    return setTimeout(counting, 300);

}

// Game Sequence Activates
function steps(i) {
    $("." + gameSequence[i]).addClass("light");
    sounds[gameSequence[i]].play();

    setTimeout(function() {
        $("." + gameSequence[i]).removeClass("light");
    }, flashColor);
}

// Displays Rounds in Counter
function counting() {
    rounds++;
    $(".counter-text").text(rounds < 10 ? "0" + rounds : rounds);
}

function countingError() {
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
            playerFalse()
            steps(i);
            i++;
            setTimeout(loop, interval);
        } else {
            console.log(i)
            playerTrue()
        }
    }
    setTimeout(loop, interval);
}

// Player Sequence
function playerTurn(choice) {
    var playerColor = $(choice).attr("id");
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
    console.log("no");
    sounds.wrong.play();
}


// Player Wins
function win() {
    setTimeout(function() {
        win.play();
        rounds = 0;
        $(".counter-text").text("YAY!");
        $(".counter-text").effect("bounce", 1);
        $(".square-buttons").effect("bounce", 1);
    }, 1000);

    return setTimeout(function() {
        playerSequence = [];
        gameSequence = [];
        press();
        play();
    }, 2000);

}

// Validate Game Sequence against Player Sequence
function validate() {
    var playerLength = playerSequence.length - 1;
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
            }, 1200);
            setTimeout(wrongMove, 500);
            setTimeout(play, 1000);
        }
    } else {
        console.log("YAY!")
        if (playerSequence.join("") === gameSequence.join("")) {
            simonTurn = gameSequence.length;

            if (simonTurn === 20) {
                return win();
            } else {
                playerSequence = [];
                press();
                console.log(gameSequence)
                return play();
            }
        }
    }
}

});
