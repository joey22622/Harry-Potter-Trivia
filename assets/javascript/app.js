$(document).ready(function(){
// VARIABLES

//     Q&A BANK ARRRAY OF OBJECTS[]
//         {QUESTION , ANSWERS [{TEXT , CORRECT, GUESS}] , ASKED}
const qBank = [
    {
// What is the name of Harry Potter's owl?
// Errol
// Pigwidgeon
// Steve
// Hedwig
    question: "What is the name of Harry Potter's owl?",
    answers: [
        { text : "Errol" , correct : false , guess : false},
        { text : "Pigwidgeon" , correct : false , guess : false},
        { text : "Steve" , correct : false , guess : false},
        { text : "Hedwig" , correct : true , guess : false}
    ],
    asked : false
    },{
// The late Alan Rickman is famous for playing what Harry Potter character?
// Severus Snape
// Albus Dumbledore
// Aberforth Dumbledore
// Arthur Weasley
    question: "The late Alan Rickman is famous for playing what Harry Potter character?",
    answers: [
        { text : "Severus Snape" , correct : true , guess : false},
        { text : "Albus Dumbledore" , correct : false , guess : false},
        { text : "Aberforth Dumbledore" , correct : false , guess : false},
        { text : "Arthur Weasley" , correct : false , guess : false}
    ],
    asked : false
    },{
// Which of the following is NOT one of the Deathly Hallows?
// Elder Wand
// Cloack of Invisibility
// Pick of Destiny
// Resurrection Stone
    question: "Which of the following is NOT one of the Deathly Hallows?",
    answers: [
        { text : "Elder Wand" , correct : false , guess : false},
        { text : "Cloack of Invisibility" , correct : false , guess : false},
        { text : "Pick of Destiny" , correct : true , guess : false},
        { text : "Resurrection Stone" , correct : false , guess : false}
    ],
    asked : false
    },{
// What is the name of Hagrid's 3-headed dog?
// Fang
// Fluffy
// Norbert
// Rodney
    question: "What is the name of Hagrid's 3-headed dog?",
    answers: [
        { text : "Fang" , correct : false , guess : false},
        { text : "Fluffy" , correct : true , guess : false},
        { text : "Norbert" , correct : false , guess : false},
        { text : "Rodney" , correct : false , guess : false}
    ],
    asked : false
    },{
// During his tenure at Hogwarts, Percy Weasley was which of the following?
// Head boy
// A prat
// Prefect
// All of the above
    question: "During his tenure at Hogwarts, Percy Weasley was which of the following?",
    answers: [
        { text : "Head boy" , correct : false , guess : false},
        { text : "prat" , correct : false , guess : false},
        { text : "Prefect" , correct : false , guess : false},
        { text : "All of the above" , correct : true , guess : false}
    ],
    asked : false
    },{
// What are the names of Harry's parents?
// Arthur and Molly
// Harrison and Harriet
// James and Lily
// Bill and Fleur
    question: "What are the names of Harry's parents?",
    answers: [
        { text : "Arthur and Molly" , correct : false , guess : false},
        { text : "Harrison and Harriet" , correct : false , guess : false},
        { text : "James and Lily" , correct : true , guess : false},
        { text : "Bill and Fleur" , correct : false , guess : false}
    ],
    asked : false
    },{
// Remus Lupin was the D.A.D.A. teacher in Harry's __ year at Hogwarts?
// First
// Second
// Third
// What in Merlin's beard is D.A.D.A?
    question: "Remus Lupin was the D.A.D.A. teacher in Harry's __ year at Hogwarts?",
    answers: [
        { text : "First" , correct : false , guess : false},
        { text : "Second" , correct : false , guess : false},
        { text : "Third" , correct : true , guess : false},
        { text : "What in Merlin's beard is D.A.D.A?" , correct : false , guess : false}
    ],
    asked : false
    },{
// What is Hermione Granger's patronus?
// Otter
// Beaver
// Ron Weasley
// Beetle
    question: "What is Hermione Granger's patronus?",
    answers: [
        { text : "Otter" , correct : true , guess : false},
        { text : "Beaver" , correct : false , guess : false},
        { text : "Ron Weasley" , correct : false , guess : false},
        { text : "Beetle" , correct : false , guess : false}
    ],
    asked : false
    },{
// Who was Dumbledore's little sister?
// Aberforth
// Ariana
// Pansy
// Parvarti
    question: "Who was Dumbledore's little sister?",
    answers: [
        { text : "Aberforth" , correct : false , guess : false},
        { text : "Ariana" , correct : true , guess : false},
        { text : "Pansy" , correct : false , guess : false},
        { text : "Parvarti" , correct : false , guess : false}
    ],
    asked : false
    },{
// Harry Potter's phantom potions wiz, the Half Blood Prince, is better known as...
// Draco Malfoy
// Dobby
// Severus Snape
// Salazar Slytherin
    question: "Harry Potter's phantom potions wiz, the Half Blood Prince, is better known as...",
    answers: [
        { text : "Draco Malfoy" , correct : false , guess : false},
        { text : "Dobby" , correct : false , guess : false},
        { text : "Severus Snape" , correct : true , guess : false},
        { text : "Salazar Slytherin" , correct : false , guess : false}
    ],
    asked : false
    },{
// In the Quidditch world cup preceeding Harry's 4th year, the Irish defeated which team?
// Manchester U
// Hungarians
// Bulgarians
// Romanians
    question: "In the Quidditch world cup preceeding Harry's 4th year, the Irish defeated which team?",
    answers: [
        { text : "Manchester United" , correct : false , guess : false},
        { text : "Hungarians" , correct : false , guess : false},
        { text : "Bulgarians" , correct : true , guess : false},
        { text : "Romanians" , correct : false , guess : false}
    ],
    asked : false
    },{
// Which sinister duo owns a dark arts-peddling store in Knockturn Alley
// Crabbe and Goyle
// Flourish and Blott
// Parvarti and Padma
// Borgin and Burke
    question: "Which sinister duo owns a dark arts-peddling store in Knockturn Alley?",
    answers: [
        { text : "Crabbe and Goyle" , correct : false , guess : false},
        { text : "Flourish and Blott" , correct : false , guess : false},
        { text : "Parvarti and Padma" , correct : false , guess : false},
        { text : "Borgin and Burke" , correct : true , guess : false}
    ],
    asked : false
    },{
// Neville Longbottom lives with his grandmother because...
// His parents were tortured to insanity
// She lets him have fire whiskey
// The entire Longbottom family shares a suburban London manor
// It's complicated
    question: "Neville Longbottom lives with his grandmother because...",
    answers: [
        { text : "His parents were tortured to insanity" , correct : true , guess : false},
        { text : "She lets him have fire whiskey" , correct : false , guess : false},
        { text : "The entire Longbottom family shares a suburban London manor" , correct : false , guess : false},
        { text : "It's complicated" , correct : false , guess : false}
    ],
    asked : false
    },{
// Lucius Malfoy's wand contains what core?
// Acromantula silk
// Dragon heart string
// Phoenix feather
// Elixer of life
    question: "Lucius Malfoy's wand contains what core?",
    answers: [
        { text : "Acromantula silk" , correct : false , guess : false},
        { text : "Dragon heart string" , correct : true , guess : false},
        { text : "Phoenix feather" , correct : false , guess : false},
        { text : "Elixer of life" , correct : false , guess : false}
    ],
    asked : false
    }

];

//     Q&A LEFT  -- WILL EQUAL QBANK
var qLeft = [];
var current;

//     HECKLES [ 
//     ]
var heckle = {
    great : [
        "Excellent work Ms. Granger",
        "50 points for Gryffindor",
        "Outstanding",
        "You'd be a good fit for the 'Slug Club'"
    ],
    good : [
        "Exceeds expectations",
        "We have a prefect in our midst",
        "Merlin's beard! Well done!"
    ],
    average : [
        "Three Broomsticks is hiring, that's about as far as you'll go",
        "Maybe just stick to quidditch",
        "I think you tied with Neville"

    ],
    poor : [
        "You're about as useful as a degree in Herbology",
        "I've seen better scores from squibs",
        "You must be a Dursley"
    ],
    awful : [
        "Try laying off the butter beer next time",
        "O.W.L. score: Troll",
        "Was your mother a giant?",
        
    ]
};






var backgrounds = [
    "assets/images/_0000_background.jpg",
    "assets/images/_0001_background.jpg",
    "assets/images/_0002_background.jpg",
    "assets/images/_0003_background.jpg",
    "assets/images/_0004_background.jpg",
    "assets/images/_0005_background.jpg",
    "assets/images/_0006_background.jpg"
];
var backLayer1 = []
var backLayer2 = []

function random(array){
    var r = Math.floor(Math.random()*array.length);
    return r;
}

function randomizeImages(){
    var toggle = !toggle;
    for (var i = 0; i < backgrounds.length; i++){
    var r = random(backgrounds);
        if(toggle){
            backLayer1.push(backgrounds[r]);
            console.log(1);
        } else {
            backLayer2.push(backgrounds[r]);
            console.log(2);
        }
        backgrounds.splice(r , 1);
        console.log(backgrounds.length);
        toggle = !toggle;
        i = -1;
    }
    console.log("1" + backLayer1);
    console.log("2" + backLayer2);
    $(".background-1").attr("src" , backLayer1[random(backLayer1)]);
    $(".background-2").attr("src" , backLayer2[random(backLayer2)]);
}
var imageToggle = !imageToggle;
function rotateImages(){
    
    if(imageToggle){
        $(".background-1").css("opacity" , "0");
        setTimeout(function(){
            $(".background-1").attr("src" , backLayer1[random(backLayer1)]);
            },1000);
    } else {
        $(".background-1").css("opacity" , "1");
        setTimeout(function(){
        $(".background-2").attr("src", backLayer2[random(backLayer2)]);
        },1000);
    }
    imageToggle = !imageToggle;
}


//     ACTION BUTTON ARRAY OF OBJECTS []
//     {BUTTON TEXT[], BUTTON FUNCTION}
//         NEXT QUESTION
//         START GAME
//         PLAY AGAIN
var action = [
    {text : "Start Game" , function : startGame},
    {text : "Pass" , function : loadQuestion},
    {text : "Play Again" , function : startGame}
];

var actionStatus;
   
//     TOTAL = BANK.LENGTH   
var total = qBank.length; 
//     ANSWERED = 0
var answered = total - qLeft.length;
//     INCORRECT = 0
var wrong = 0;
//     UNANSWERED = 0
var right = 0;
//     GP = 0
gp = 0;
//     CLOCK = 30;
//var clock;

//  BOOLEANS
var active = false;
var timer;
//CALLBACKS

function welcome(){
    $(".message").text("Welcome to Hogwarts! Test your knowledge.");
}

// DEFINE BUTTON'S CURRENT CLICK ACTION , PRINT CORRESPONDING INNER HTML
function actionLoad(){ 
    if(gp === 0 && active == false){
        actionStatus = 0;
    } else if(gp > 0 && active == false){
        actionStatus = 2;
    } else{
        actionStatus = 1;
    }

    $(".action").text(action[actionStatus].text);
}




// BASIC PROCESS:

// ON PAGE LOAD
//     GAME RESET
//         Q&ALEFT = Q&A BANK
//         Q&A.ASKED = FALSE
//         ACTION BUTTON APPEARS
//         MESSAGE / QUESTION WINDOW APPEARS
function reset(){
        welcome();
        actionLoad();
        randomizeImages();
}

function startGame(){
    reset();
    qLeft = [].concat(qBank);
    active = true;
    loadQuestion();
    console.log("start game");
    console.log(qBank);

}
// ON ACTION BUTTON CLICK
    function loadQuestion(){
        rotateImages();
        clearInterval(timer);
        if(qLeft.length > 0){
            console.log("qbank" + qBank);
//                 CLEAR INTERVAL FUNCTION

            $(".message").empty();
            $(".answers").empty();
            var i = Math.floor(Math.random()*qLeft.length);
            current = qLeft[i];
            qLeft.splice(i, 1);
            console.log(current);
            console.log("i: " + i);
            console.log("qLeft" + qLeft.length);
            
//         MESSAGE = QUESTION
            $(".message").text(current.question);

//         ANSWERS = ANSWER TEXT            
            for(var j = 0; j < current.answers.length; j++){
                var option = $("<button class = 'option option-"+ j +"'>");
                option.text(current.answers[j].text);
                option.attr("data-option" , j);
                $(".answers").append(option);
            }
//             SET QUESTION TIMEOUT
//                 CLOCK = 30
//                 SET 1 SECOND INTERVAL FUNCTION
//                 PRINT CLOCK TO CLOCK DIV
//                 CLOCK --
//                 IF CLOCK === 0
//                     NEXT QUESTION / SUBMIT ANSWER
//                     SET QUESTION TIMEOUT

            var clock = 30;
            timer = setInterval(countDown, 1000);
            function countDown(){
                if(clock >= 0){
                    console.log(clock);
                    $(".clock").text(clock);
                    $(".clock").css("width" , eval(clock/30*100)+"%");
                    $(".clock").css("border-left" , "solid 2px rgba(255,255,255," + eval((30-clock)*.033) +")");
                    $(".clock").css("border-right" , "solid 2px rgba(255,255,255," + eval((30-clock)*.033) +")");

                    clock--;
                } else{
                    loadQuestion();
                }
            }
        } else {
            endGame()
        }
    }




//                 MESSAGE WINDOW CHANGES TO QUESTION
//                      DATA-TRIVIA ATTR ADDED == ARRAY INDEX
//                 ANSWER BANK APPEARS
                    // DATA-TRIVIA ATTR ADDED == ARRAY INDEX
//                 SET QUESTION TIMEOUT
//                 SET BUTTON TO BUTTON ARRAY.SKIP QUESTION
        
//         ELSE 
//             END GAME



// ON SKIP QUESTION OR ANSWER.CLICK
//     IF ANSWER CLICKED SET THIS.ATTR.DATA-VALUE - TRUE
//         IF Q&A[DATA-VALUE].ANSWERS === TRUE  :   
//                 THEN CORRECT ++
//         ELSE : 
//                 INCORRECT ++
//     EMPTY MESSAGE
//     EMPTY ANSWERS
//     CHOOSE QUESTION

function chooseAnswer (){
    var i = $(this).attr("data-option");
    if(current.answers[i].correct){
        right++;
        console.log("horray!")
        console.log("right: " + right);
    } else {
        wrong++;
        console.log("wrong: " + wrong);
        console.log("dumbass");
    }
    loadQuestion();
    actionLoad();

    console.log(i);
}


// END GAME
//     PRINT SCORE IN ANSWERS
//         CORRECT
//         INCORRECT
//     CLEAR TIMEOUT FUNCTION
//     GP ++
//     ACTIVE = FALSE
//     PRINT HECKLE MESSAGE
//         IF CORRECT === TOTAL
//             GOOD MESSAGE
//         IF CORRECT > TOTAL / .8
//             OK MESSAGE
//         IF CORRECT > TOTAL / .6
//             BLESS YOUR HEART
//         IF CORRECT > TOTAL / .4
//             GO HOME, YOU'RE DRUNK
//         IF CORRECT > TOTAL / .2
//             HAHAHAA WOW
    
//     ACTION BUTTON : NEW GAME LOADS
function endGame(){
    active = false;
    gp++;
    console.log("total " + total);

    $(".message , .answers").empty();
    var scoreRight = $("<div class = 'score correct'>");
    var scoreWrong = $("<div class = 'score incorrect'>");
    scoreRight.text("Correct:  " + right);
    scoreWrong.text("Incorrect:  " + wrong);
    $(".answers").append(scoreRight, scoreWrong);
    judge();

}
function hecklePick(curve){
    var i = Math.floor(Math.random()*curve.length);
    $(".message").text(curve[i]);
    console.log("heckle");
}

function judge(){
    if(right === total){
        hecklePick(heckle.great);
    } else if (right > (total*.8)){
        hecklePick(heckle.good);
    } else if (right > (total*.6)){
        hecklePick(heckle.average);
    } else if (right > (total*.4)){
        hecklePick(heckle.poor);
    } else {
        hecklePick(heckle.awful);
    }
}


function test (number){
    console.log(number);
}


$(document).ready(reset);
$("body").on("click" , ".option" , chooseAnswer);
$("body").on("click" , ".action" , function(){
    action[actionStatus].function();
    actionLoad();
});
});











//Questions : 


// What is the name of Harry Potter's owl?
// Errol
// Pigwidgeon
// Steve
// Hedwig

// The late Alan Rickman is famous for playing what Harry Potter character?
// Severus Snape
// Albus Dumbledore
// Aberforth Dumbledore
// Arthur Weasley

// Which of the following is NOT one of the Deathly Hallows?
// Elder Wand
// Cloack of Invisibility
// Pick of Destiny
// Resurrection Stone

// What is the name of Hagrid's 3-headed dog?
// Fang
// Fluffy
// Norbert
// Rodney

// During his tenure at Hogwarts, Percy Weasley was which of the following?
// Head boy
// A prat
// Prefect
// All of the above

// What are the names of Harry's parents?
// Arthur and Molly
// Harrison and Harriet
// James and Lily
// Bill and Fleur

// Who was Dumbledore's little sister?
// Aberforth
// Ariana
// Pansy
// Parvarti

// What is Hermione Granger's patronus?
// Otter
// Beaver
// Ron Weasley
// Beetle

// Remus Lupin was the D.A.D.A. teacher in Harry's __ year at Hogwarts?
// First
// Second
// Third
// What the hell is D.A.D.A?

// Harry Potter's phantom potions wiz, the Half Blood Prince, is better known as...
// Draco Malfoy
// Dobby
// Severus Snape
// Salazar Slytherin

// In the Quidditch world cup preceeding Harry's 4th year, the Irish defeated which team?
// Manchester U
// Hungarians
// Bulgarians
// Romanians

// Lucius Malfoy's wand contains what core?
// Acromantula silk
// Dragon heart string
// Phoenix feather
// Elixer of life

// Neville Longbottom lives with his grandmother because...
// His parents were tortured to insanity
// She lets him have fire whiskey
// The entire Longbottom family shares a suburban London manor
// It's complicated


// Which sinister duo owns a dark arts-peddling store in Knockturn Alley
// Crabbe and Goyle
// Flourish and Blott
// Parvarti and Padma
// Borgin and Burke




