console.log("Hello World");

function getComputerChoice() {
  let computerValue = Math.random();
  if (computerValue <= 0.33) {
    return "Scissors";
  } else if (computerValue >= 0.34 && computerValue <= 0.66) {
    return "Rock";
  } else {
    return "Paper";
  }
}
let choice = getComputerChoice();
console.log(choice);

function getHumanChoice() {
  let humanValue = prompt();
  return humanValue;
}

let humanChoice = getHumanChoice();
console.log(humanChoice);
