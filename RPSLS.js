// define an array of possible choices
const choices = ["rock", "paper", "scissors", "lizard", "spock"];

// get a reference to the start button and the countdown timer element
const startButton = document.getElementById("startButton");
const countdownTimer = document.getElementById("countdownTimer");

// define playerScore and computerScore variables and corresponding elements
let playerScore = 0;
let computerScore = 0;
const playerScoreSpan = document.getElementById("playerScore");
const computerScoreSpan = document.getElementById("computerScore");

// set up a variable to keep track of whether the user has made a choice yet
let userChoiceMade = false;

// when the user clicks the start button, start the countdown timer
startButton.addEventListener("click", function() {
  countdownTimer.innerHTML = "Get ready!";
  setTimeout(function() {
    countdownTimer.innerHTML = "Rock Paper Scissors Lizard Spock!";

    // add event listeners to the choice buttons
    document.getElementById("rockButton").addEventListener("click", function() {
      if (!userChoiceMade) {
        clearInterval(countdownInterval);
        playGame("rock");
      }
    });
    document.getElementById("paperButton").addEventListener("click", function() {
      if (!userChoiceMade) {
        clearInterval(countdownInterval);
        playGame("paper");
      }
    });
    document.getElementById("scissorsButton").addEventListener("click", function() {
      if (!userChoiceMade) {
        clearInterval(countdownInterval);
        playGame("scissors");
      }
    });
    document.getElementById("lizardButton").addEventListener("click", function() {
      if (!userChoiceMade) {
        clearInterval(countdownInterval);
        playGame("lizard");
      }
    });
    document.getElementById("spockButton").addEventListener("click", function() {
      if (!userChoiceMade) {
        clearInterval(countdownInterval);
        playGame("spock");
      }
    });

    // start a 5-second countdown timer
    let countdown = 5;
    const countdownInterval = setInterval(function() {
      countdownTimer.innerHTML = countdown;
      countdown--;
      if (countdown < 0) {
        // if the user hasn't made a choice yet, computer wins by default
        if (!userChoiceMade) {
          countdownTimer.innerHTML = "You didn't choose! Computer wins by default.";
        }

        clearInterval(countdownInterval);
      }
    }, 1000);

    countdownTimer.innerHTML = "Choose Your Character!" ; 
  }, 1000);
});

// define a function to play the game
function playGame(userChoice) {
    userChoiceMade = true;
    // randomly choose a computer choice
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    // compare user and computer choices to determine winner
    if (userChoice === computerChoice) {
      countdownTimer.innerHTML = "It's a tie!";
    } else if (userChoice === "rock") {
      if (computerChoice === "paper" || computerChoice === "spock") {
        countdownTimer.innerHTML = "Computer wins!";
      } else {
        countdownTimer.innerHTML = "You win!";
      }
    } else if (userChoice === "paper") {
      if (computerChoice === "scissors" || computerChoice === "lizard") {
        countdownTimer.innerHTML = "Computer wins!";
      } else {
        countdownTimer.innerHTML = "You win!";
      }
    } else if (userChoice === "scissors") {
      if (computerChoice === "rock" || computerChoice === "spock") {
        countdownTimer.innerHTML = "Computer wins!";
      } else {
        countdownTimer.innerHTML = "You win!";
      }
    } else if (userChoice === "lizard") {
      if (computerChoice === "rock" || computerChoice === "scissors") {
        countdownTimer.innerHTML = "Computer wins!";
      } else {
        countdownTimer.innerHTML = "You win!";
      }
    } else if (userChoice === "spock") {
      if (computerChoice === "paper" || computerChoice === "lizard") {
        countdownTimer.innerHTML = "Computer wins!";
      } else {
        countdownTimer.innerHTML = "You win!";
      }
    }
    // update the score
    if (countdownTimer.innerHTML === "You win!") {
      playerScore++;
      playerScoreSpan.innerHTML = "You: " + playerScore;
      // reset userChoiceMade to false
   userChoiceMade = false;
    } else if (countdownTimer.innerHTML === "Computer wins!") {
      computerScore++;
      computerScoreSpan.innerHTML = "Computer: " + computerScore;
      // reset userChoiceMade to false
  userChoiceMade = false;
    } else if (countdownTimer.innerHTML === "It's a tie!") {
      // reset userChoiceMade to false
  userChoiceMade = false;
    } else if (countdownTimer.innerHTML === "You didn't choose! Computer wins by default.") {
      computerScore++;
      computerScoreSpan.innerHTML = "Computer: " + computerScore;
      // reset userChoiceMade to false
  userChoiceMade = false;
    }
  }
