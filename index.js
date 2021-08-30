var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name: "Omkar",
    score: 5,
  },

  {
    name: "Bhurya",
    score: 4,
  },
]

var questions = [{
  question: "How many times was Ross legally divorced? ",
  answer: "3"
}, {
  question: "Which character has a twin?",
  answer: "phoebe"
},
{
  question: "Who was Monica’s first kiss? ",
  answer: "Ross"
},
{
  question: "How many sisters does Joey have? ",
  answer: "7"
},
{
  question: "What nickname did Monica’s dad give her? ",
  answer: "Little harmonica"
}
];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW Omkar?");
}



function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);
  highScores.map(score => console.log("high score is -> ",score.name, " : ", score.score))
}


welcome();
game();
showScores();