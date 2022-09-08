const prevScores = document.getElementById("prevScores");
const seconds = document.getElementById("seconds");
const timeLeft = document.getElementById("countdown");
const start = document.getElementById("start");
const startButton = document.getElementById("startButton");
const answers = document.getElementById("answers");
const question = document.getElementById("questions");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const result = document.getElementById("result");
const scoreView = document.getElementById("scoreView");
const score = document.getElementById("finalScore");
const submitButton = document.getElementById("submitButton");
const nameinfo = document.getElementById("userName");
const prevScoresPage = document.getElementById("prevScoresPage");
const newScores = document.getElementById("newScores");
const returnButton = document.getElementById("returnButton")

var secondsLeft;
var timeleft;

const quizQuestions = [
    {
        question: "What element is a container for all the head elements, and may include the document title, scripts, styles, meta information, and more?",
        options: ["<br></br>", "<title></title>", "<body></body>", "<head></head>"],
        correctAnswer: 3
    },
    {
        question: "What is the CSS property that offers extra information about something when you hover over an element?",
        options: ["Hint", "Info Block", "Tutorial", "Tooltip"],
        correctAnswer: 3
    },
    {
        question: "CSS stands for ____ Style Sheets.",
        options: ["Cascading", "Concept", "Concave", "Curious"],
        correctAnswer: 0
    },
    {
        question: "In CSS and HTML colors are displayed by combining these three shades of light.",
        options: ["Muave, Salmon, Black", "Red, Green, Blue", "Yellow, Blue, Green", "Violet, Red, Orange"],
        correctAnswer: 1
    },
    {
        question: "What is the name of the statement that is used to exit or end a loop?",
        options: ["Break Statement", "Falter Statement", "Conditional Statement", "Close Statment"],
        correctAnswer: 0
    },
    {
        question: "In JavaScript, what is used in conjunction with HTML to “react” to certain elements?",
        options: ["RegExp" , "Boolean" , "Condition" , "Events"],
        correctAnswer: 3
    },
    {
        question: "What is a JavaScript element that represents either TRUE or FALSE values?",
        options: ["Boolean" , "RegExp" , "Events" , "Condition"],
        correctAnswer: 0
    },
    {
        question: "What are the identifiers called that cannot be used as variables or function names?",
        options: ["Reserved Words" , "Favorites" , "Constants" , "Concrete Terms"],
        correctAnswer: 0
    }
];

var amountCorrect = 0;

startButton.addEventListener('click', startQuiz);

function questionCycle() {
    question.textContent = quizQuestions[quizList].question;
    answer1.textContent = quizQuestions[quizList].options[0];
    answer2.textContent = quizQuestions[quizList].options[1];
    answer3.textContent = quizQuestions[quizList].options[2];
    answer4.textContent = quizQuestions[quizList].options[3];
};

function startQuiz() {

    quizList = 0;
    secondsLeft = 60;
    timeLeft.textContent = secondsLeft;

    questionCycle();

    start.style.display = "none";
    answers.style.display = "block";
    seconds.style.display = "block";

    var interval = setInterval(function () {
        secondsLeft--;
        timeLeft.textContent = secondsLeft
        if (secondsLeft === 0) {
            clearInterval(interval);
            if (quizList < quizQuestions.length - 1) {
                quizOver();
            }
        }
    }, 1000);
};

function choiceA() { 
    correctChoice(0); 
};
function choiceB() { 
    correctChoice(1); 
};
function choiceC() { 
    correctChoice(2); 
};
function choiceD() { 
    correctChoice(3); 
};

answer1.addEventListener("click", choiceA);
answer2.addEventListener("click", choiceB);
answer3.addEventListener("click", choiceC);
answer4.addEventListener("click", choiceD);

function correctChoice(correctAnswer) {
    result.style.display ="block";
    if (quizQuestions[quizList].correctAnswer === correctAnswer) {
        amountCorrect++;
        result.textContent ="Correct!😉"
    } else {
        timeLeft.textContent = secondsLeft;
        result.textContent ="Incorrect😔"
    }
    quizList++
    if (quizList < quizQuestions.length) {
        questionCycle();
    } else {
        quizOver();
    }
};

function quizOver() {
    answers.style.display = "none";
    start.style.display = "none";
    scoreView.style.display = "block";
    score.textContent = amountCorrect;
}

submitButton.addEventListener("click", function (event) { 
    savedScores(event); 
});

var storingScores = localStorage.getItem("high scores")
var scoreParse= JSON.parse(storingScores);

function savedScores(event) {
    event.preventDefault();
    if (nameinfo.value === "") {
        window.alert("Please enter username to save score");
        return;
    }
    prevScoresPage.style.display = "block";

    var scoresList;
    
    if (storingScores === null) {
        scoresList = [];
    } else {
        scoresList = JSON.parse(storingScores)
    }
    var userInput = {
        nameinfo: nameinfo.value,
        score: score.textContent
    };

    scoresList.push(userInput);

    var scoreStorage = JSON.stringify(scoresList);
    window.localStorage.setItem("high scores", scoreStorage);

    seeScores();
}

submitButton.addEventListener("click", function (event) { 
    savedScores(event); 
});

var i = 0;

function seeScores() {
    start.style.display = "none";
    prevScoresPage.style.display = "block";
    scoreView.style.display = "none";

    if (scoreParse === null) {
        return;
    }
    for (; i < storingScores.length; i++) {
        var newHighScore = document.createElement("ul");
        newHighScore.innerHTML = scoreParse[i].nameinfo + "'s score is " + scoreParse[i].score;
        newScores.appendChild(newHighScore);
    }
}
prevScores.addEventListener("click", function (event) {
    seeScores(event);
});


