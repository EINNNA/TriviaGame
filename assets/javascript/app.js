$(document).ready(function (game) {

var qA = [
    q1 = {
        question: "what is blind baking?",
        answerA: "A blind person who is baking",
        answerB: "Baking using intuition, without looking into the oven",
        answerC: "Baking without a filling",
        answerD: "Baking a blind person in the oven",
        correct:  "C: Baking without a filling is the right answer!"
    },
    q2 = {
        question: "which flour has the highest amount of starch?",
        answerA: "Cake flour",
        answerB: "Almond flour",
        answerC: "Starch flour",
        answerD: "All purpose flour", 
        correct:  "A: Cake flour is the right answer!"
    },
    q3 = {
        question: "what is a good substitute for eggs?",
        answerA: "Milk",
        answerB: "Applesauce",
        answerC: "Mayonnaise",
        answerD: "Custard",   
        correct:  "B: Apple sauce is the right answer!"
    },
    q4 = {
        question: "red velvet is which type of flavour?",
        answerA: "Strawberry",
        answerB: "Chocolate",
        answerC: "Red flavour",
        answerD: "Vanilla", 
        correct:  "B: Chocolate is the right answer!"
    },
    q5 = {
        question: "what type of cheese is used in cheesecake?",
        answerA: "Brie",
        answerB: "Ricotta",
        answerC: "Goats cheese",
        answerD: "Cream cheese",
        correct:  "D: Cream Cheese is the right answer!"
    },
    q6 = {
        question: "who started the tradition of putting candles on birthday cakes?",
        answerA: "Ur mom",
        answerB: "Victorians",
        answerC: "Greeks",
        answerD: "Romans",  
        correct:  "C: Greeks is the right answer! Unless your mother is greek, in which case...!"
    }
];

var questionTime = 15;
var breakTime = 6;
var questionChoices = $(".questionChoices");
var questionQuestion = $("questionHere")
var wins = 0;
var lose = 0;

function question() {
  for (let i = 0; i < qA.length; i++) {
    let q = qA[i];
    let radio = $('<input type="radio">')
    let submit = $('<input type="submit">')

    questionChoices.append(q.question);
    questionQuestion.append(radio + q.answerA);
    questionQuestion.append(radio + q.answerA);
    questionQuestion.append(submit + "submit");


  }
}


  var questionStart = setInterval(function () {
    questionTime--;
    $(".timer").html("<div>" + questionTime + " seconds left </div>");
    if (questionTime == 0) {
      clearInterval(questionStart);
    }
  }, 1000);

  /*
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