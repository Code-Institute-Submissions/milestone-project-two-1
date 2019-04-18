<h2>THE PROJECT</h2>

Objective is to build a simple single-player memory game inspired by <a href="https://en.wikipedia.org/wiki/Simon_(game)">Simon</a>.

Simon is an electronic game of memory skill, which creates a series of tones and lights that the user needs to remember when the game creates a sequence to repeat.
    
The aim of this inspired version of the game is to test how good your memory is by remembering the sequence of patterns "Simon" produces. The game has four colored buttons, 
each producing a particular tone when they're pressed or activated by the game. Each round in the game consists of "Simon" lighting up one or more buttons in a random order, 
after which the player must reproduce that order by pressing the buttons. As the game progresses, the number of buttons to be pressed increases, and gets more difficult to remember
with each round.

This version I have created is a very simplistic version of the game, with easy functionality. The rules for this game are simple:

    <li> Toggle on/off button to activate game.</li>
    <li> When you press the Start Button, it lights up to bright green, counter turns to 01, and first sequence of buttons lights up, along with a corresponding sound. 
    This is automatically in normal mode. In this mode. you get unlimited amount of tries to remember correct sequence.</li>
    <li> If Strict Mode is selected, button will light up bright red. In this mode, if you fail to remember a sequence correctly, you will start again from round 01.</li>
    <li> If you select wrong button, a buzzer will sound, and counter will flash "??". If in normal mode, you may start again from the current round. If in strict mode, you will start back at 01.
    <li> You win the game once you reach round 20, and counter flashes with YAY!</li>

The reason I chose this for my project was to challenge my skills in JavaScript & jQuery, as well as practice my ability to use logic in the form of an interactive
game. 

<h2>UX</h2>
As this is a web based inspired version of the Simon game, the intended audience is for anyone with access to a desktop or mobile device, who wants to 
test their memory in a fun, interactive and simple way.

The user interface is clean and minimalistic, to make the user feel less overwhelmed with the aesthetic. 
The functionality is simple rules, which means 

Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:

As a user type, I want to perform an action, so that I can achieve a goal.
This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.

Features
In this section, you should go over the different parts of your project, and describe each in a sentence or so.

Existing Features
Feature 1 - allows users X to achieve Y, by having them fill out Z
...
For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

Features Left to Implement
Another feature idea
Technologies Used
In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

JQuery
The project uses JQuery to simplify DOM manipulation.
Testing
In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

Contact form:
Go to the "Contact Us" page
Try to submit the empty form and verify that an error message about the required fields appears
Try to submit the form with an invalid email address and verify that a relevant error message appears
Try to submit the form with all inputs valid and verify that a success message appears.
In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

Deployment
This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:

Different values for environment variables (Heroku Config Vars)?
Different configuration files?
Separate git branch?
In addition, if it is not obvious, you should also describe how to run your code locally.

Credits
Content
The text for section Y was copied from the Wikipedia article Z
Media
The photos used in this site were obtained from ...
Acknowledgements
I received inspiration for this project from X



