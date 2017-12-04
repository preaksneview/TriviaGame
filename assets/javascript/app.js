/*
 * S T A R   T R E K   T R I V I A
 * Jordan Boggs - Dec 3 2017 
 */

$("#start").click(function() {
  $("#start-screen").hide();
  $("#gameboard").show();

  // Let's start the show
  game.start();
});

var game = {
  time: 30,

  correctAnswers: 0,
  
  incorrectAnswers: 0,

  answeredQuestions: 0,

  totalQuestions: 5,

  start: function() {
    // Start the timer
    var intervalId = setInterval(game.count, 1000);

    // Display the question and answers, if there are still
    // questions left
    game.displayQuestion();
    
    // Wait for a selection from user
    $("#answer-a").click(function(){game.check("a")});
    $("#answer-b").click(function(){game.check("b")});
    $("#answer-c").click(function(){game.check("c")});
    $("#answer-d").click(function(){game.check("d")});
  },

  count: function() {
    if (game.time > 0) {
      // Decrement time by 1
      game.time--;
      
      // Get the current time and format it
      let currentTime = game.timeConverter(game.time);

      // Display time in #timer
      $("#timer").text(currentTime);
    }
    else if (time === 0) {
      // Player loses this round
      game.timeOut();

      // go to next question
      game.questionBank.currentQuestion++;
      
      if (game.questionBank.currentQuestion <= 5) {
        game.start();
      }
    }
  },

  timeConverter: function(t) {
    // Takes the current time in seconds and converts it to
    // minutes and seconds (mm:ss)
    let minutes = Math.floor(t / 60);
    let seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    else if (minutes < 10) {
      clearInterval(game.start.intervalId); 
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  },

  timeOut: function() {
    // Time's up message
    $("#question").text("Sorry, time's up!");
    
    // Highlight the correct answer
  },

  displayQuestion: function() {
    // Display the question based on what the currentQuestion
    // counter is
    $("#question").text(game["questionBank"]["question" + game.questionBank.currentQuestion]["text"]);

    $("#answer-a").text(game["questionBank"]["question" + game.questionBank.currentQuestion]["answerA"]["text"]);

    $("#answer-b").text(game["questionBank"]["question" + game.questionBank.currentQuestion]["answerB"]["text"]);

    $("#answer-c").text(game["questionBank"]["question" + game.questionBank.currentQuestion]["answerC"]["text"]);

    $("#answer-d").text(game["questionBank"]["question" + game.questionBank.currentQuestion]["answerD"]["text"]);
  },

  check: function(pick) {
    if (pick === "a") {
      // if answer is correct
      if (game["questionBank"]["question" + game.questionBank.currentQuestion]["answerA"]["correct"] === true) {
        // Display feedback
        $("#question").text("Correct!");

        // Update score
        game.correctAnswers++;
        game.answeredQuestions++;
      } else {
        // Display feedback
        $("#question").text(game["questionBank"]["question" + game.questionBank.currentQuestion]["feedback"]);

        // Update score
        game.incorrectAnswers++;
        game.answeredQuestions++;
      }
    }
  },

  questionBank: {
    currentQuestion: 1,

    question1: {
      text: "Which ship was Captain Jean-Luc Picard the captain of?",
      answerA: {
        text: "USS Enterprise-A",
        correct: false,
      },
      answerB: {
        text: "USS Enterprise-B",
        correct: false
      },
      answerC: {
        text: "USS Enterprise-C",
        correct: false
      },
      answerD: {
        text: "USS Enterprise-D",
        correct: true
      },
      feedback: "Sorry, the correct answer was USS Enterprise-D"
    },

    question2: {
      text: "",
      answerA: {
        text: "",
        correct: false
      },
      answerB: {
        text: "",
        correct: false
      },
      answerC: {
        text: "",
        correct: false
      },
      answerD: {
        text: "",
        correct: false
      },
    },

    question3: {
      text: "",
      answerA: {
        text: "",
        correct: false
      },
      answerB: {
        text: "",
        correct: false
      },
      answerC: {
        text: "",
        correct: false
      },
      answerD: {
        text: "",
        correct: false
      },
    },

    question4: {
      text: "",
      answerA: {
        text: "",
        correct: false
      },
      answerB: {
        text: "",
        correct: false
      },
      answerC: {
        text: "",
        correct: false
      },
      answerD: {
        text: "",
        correct: false
      },
    },

    question5: {
      text: "",
      answerA: {
        text: "",
        correct: false
      },
      answerB: {
        text: "",
        correct: false
      },
      answerC: {
        text: "",
        correct: false
      },
      answerD: {
        text: "",
        correct: false
      },
    },
  }
};

/*
 * TO DO
 * ----------
 * 1. Build objects for each question
 * 2. Method for displaying correct answers
 */