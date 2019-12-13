$(document).ready(function () {

  var qA = [
    {
      question: "what is blind baking?",
      answerA: "A blind person who is baking",
      answerB: "Baking using intuition, without looking into the oven",
      answerC: "Baking without a filling",
      answerD: "Baking a blind person in the oven",
      correctText: "C: Baking without a filling is the right answer!",
      correct: "answerC"
    },
    {
      question: "which flour has the highest amount of starch?",
      answerA: "Cake flour",
      answerB: "Almond flour",
      answerC: "Starch flour",
      answerD: "All purpose flour",
      correctText: "A: Cake flour is the right answer!",
      correct: "answerA"
    },
    {
      question: "what is a good substitute for eggs?",
      answerA: "Milk",
      answerB: "Applesauce",
      answerC: "Mayonnaise",
      answerD: "Custard",
      correctText: "B: Apple sauce is the right answer!",
      correct: "answerB"
    },
    {
      question: "red velvet is which type of flavour?",
      answerA: "Strawberry",
      answerB: "Chocolate",
      answerC: "Red flavour",
      answerD: "Vanilla",
      correctText: "B: Chocolate is the right answer!",
      correct: "answerB"
    },
    {
      question: "what type of cheese is used in cheesecake?",
      answerA: "Brie",
      answerB: "Ricotta",
      answerC: "Goats cheese",
      answerD: "Cream cheese",
      correctText: "D: Cream Cheese is the right answer!",
      correct: "answerD"
    },
    {
      question: "who started the tradition of putting candles on birthday cakes?",
      answerA: "Ur mom",
      answerB: "Victorians",
      answerC: "Greeks",
      answerD: "Romans",
      correctText: "C: Greeks is the right answer! Unless your mother is greek, in which case...!",
      correct: "answerC"
    }
  ];

  var gameStart = false;
  var breakStart = false;
  var questionTime = 15;
  var breakTime = 6;
  var questionHere = $(".questionHere");
  var questionA = $(".a");
  var questionB = $(".b");
  var questionC = $(".c");
  var questionD = $(".d");
  var submit = $("#submit");
  var questionAnswer = $(".correctAnswer");
  var wins = 0;
  var lose = 0;
  var i = 0;
  var q;
  var questionInterval;


  function question() {
    clearQuestionsAndAnswers();
    q = qA[i];
    questionHere.append(q.question);
    questionA.append('<input type="radio" name="answer" value="answerA" id="a">' + q.answerA + '<br>');
    questionB.append('<input type="radio" name="answer" value="answerB" id="a">' + q.answerB + '<br>');
    questionC.append('<input type="radio" name="answer" value="answerC" id="a">' + q.answerC + '<br>');
    questionD.append('<input type="radio" name="answer" value="answerD" id="a">' + q.answerD + '<br>');
    questionTimef();
  };

  //TIMING
  function questionTimef() {
    questionInterval = setInterval(function () {
      if (gameStart) {
        questionTime--;
        $(".timer").html("<div>" + questionTime + " seconds left </div>");
      }
      if (questionTime <= 0) {
        questionEnd();  
        i++;
        questionTime = 15;
        question();
      }
    }, 1000)
  };

  // function breakBreak() {
  //   setInterval(function () {
  //     if (breakStart && breakTime > 0) {
  //       giveAnswer();
  //       breakTime--;
  //       $(".timer").html("<div>" + breakTime + " break seconds left </div>");
  //       questionAnswer.append(q.correctText);
  //     }
  //     else if (breakTime ===0) {
  //       questionEnd();   
  //       gameStart = true;
  //       breakTime = false;
  //       i++;
  //       questionTime = 15;
  //     }
  //   }, 1000)

  // }

  function clearQuestionsAndAnswers() {
    questionHere.empty();
    questionA.empty();
    questionB.empty();
    questionC.empty();
    questionD.empty();
  };

  function questionEnd() {
    clearInterval(questionInterval);
  };

  function nextQuestion(){
    questionTime = 15;
    i++;
    question();
  }

  submit.on("click", submitAnswer);

  //ANSWERS
  function submitAnswer(e) {
    var answer = $("input[name='answer']:checked"). val();
      e.preventDefault();
        if (answer == q.correctAnswer) {
          wins++;
        }
        else {
          lose++;
        }
        questionEnd();
        nextQuestion();
  };




  function restartGame() {
    //RESTART PAGE BUTTON
    $(".start2").on("click", function () {
      gameStart = false;
      $(".game").removeClass("hide");
      $(".score").text("Correct: " + wins + "Incorrect: " + lose);
    });
  };

  //FRONT PAGE BUTTON
  $(".start").on("click", function () {
    $(".startingPage").addClass("hide");
    $(".game").removeClass("hide");
    gameStart = true;
  });

  question();
  questionTimef();
});