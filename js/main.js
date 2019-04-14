/* global $ */
$(function() {
    
    /* Simple Version of Simon Game
    -- Toggle on/off button to activate game.
    -- Press Start Button to begin game sequence in normal mode. Unlimited tries if fail to remember game sequence correctly.
    -- Strict Mode means you start from round 1 if you fail to remember game sequence correctly.
    -- Player wins when reach round 20. */
    
// CONSOLE GAME PIECES
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
        if (!onButton) { // if toggle to on position
            onButton = true;
            $(".simon-switch-toggle").addClass("turnon");
            $(".counter-text").addClass("turn");
        } else { // if toggle to off position
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

// Sound Effects - Audio files found here: https://learn.freecodecamp.org/coding-interview-prep/take-home-projects/build-a-simon-game & freesound.org
var sounds = {
    green: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
    red: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
    yellow: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
    blue: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"),
    win: new Audio("https://freesound.org/data/previews/428/428156_8014960-lq.mp3"),
    wrong: new Audio("https://freesound.org/data/previews/415/415764_6090639-lq.mp3"),
 };

// GAME SEQUENCE
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

// Create Game Sequence
    // Create Random numbers from 1-4. 
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
    $(".counter-text").text(rounds < 10 ? "0" + rounds : rounds); // If number less than 10, display in the form of 03, instead of 3, as an example
}

function countingError() { // if user presses incorrectly, display "??""
    rounds = 0;
    $(".counter-text").text("??");
}

// Game Sequence in Play
function play() {
    var interval = 1000; // delay in colour button animation
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

// Player Sequence - push color buttons
function playerTurn(go) {
    var playColor = $(go).attr("id");
    playerSequence.push(playColor);
    sounds[playColor].play();
    $("." + playColor).addClass("light");
    setTimeout(function() {
        $("." + playColor).removeClass("light");
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
    //Player wins, counter text and game buttons flash with fade in/out effect - Animation referenced from: https://www.w3schools.com/jquery/eff_fadeout.asp
function win() {
    setTimeout(function() {
        sounds.win.play();
        rounds = 0;
        $(".counter-text").text("YAY!").fadeOut("slow").fadeIn("slow").fadeOut("slow").fadeIn("slow"); 
        $(".square-buttons").fadeOut("slow").fadeIn("slow").fadeOut("slow").fadeIn("slow");
    }, 1000); 
    // game will turn off once player wins. to restart, toggle on button.
    return setTimeout(function() {
        playerSequence = [];
        gameSequence = [];
                console.clear(); //turn game off once player wins.
            $(".simon-switch").removeClass("off");    
            $(".simon-switch-toggle").removeClass("turnon");
            $(".counter-text").removeClass("turn");
            $(".strict-button").removeClass("light-up");
            $(".start-button").removeClass("on");
    }, 5000); // delay before game turns off
    
}

// Validate Game Sequence against Player Sequence
  /* -- Check if the player input matches game selection
     -- If in normal mode, replay sequence - unlimited tries if presses wrong button
     -- If in Strict mode, press wrong button, end round and start from 01
     -- When player successfully reaches round 20, player wins and game ends */
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
            setTimeout(play, 500);
        }
    } else {
        console.log("YAY!");
        if (playerSequence.length === gameSequence.length) {
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