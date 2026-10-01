let playerScore = 0;
let computerScore = 0;

function getHumanChoice() {
  let userChoice = prompt(
    "Please Enter Your Choise: (1.Rock, 2.Paper, 3.Scissor)",
  );
  if (userChoice === null) {
    return null;
  }

  userChoice = userChoice.toLowerCase().trim();

  if (userChoice === "rock" || userChoice === "1") {
    return "ROCK";
  } else if (userChoice === "paper" || userChoice === "2") {
    return "PAPER";
  } else if (userChoice === "scissor" || userChoice === "3") {
    return "SCISSOR";
  } else {
    return "INVALID";
  }
}

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3) + 1;
  console.log(computerChoice);
  if (computerChoice === 1) {
    return "ROCK";
  } else if (computerChoice === 2) {
    return "PAPER";
  } else {
    return "SCISSOR";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "INVALID" || humanChoice === null) {
    return "Invalid choice! Please choose Rock, Paper, or Scissors.";
  }

  if (humanChoice === computerChoice) {
    return "It's a Tie!!!";
  }

  if (
    (humanChoice === "ROCK" && computerChoice === "SCISSOR") ||
    (humanChoice === "PAPER" && computerChoice === "ROCK") ||
    (humanChoice === "SCISSOR" && computerChoice === "PAPER")
  ) {
    playerScore++;
    return `You Win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `You Lose! ${computerChoice} beats ${humanChoice}`;
  }
}

function playGame() {
  playerScore = 0;
  computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    console.log(`\n----- Round ${i} -----`);

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    const roundResult = playRound(humanSelection, computerSelection);
    console.log(roundResult);

    if (humanSelection === "INVALID" || humanSelection === null) {
      i--;
      continue;
    }
    console.log(
      `Current Tally -> Player: ${playerScore} | Computer: ${computerScore}\n`,
    );
  }
  console.log("=== FINAL MATCH RESULT ===");
  if (playerScore > computerScore) {
    console.log(
      `🏆 Victory! You won the match ${playerScore} to ${computerScore}!`,
    );
  } else if (computerScore > playerScore) {
    console.log(
      `🤖 Game Over! The computer won the match ${computerScore} to ${playerScore}.`,
    );
  } else {
    console.log("🤝 A rare stalemate! The tournament is a tie!");
  }
}

playGame();
