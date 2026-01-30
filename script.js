console.log("Hello World");

//Create random value for computer input
function getComputerChoice() {
  let computerValue = Math.random();
  if (computerValue <= 0.33) {
    return "scissors";
  } else if (computerValue >= 0.34 && computerValue <= 0.66) {
    return "rock";
  } else {
    return "paper";
  }
}

//define computerChoice and check
let computerChoice = getComputerChoice();
console.log(computerChoice);

//Request user input
function getHumanChoice() {
  let humanValue = prompt();
  return humanValue;
}

//Switch user input to lowercase
let humanChoice = getHumanChoice();
humanChoice = humanChoice.toLowerCase();
console.log(humanChoice);

// humanSelection and computerSelection from values of input
const humanSelection = humanChoice;
const computerSelection = computerChoice;

//Compare input and return win/loose/tie
function playround(computerSelection, humanSelection) {
  let message =
    computerSelection === "rock" && humanSelection === "scissors"
      ? "You lose! Rock beats Scissors"
      : computerSelection === "scissors" && humanSelection === "paper"
      ? "You lose! scissors beats Paper"
      : computerSelection === "paper" && humanSelection === "rock"
      ? "You lose! Paper beats Rock"
      : computerSelection === "scissors" && humanSelection === "rock"
      ? "You win! Scissors beats Rock"
      : computerSelection === "paper" && humanSelection === "scissors"
      ? "You win! Scissors beats Paper"
      : computerSelection == "rock" && humanSelection === "paper"
      ? "You win! Paper beats Rock"
      : "It's a tie! Try again.";
  return message;
}

const result = playround(computerSelection, humanSelection);

console.log(result);

//Starting score for game
let humanScore = 0;
let computerScore = 0;

function playGame() {
  let win =
    result === "You win! Paper beats Rock" ||
    "You win! Scissors beats Paper" ||
    "You win! Scissors beats Rock";
  let lose =
    result === "You lose! Rock beats Scissors" ||
    "You lose! scissors beats Paper" ||
    "You lose! Paper beats Rock";
  let tie = result === "It's a tie! Try again.";

  if (result === win) {
    humanScore++;
  } else if (result === lose) {
    computerScore++;
  }
}

playGame();
playGame();
playGame();
playGame();
playGame();

console.log(humanScore);
console.log(computerScore);
