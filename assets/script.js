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
const userName = document.getElementById("userName");
const prevScoresPage = document.getElementById("prevScoresPage");
const newScores = document.getElementById("newScores");
const returnButton = document.getElementById("returnButton")

var secondsLeft = 60;
var timeleft = 0;

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