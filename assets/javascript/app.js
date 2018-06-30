$(document).ready(function(){
// VARIABLES

//     Q&A BANK ARRRAY OF OBJECTS[]
//         {QUESTION , ANSWERS [{TEXT , CORRECT, GUESS}] , ASKED}
const qBank = [
    {
    question: "What is the name of Harry Potter's owl?",
    answers: [
        { text : "Errol" , correct : false , guess : false},
        { text : "Pigwidgeon" , correct : false , guess : false},
        { text : "Steve" , correct : false , guess : false},
        { text : "Hedwig" , correct : true , guess : false}
    ],
    asked : false
    },{
    question: "The late Alan Rickman is famous for playing what Harry Potter character?",
    answers: [
        { text : "Severus Snape" , correct : true , guess : false},
        { text : "Albus Dumbledore" , correct : false , guess : false},
        { text : "Aberforth Dumbledore" , correct : false , guess : false},
        { text : "Arthur Weasley" , correct : false , guess : false}
    ],
    asked : false
    },{
    question: "Which of the following is NOT one of the Deathly Hallows?",
    answers: [
        { text : "Elder Wand" , correct : false , guess : false},
        { text : "Cloak of Invisibility" , correct : false , guess : false},
        { text : "Pick of Destiny" , correct : true , guess : false},
        { text : "Resurrection Stone" , correct : false , guess : false}
    ],
    asked : false
    },{
    question: "What is the name of Hagrid's 3-headed dog?",
    answers: [
        { text : "Fang" , correct : false , guess : false},
        { text : "Fluffy" , correct : true , guess : false},
        { text : "Norbert" , correct : false , guess : false},
        { text : "Rodney" , correct : false , guess : false}
    ],
    asked : false
    },{
    question: "During his tenure at Hogwarts, Percy Weasley was which of the following?",
    answers: [
        { text : "Head boy" , correct : false , guess : false},
        { text : "prat" , correct : false , guess : false},
        { text : "Prefect" , correct : false , guess : false},
        { text : "All of the above" , correct : true , guess : false}
    ],
    asked : false
    },{
    question: "What are the names of Harry's parents?",
    answers: [
        { text : "Arthur and Molly" , correct : false , guess : false},
        { text : "Harrison and Harriet" , correct : false , guess : false},
        { text : "James and Lily" , correct : true , guess : false},
        { text : "Bill and Fleur" , correct : false , guess : false}
    ],
    asked : false
    },{
    question: "Remus Lupin was the D.A.D.A. teacher in Harry's __ year at Hogwarts?",
    answers: [
        { text : "First" , correct : false , guess : false},
        { text : "Second" , correct : false , guess : false},
        { text : "Third" , correct : true , guess : false},
        { text : "What in Merlin's beard is D.A.D.A?" , correct : false , guess : false}
    ],
    asked : false
    },{
    question: "What is Hermione Granger's patronus?",
    answers: [
        { text : "Otter" , correct : true , guess : false},
        { text : "Beaver" , correct : false , guess : false},
        { text : "Ron Weasley" , correct : false , guess : false},
        { text : "Beetle" , correct : false , guess : false}
    ],
    asked : false
    },{
    question: "Who was Dumbledore's little sister?",
    answers: [
        { text : "Aberforth" , correct : false , guess : false},
        { text : "Ariana" , correct : true , guess : false},
        { text : "Pansy" , correct : false , guess : false},
        { text : "Parvarti" , correct : false , guess : false}
    ],
    asked : false
    },{
    question: "Harry Potter's phantom potions wiz, the Half Blood Prince, is better known as...",
    answers: [
        { text : "Draco Malfoy" , correct : false , guess : false},
        { text : "Dobby" , correct : false , guess : false},
        { text : "Severus Snape" , correct : true , guess : false},
        { text : "Salazar Slytherin" , correct : false , guess : false}
    ],
    asked : false
    },{
    question: "In the Quidditch world cup preceeding Harry's 4th year, the Irish defeated which team?",
    answers: [
        { text : "Manchester United" , correct : false , guess : false},
        { text : "Hungarians" , correct : false , guess : false},
        { text : "Bulgarians" , correct : true , guess : false},
        { text : "Romanians" , correct : false , guess : false}
    ],
    asked : false
    },{
    question: "Which sinister duo owns a dark arts-peddling store in Knockturn Alley?",
    answers: [
        { text : "Crabbe and Goyle" , correct : false , guess : false},
        { text : "Flourish and Blott" , correct : false , guess : false},
        { text : "Parvarti and Padma" , correct : false , guess : false},
        { text : "Borgin and Burke" , correct : true , guess : false}
    ],
    asked : false
    },{
    question: "Neville Longbottom lives with his grandmother because...",
    answers: [
        { text : "His parents were tortured to insanity" , correct : true , guess : false},
        { text : "She lets him have fire whiskey" , correct : false , guess : false},
        { text : "The entire Longbottom family shares a suburban London manor" , correct : false , guess : false},
        { text : "It's complicated" , correct : false , guess : false}
    ],
    asked : false
    },{
    question: "Lucius Malfoy's wand contains what core?",
    answers: [
        { text : "Acromantula silk" , correct : false , guess : false},
        { text : "Dragon heart string" , correct : true , guess : false},
        { text : "Phoenix feather" , correct : false , guess : false},
        { text : "Elixir of life" , correct : false , guess : false}
    ],
    asked : false
    }

];

// Spectrum of compliments - heckles that print on the page at the end, depending on user score
var heckle = {
    great : [
        "Excellent work Ms. Granger",
        "50 points for Gryffindor",
        "O.W.L. score: Outstanding",
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

//array of background images that print randomly to page when transitioning between questions
var backgrounds = [
    "assets/images/0_background.jpg",
    "assets/images/1_background.jpg",
    "assets/images/2_background.jpg",
    "assets/images/3_background.jpg",
    "assets/images/4_background.jpg",
    "assets/images/5_background.jpg",
    "assets/images/6_background.jpg"
];

//ACTION BUTTON ARRAY OF OBJECTS []
//{BUTTON TEXT[], BUTTON FUNCTION}

var action = [
    {text : "Start Game" , function : startGame},
    {text : "Pass" , function : loadQuestion},
    {text : "Play Again" , function : startGame}
];

//locations to send randomly divided image bank
var backLayer1 = [];
var backLayer2 = [];

// toggles between true and false everytime it is redeclared
// used to swap between each image array
var imageToggle = !imageToggle;


var qLeft = [];
var current;

var actionStatus;
   
//     TOTAL = BANK.LENGTH   
var total = qBank.length; 
var answered = total - qLeft.length;
var wrong = 0;
var right = 0;
gp = 0;
//  BOOLEANS
var active = false;
var timer;


//grabs random index of array
function random(array){
    var r = Math.floor(Math.random()*array.length);
    return r;
}

//randomly divides backgrounds array into two new arrays
function randomizeImages(){
    var toggle = !toggle;
    for (var i = 0; i < backgrounds.length; i++){
    var r = random(backgrounds);
        if(toggle){
            backLayer1.push(backgrounds[r]);
        } else {
            backLayer2.push(backgrounds[r]);
        }
        backgrounds.splice(r , 1);
        toggle = !toggle;
        i = -1;
    }

    $(".background-1").attr("src" , backLayer1[random(backLayer1)]);
    $(".background-2").attr("src" , backLayer2[random(backLayer2)]);
}

//uses imageToggle boolean to fade one image in while swapping out the covered image
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



//CALLBACKS

// displays first message to page on load
function welcome(){
    $(".message").text("Welcome to Hogwarts! Test your knowledge.");
}

// defines action button's active click event as well as inner html
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

//resets game
function reset(){
        welcome();
        actionLoad();
        randomizeImages();
        wrong = 0;
        right = 0;
}

//initializes game
function startGame(){
    $(".action").addClass("pass");
    reset();
    qLeft = [].concat(qBank);
    active = true;
    loadQuestion();

}
//loads question when answer or action button is clicked
//disables countdown timer, rotates background images
    function loadQuestion(){
        rotateImages();
        clearInterval(timer);
        if(qLeft.length > 0){

            $(".message").empty();
            $(".answers").empty();
            var i = Math.floor(Math.random()*qLeft.length);
            current = qLeft[i];
            qLeft.splice(i, 1);

// prints the question property inside question object to page
            $(".message").text(current.question);

// prints answers array from inside question object to page       
            for(var j = 0; j < current.answers.length; j++){
                var option = $("<button class = 'option option-"+ j +"'>");
                option.text(current.answers[j].text);
                option.attr("data-option" , j);
                $(".answers").append(option);
            }

// sets a timer at 30 seconds that counts down until zero or until an answer is clicked
// increases opacity of clock incrementally from 0 to 1
// incrementally decreases width from 100% to 0 (shifting borders inward)
            var clock = 30;
            timer = setInterval(countDown, 1000);
            function countDown(){
                if(clock >= 0){
                    $(".clock p").text(clock);
                    $(".clock").css("width" , eval(clock/30*100)+"%");
                    $(".clock").css("border-left" , "solid 2px rgba(255,255,255," + eval((30-clock)*.033) +")");
                    $(".clock").css("border-right" , "solid 2px rgba(255,255,255," + eval((30-clock)*.033) +")");

                    clock--;
                } else{
                    loadQuestion();
                    wrong++;
                }
            }
        } else {
            endGame()
        }
    }



//compares clicked answer to correct property inside question object, adds to right or wrong
function chooseAnswer (){
    var i = $(this).attr("data-option");
    if(current.answers[i].correct){
        right++;
    } else {
        wrong++;
    }
    loadQuestion();
    actionLoad();
}


// Disables game play, increases number of games played
// Prints score to page
// Displays message through judge() callback
function endGame(){
    
    active = false;
    gp++;
    $(".pass").removeClass("pass");
    $(".message , .answers").empty();
    var scoreRight = $("<div class = 'score correct'>");
    var scoreWrong = $("<div class = 'score incorrect'>");
    scoreRight.text("Correct:  " + right);
    scoreWrong.text("Incorrect:  " + wrong);
    $(".answers").append(scoreRight, scoreWrong);
    judge();

}

// grabs random message from array inside heckle objects
function hecklePick(curve){
    var i = Math.floor(Math.random()*curve.length);
    $(".message").text(curve[i]);
}
//uses hecklePick callback to grab message inside the score range of the user
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


//jQuery events
$(document).ready(reset);
$("body").on("click" ,  ".pass", function(){
    wrong++;
});
$("body").on("click" , ".option" , chooseAnswer);
$("body").on("click" , ".action" , function(){
    action[actionStatus].function();
    actionLoad();
});
});



