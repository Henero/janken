function getComputerChoice() {
  const pick = ["rock", "paper", "scissors"];
  return pick[Math.floor(Math.random() * pick.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `This is a tie, both have chose ${playerSelection}\nPlayer Score : ${playerScore}\nComputer Score : ${computerScore}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return `You win ${playerSelection} beats ${computerSelection}\nplayerScore : ${playerScore}\ncomputerScore : ${computerScore}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return `You win ${playerSelection} beats ${computerSelection}\nplayerScore : ${playerScore}\ncomputerScore : ${computerScore}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return `You win ${playerSelection} beats ${computerSelection}\nplayerScore : ${playerScore}\ncomputerScore : ${computerScore}`;
  } else {
    computerScore++;
    return `You loose, ${computerSelection} beats ${playerSelection}\nplayerScore : ${playerScore}\ncomputerScore : ${computerScore}`;
  }
}

function game() {
  let count = 0;
  while (count < 5) {
    const playerSelection = prompt(
      "Choose between Rock, Paper or Scissors"
    ).toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    count++;
  }
  if (playerScore > computerScore) {
    return `You win`;
  } else {
    return `You loose`;
  }
}

console.log(game());
