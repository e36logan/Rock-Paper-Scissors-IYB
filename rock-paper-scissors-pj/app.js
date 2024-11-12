// Players start at 0

let playerScore = 0;
let computerScore = 0;

// Creating a placeholder to use in a function later (getting the buttons)

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

// Set up choices
const yourChoiceDisplay = document.getElementById('your-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultMessageDisplay = document.getElementById('result-message');

// Scoreboard Display

const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

// Tell the computer what its choices are

const choices = ['rock', 'paper', 'scissors'];

 // Getting a random number between 0 and 2 because there are only three choices

 function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3); // Said random number between 0 and 2
  return choices[randomIndex];
}

// Deciding the winner by comparing values. If value is the same then it is a tie. If the values are different then there is a winner and a loser
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    playerScore++; // player wins
    return 'You win!';
  } else {
    computerScore++; // Computer wins!
    return 'Computer wins!';
  }
}

// updating scores 

function updateScore() {
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

  // Updating player and computer scores on the board
  
  rockButton.addEventListener('click', function() {
  playGame('rock');
});
paperButton.addEventListener('click', function() {
  playGame('paper');
});
scissorsButton.addEventListener('click', function() {
  playGame('scissors');
});

// Game Function

function playGame(playerChoice) {
  
  // Get computer's choice
  
  const computerChoice = getComputerChoice();

  // Display choices on the screen

  yourChoiceDisplay.textContent = playerChoice;
  computerChoiceDisplay.textContent = computerChoice;

  // Determine the result of the game

  const result = determineWinner(playerChoice, computerChoice);

  // Show result message

  resultMessageDisplay.textContent = result;

  // Update scores
  updateScore();
}
