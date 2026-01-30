console.log("Hello World");

//Compare input and return win/loose/tie
function playGame() {
  //Create random value for computer input
  function getComputerChoice() {
    let computerValue = Math.random();
    if (computerValue <= 0.33) {
      return "scissors";
    } else if (computerValue <= 0.66) {
      return "rock";
    } else {
      return "paper";
    }
  }

  //check getComputerChoice
  console.log("computer choice test = " + getComputerChoice());

  //Request user input
  function getHumanChoice() {
    let humanValue = prompt("Choose Rock, Paper or Scissors");
    return humanValue;
  }

  //Score variables
  let humanScore = 0;
  let computerScore = 0;

  function playround() {
    let humanChoice = getHumanChoice();
    console.log("human choice = " + humanChoice);
    let humanSelection = humanChoice.toLowerCase();
    let computerSelection = getComputerChoice();
    console.log("human selection = " + humanSelection);
    console.log("computer selection actual value = " + computerSelection);

    let message =
      computerSelection === "rock" && humanSelection === "scissors"
        ? "You lose! Rock beats Scissors"
        : computerSelection === "scissors" && humanSelection === "paper"
          ? "You lose! scissors beats Paper"
          : computerSelection === "paper" && humanSelection === "rock"
            ? "You lose! Paper beats Rock"
            : computerSelection === "scissors" && humanSelection === "rock"
              ? "You win! Rock beats Scissors"
              : computerSelection === "paper" && humanSelection === "scissors"
                ? "You win! Scissors beats Paper"
                : computerSelection === "rock" && humanSelection === "paper"
                  ? "You win! Paper beats Rock"
                  : "It's a tie! Try again.";

    if (message.includes("You win")) {
      humanScore++;
    } else if (message.includes("You lose")) {
      computerScore++;
    }
  }
  playround();
  playround();
  playround();
  playround();
  playround();
  console.log(humanScore);
  console.log(computerScore);
}

playGame();
