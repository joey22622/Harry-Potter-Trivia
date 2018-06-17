# TriviaGame

**DESCRIPTION:** Trivia game that asks Harry Potter related multiple choice questions


**GAME PLAY**

* Upon starting game, player receives a full array of randomized multiple choice quesions.
* Moving to each question initiates a countdown timer that will default to an incorrect answer once reaching zero
* Upon completion of the game, the final count of correct and incorrect guesses is printed and the user is prompted to play again


**PROGRAMMING / FUNCTIONALITY**

* App is built using the following languages/libraries 
  - *HTML* 
  - *CSS* 
  - *JavaScript*
  - *jQuery*
* Questions are ramdomly ordered and stored in a new array for each game
* A custom slideshow rotates photos between questions
  - Slideshow functions with 2 absolutely positioned divs that load a new image while hidden and take turns fading in
* Game ends by a function running that determines the percentage of correct answers.
  - Depending on the final score, a random compliment or insult will be displayed on the page that is selected from arrays that correspond with different score ranges.


**FILE STRUCTURE**

TriviaGame
├── README.md
├── assets
│   ├── css
│   │   ├── reset.css
│   │   └── style.css
│   ├── images
│   │   ├── 0_background.jpg
│   │   ├── 1_background.jpg
│   │   ├── 2_background.jpg
│   │   ├── 3_background.jpg
│   │   ├── 4_background.jpg
│   │   ├── 5_background.jpg
│   │   └── 6_background.jpg
│   └── javascript
│       └── app.js
├── index.html
└── server.js