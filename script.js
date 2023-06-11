let choice = ["paper", "rock", "scissor"];

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * choice.length + 1);

  if (computerChoice === 1) {
    return "Paper";
  } else if (computerChoice === 2) {
    return "Rock";
  } else {
    return "Scissor";
  }
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
