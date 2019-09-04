$(document).ready(function (game) {

  //var game = true;
clear;

var qA = [
    {
        question: "what is blind baking?",
        answerA: "A blind person who is baking",
        answerB: "Baking using intuition, without looking into the oven",
        answerC: "Baking without a filling",
        answerD: "Baking a blind person in the oven",
        correct:  "C: Baking without a filling is the right answer!"
    },
    {
        question: "which flour has the highest amount of starch?",
        answerA: "Cake flour",
        answerB: "Almond flour",
        answerC: "Starch flour",
        answerD: "All purpose flour", 
        correct:  "A: Cake flour is the right answer!"
    },
    {
        question: "what is a good substitute for eggs?",
        answerA: "Milk",
        answerB: "Applesauce",
        answerC: "Mayonnaise",
        answerD: "Custard",   
        correct:  "B: Apple sauce is the right answer!"
    },
    {
        question: "red velvet is which type of flavour?",
        answerA: "Strawberry",
        answerB: "Chocolate",
        answerC: "Red flavour",
        answerD: "Vanilla", 
        correct:  "B: Chocolate is the right answer!"
    },
    {
        question: "what type of cheese is used in cheesecake?",
        answerA: "Brie",
        answerB: "Ricotta",
        answerC: "Goats cheese",
        answerD: "Cream cheese",
        correct:  "D: Cream Cheese is the right answer!"
    },
    {
        question: "who started the tradition of putting candles on birthday cakes?",
        answerA: "Ur mom",
        answerB: "Victorians",
        answerC: "Greeks",
        answerD: "Romans",  
        correct:  "C: Greeks is the right answer! Unless your mother is greek, in which case...!"
    }
];
console.log(qA);
console.log(qA[0].question);
console.log(qA[1].answerA);
console.log(qA[1].answerB);
console.log(qA[1].answerC);
console.log(qA[1].answerD);

$("").text(qA[0].answerA);
$(".questionChoices").text(qA[0].answerB);
$(".questionChoices").text(qA[0].answerC);
$(".questionChoices").text(qA[0].answerD);

var clear = $(".questionChoices").html("");

//appending stuff
//this was supposed to give a section to input an answer for each question. maybe i made it too commplicated
var form = $('<form class="formForm">' + '</form>')
//var question1 = $('<input type="radio" name="qwestion">' + qA[0].answerA + '</input>');
var question1 = $('<input type="radio" name="qwestion">' + qA[0].answerA + '</input>');
var question2 = $('<input type="radio" name="qwestion">' + qA[0].answerB + '</input>');
var question3 = $('<input type="radio" name="qwestion">' + qA[0].answerC + '</input>');
var question4 = $('<input type="radio" name="qwestion">' + qA[0].answerD + '</input>');


console.log(question1);
console.log(question2);
console.log(question3);
console.log(question4);

//question appending
var question = $(".questionHere").append(qA[0].question);
var aA = $(".questionChoices").append(question1 + '<br>');
var bB = $(".questionChoices").append(question2 + '<br>');
var cC = $(".questionChoices").append(question3 + '<br>');
var dD = $(".questionChoices").append(question4);

console.log(aA);
console.log(bB);
console.log(cC);
console.log(dD);

$(form).

        question;
        form.html(".questionChoices");
        $(".formForm").append(aA);
        $(".formForm").append(bB);
        $(".formForm").append(cC);
        $(".formForm").append(dD);


//Timer
var startTime = 180;
var questionTimer = setInterval(function(){
  game = true;
  $(".timer").text(startTime + " seconds remaining");
  startTime--;
  if(startTime <= 0){
    //supposed to clear the data and replace with the answers\\
    //answers are supposed to be held in a variable(theres supposed to be a submit button somewhere that should log it when its clicked) and then use a if statement to compare and see if it is true or false. 
    game = false;
    clear;
    clearInterval(questionTimer);
    $(".timer").text("Finished");

  }
}, 1000);

/*BreakTime
var breakTime = 6;
var breakTimer = setInterval(function(){
  $(".timer").text("Break for " + breakTime);
  breakTime--;
  if(breakTime <= 0){
    clearInterval(breakTimer);
    $(".timer").text("Finished");
  }
}, 1000);
*/

});