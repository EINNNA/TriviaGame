$(document).ready(function (game) {

var qA = [
    q1 = {
        question: "what is blind baking?",
        answerA: "A blind person who is baking",
        answerB: "Baking using intuition, without looking into the oven",
        answerC: "Baking without a filling",
        answerD: "Baking a blind person in the oven",
        correctText:  "C: Baking without a filling is the right answer!",
        correct: "answerC"
    },
    q2 = {
        question: "which flour has the highest amount of starch?",
        answerA: "Cake flour",
        answerB: "Almond flour",
        answerC: "Starch flour",
        answerD: "All purpose flour", 
        correctText:  "A: Cake flour is the right answer!",
        correct: "answerA"
    },
    q3 = {
        question: "what is a good substitute for eggs?",
        answerA: "Milk",
        answerB: "Applesauce",
        answerC: "Mayonnaise",
        answerD: "Custard",   
        correctText:  "B: Apple sauce is the right answer!",
        correct: "answerB"
    },
    q4 = {
        question: "red velvet is which type of flavour?",
        answerA: "Strawberry",
        answerB: "Chocolate",
        answerC: "Red flavour",
        answerD: "Vanilla", 
        correctText:  "B: Chocolate is the right answer!",
        correct: "answerB"
    },
    q5 = {
        question: "what type of cheese is used in cheesecake?",
        answerA: "Brie",
        answerB: "Ricotta",
        answerC: "Goats cheese",
        answerD: "Cream cheese",
        correctText:  "D: Cream Cheese is the right answer!",
        correct: "answerD"
    },
    q6 = {
        question: "who started the tradition of putting candles on birthday cakes?",
        answerA: "Ur mom",
        answerB: "Victorians",
        answerC: "Greeks",
        answerD: "Romans",  
        correctText:  "C: Greeks is the right answer! Unless your mother is greek, in which case...!",
        correct: "answerC"
    }
];

var questionTime = 15;
var breakTime = 6;
var questionChoices = $(".questionChoices");
var questionHere = $(".questionHere");
var questionA = $(".a");
var questionB = $(".b");
var questionC = $(".c");
var questionD = $(".d");
var questionAnswer = $(".correctAnswer");
//var submit = $("#submit");
var wins = 0;
var lose = 0;

  function question() {
    let q = qA[0];
    //let radio = $('<input type="radio">')
    //let submit = $('<input type="submit">')
    questionHere.append(q.question);
    questionA.append('<input type="radio" name="question" value="answerA" id="a">' + q.answerA + '<br>');
    questionB.append('<input type="radio" name="question" value="answerB" id="a">' + q.answerB + '<br>');
    questionC.append('<input type="radio" name="question" value="answerC" id="a">' + q.answerC + '<br>');
    questionD.append('<input type="radio" name="question" value="answerD" id="a">' + q.answerD + '<br>');
    
    /*if (questionTime <= 0 || ) {
      questNumber++;
    }*/
  };

  var questionStart = setInterval(function () {
    questionTime--;
    $(".timer").html("<div>" + questionTime + " seconds left </div>");
    if (questionTime == 0) {
      clearInterval(questionStart);
    }
  }, 1000);

  function submittingAnswer() {
    questionTime = 0;
    questionChoices.on("submit", function(event){
      event.preventdefault();
      answer = questionChoices.serialize();
    })
  }

  /*  function answerChecking() {
    if (qA[questNumber].correct)
  }

  var breakStart = setInterval(function () {
    breakTime--;
    $(".timer").html("<div>" + breakTime + " seconds left </div>");
    if (breakTime == 0) {
      clearInterval(breakStart);
    }
  }, 1000);*/

  question();
  questionStart;
  console.log(qA);

});