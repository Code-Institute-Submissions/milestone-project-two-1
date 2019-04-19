<h2>THE PROJECT</h2>

Objective is to build a simple single-player memory game inspired by <a href="https://en.wikipedia.org/wiki/Simon_(game)">Simon</a>.

Simon is an electronic game of memory skill, which creates a series of tones and lights that the user needs to remember when the game creates a sequence to repeat.
    
The aim of this inspired version of the game is to test how good your memory is by remembering the sequence of patterns "Simon" produces. The game has four colored buttons, 
each producing a particular tone when they're pressed or activated by the game. Each round in the game consists of "Simon" lighting up one or more buttons in a random order, 
after which the player must reproduce that order by pressing the buttons. As the game progresses, the number of buttons to be pressed increases, and gets more difficult to remember
with each round.

This version I have created is a very simplistic version of the game, with easy functionality. The rules for this game are simple:

- Toggle on/off button to activate game.
- When you press the Start Button, it lights up to bright green, counter turns to 01, and first sequence of buttons lights up, along with a corresponding sound. 
- This is automatically in normal mode. In this mode. you get unlimited amount of tries to remember correct sequence.
- If Strict Mode is selected, button will light up bright red. In this mode, if you fail to remember a sequence correctly, you will start again from round 01.
- If you select wrong button, a buzzer will sound, and counter will flash "??". If in normal mode, you may start again from the current round. If in strict mode, you will start back at 01.
- You win the game once you reach round 20, and counter flashes with YAY!

The reason I chose this for my project was to challenge my skills in JavaScript & jQuery, as well as practice my ability to use logic in the form of an interactive
game. 

<h2>UX</h2>
As this is a web based inspired version of the Simon game, the intended audience is for anyone with access to a desktop or mobile device, who wants to test their memory in a fun, interactive and simple way.

The user interface is clean and minimalistic, to make the user feel less overwhelmed with the aesthetic. The functionality is simple, with minimal rules, so the user stays engaged and can concentrate on remembering the sequence of patterns.

<h4><a href="https://drive.google.com/file/d/16SQbtiP7gVIah0mgZRUph80ilcTBCP-W/view?usp=sharing" target="_blank">The final product looks like this when in action.</a></h4>

<h4>USER STORIES</h4>

To map out of the construct of the game, I needed to establish a series of user stories so that when we imagine an action being performed, a goal is achieved by that action from the user. 

Here are a series of User Stories that formed the basis of the rules:

- I am presented with a series of buttons that are played in a random sequence.
- I am then prompted to press the button correctly, in which I then see the game play a series of button presses, but with an extra step.
- I hear a sound that corresponds to each button - both when the series of button presses plays, and when I as the player, presses a button.
- If I press the wrong button, I am prompted so by the game, and that series of button presses starts again to remind me of the pattern so I can try again.
- I can see how many rounds I have completed in the current series of button presses.
- If I want to restart, I can hit a button to do so, and the game will return to a single round.
- I can play in strict mode where if I get a button press wrong, it prompts me that I have done so, and the game restarts at a new random series of button presses.
- I can win the game by correctly reaching round 20. I am prompted of my win, then the game turns off, indicating I can start again by turning the game back on.

After mapping out the user stories, I then started to ponder on the design aspect of the game. Did I want it to look like the Original Simon Game as possible, or did I want to put my own spin on it... I played around with possibilities, and settled on a simple design that was inspired by the original game. I looked at different images online, and took inspiration from other web based games available as well. Here are some of the rough designs I started with, before settling on this one.

<h4><a href="https://drive.google.com/file/d/1i22JjQYc-K51kR1nxjQ1pgi85ghbFxeW/view?usp=sharing">One</a>, <a href="https://drive.google.com/file/d/1_JXQ_o8ZOlIt_1hneROhLZnfi0bVlyXA/view?usp=sharing">Two</a> & <a href="https://drive.google.com/file/d/1Dj52qeZAGa0W6Qnj1bHydqITQG-GCPzI/view?usp=sharing">Three</a>.</h4>

<h2>FEATURES</h2>

<h4>Existing Features</h4>
Feature 1 - The Game Buttons. The four primary colours indicate the buttons that will light up, based the Game Sequence.
Feature 2 - Game Console - the controls displayed on this board.
Feature 3 - Simom Header - indicates the name of the game.
Feature 4 - Start Button - Pressed to start the round once toggle switch is pressed (see feature 7).
Feature 5 - Counter - Displays the rounds, and prompts when user presses wrong button or wins after 20 rounds.
Feature 6 - Strict Button - press when you want to play the game in a harder mode. Meaning, if you fail to correctly press a button, you automatically restart at round 01.
Feature 7 - Toggle on/off switch - to turn game on or off.
Feature 8 - Sounds - sounds played correspond with the game sequence when each button lights up.

<h4>Features to be Implemented</h4>
Possibly in the future, I will add different modes - easy & hard to accompany the strict mode. 

<h2>TECHNOLOGIES USED</h2>

- <b><a href="https://getbootstrap.com/">Bootstrap 4.3.1</a></b> - used for grid system
- <b><a href="https://jquery.com/">JQuery 3.4.0</a></b> - used for DOM Traversal and Manipulation
- <b><a href="https://fonts.google.com/">Google Fonts</a></b> - used for the fonts across the game application
- <b><a href="https://fonts.google.com/">Google Fonts</a></b>

<h2>TESTING</h2>

- During and throughout the build, the overall website was tested on google chrome using devTools, and testing responsiveness using the device toolbar.
- Tested responsiveness by resizing the window everytime I implemented a new piece of code.
AND also tested it physically viewing it on mobile, tablet, mac and windows laptop, windows desktop, and different browsers (firefox, safari, google chrome, opera)
- The jQuery code was tested in the early stages of the build using Jasmine. Throughout the build, tested the code using console of devTools.
- When adding the javascript code, there was continuous testing of the button elements. CSS & HTML was also tested alongside the JS code, due to it referencing elements of CSS & HTML.
- Checked button sizes so they were responsive and large enough to be clicked in mobile view.
- Ensuring header was resized when viewing on smaller screens (aka mobile) and amending padding-bottom to account for navbar covering half the image when viewing on a smaller screen.
- Validated HTML code via <a href="https://validator.w3.org/">Validator.org</a>, CSS via <a href="https://jigsaw.w3.org/css-validator/">Jigsaw.org</a> and jQuery via <a href="https://www.jslint.com/">JSLint.com</a>

- During and throughout the build, the overall website was tested on google chrome using devTools, and testing responsiveness using the device toolbar.
- Tested responsiveness by resizing the window everytime I implemented a new piece of code.
AND also tested it physically viewing it on mobile, tablet, mac and windows laptop, windows desktop, and different browsers (firefox, safari, google chrome, opera)
- The jQuery code was tested in the early stages of the build using Jasmine. Throughout the build, tested the code using console of devTools.
- When adding the javascript code, there was continuous testing of the button elements. CSS & HTML was also tested alongside the JS code, due to it referencing elements of CSS & HTML.
- Checked button sizes so they were responsive and large enough to be clicked in mobile view.
- Ensuring header was resized when viewing on smaller screens (aka mobile) and amending padding-bottom to account for navbar covering half the image when viewing on a smaller screen.
- Validated HTML code via <a href="https://validator.w3.org/">Validator.org</a>, CSS via <a href="https://jigsaw.w3.org/css-validator/">Jigsaw.org</a> and jQuery via <a href="https://www.jslint.com/">JSLint.com</a>