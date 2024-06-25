let humanScore = 0;
let computerScore = 0;
let humanScoreDisplay = document.querySelector("#humanScore");
let computerScoreDisplay = document.querySelector("#computerScore");
let humanChoiceDisplay = document.querySelector(".h-option");
let computerChoiceDisplay = document.querySelector(".c-option");
let options = document.querySelectorAll(".option-btn");
let computerChoice;
let humanChoice;

function getComputerChoice() {
  let option = Math.floor(Math.random() * 3);
  if (option == 0) {
    return "rock";
  } else if (option == 1) {
    return "paper";
  } else {
    return "scissor";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "scissor") {
    humanScore++;
  } else if (humanChoice == "scissor" && computerChoice == "paper") {
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else if (humanChoice == computerChoice) {
    console.log(`Its a Draw! both chose ${humanChoice || computerChoice} `);
  } else {
    console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
  humanScoreDisplay.innerText = humanScore;
  computerScoreDisplay.innerText = computerScore;
}

function playGame() {
  if (humanScore == 5) {
    alert("You have won!");
    location.reload();
  } else if (computerScore == 5) {
    alert("You lost, Try Again!");
    location.reload();
  } else {
    humanChoiceDisplay.innerHTML = `<img src="./images/${humanChoice}.jpeg" alt="" />`;
    computerChoiceDisplay.innerHTML = `<img src="./images/${computerChoice}.jpeg" alt="" />`;
    playRound(humanChoice, computerChoice);
  }
}

options.forEach((option) => {
  option.addEventListener("click", () => {
    humanChoice = option.id;
    computerChoice = getComputerChoice();
    playGame();
  });
});
