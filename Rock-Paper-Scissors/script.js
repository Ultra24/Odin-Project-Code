function getComputerChoice() {
  let arr = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random()*arr.length + 1);

  if (random === 1) {
    random = "rock";
  } else if (random === 2) {
    random = "paper";
  } else {
    random = "scissors";
  }

  
function playRound(playerChoice, compChoice) {
     if ((playerChoice === "rock" && compChoice === "rock") || (playerChoice === "paper" && compChoice === "paper") || (playerChoice === "scissors" && compChoice === "scissors")) {
       return "TIE";      
     } else if ((playerChoice === "rock" && compChoice === "paper") || (playerChoice === "paper" && compChoice === "scissors") || (playerChoice === "scissors" && compChoice === "rock")) {
       return "Computer Wins";
     } else {
       return "Player Wins";
     }
  }    

  let playerChoice = prompt("Choose one: Rock, Paper, Scissors");      
  playerChoice = playerChoice.toLowerCase();
  const compChoice = random;
  console.log(playRound(playerChoice, compChoice));
}

for (i = 0; i < 5; i++) {
  getComputerChoice()
}
