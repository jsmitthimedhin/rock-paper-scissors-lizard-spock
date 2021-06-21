const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerScissors = document.getElementById('playerScissors');
const playerPaper = document.getElementById('playerPaper');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerScissors = document.getElementById('computerScissors');
const computerPaper = document.getElementById('computerPaper');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const resetBtn = document.getElementById('reset');
const allGameIcons = document.querySelectorAll('.far');

let playerScore = 0;
let computerScore = 0;
let computerChoice = '';

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

function select(playerChoice) {
  computerSelect();
  updateScore(playerChoice);
  // Add selected styling & player choice
  switch(playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = ' — Rock';
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = ' — Paper';
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent = ' — Scissors';
      break;
    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent = ' — Lizard';
      break;
    case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceEl.textContent = ' — Spock';
      break;
    default:
      break;
  }
}

// Check result, increase scores, update the result text
function updateScore(playerChoice) {
  if(playerChoice === computerChoice) {
    resultText.textContent = "TIE";
  } else {
    const choice = choices[playerChoice];
    let result = choice.defeats.indexOf(computerChoice);
    if(result>-1) {
      resultText.textContent = "YOU WON!";
      playerScore++;
      playerScoreEl.textContent = playerScore;
      confetti({
        particleCount: 200,
        spread: 180
      });
    } else {
      resultText.textContent = "YOU LOST :(";
      computerScore++;
      computerScoreEl.textContent = computerScore;
    }
  }
}

function resetSelected() {
  allGameIcons.forEach((icon) => {icon.classList.remove('selected')});
}

function randomizer() {
  const randomNumber = Math.floor(Math.random() * 5) +1;
  return randomNumber;
  
}

function computerSelect() {
  resetSelected();
  switch(randomizer()) {
    case 1:
      computerRock.classList.add('selected');
      computerChoice = 'rock';
      computerChoiceEl.textContent = ' — Rock';
      break;
    case 2:
      computerPaper.classList.add('selected');
      computerChoice = 'paper';
      computerChoiceEl.textContent = ' — Paper';
      break;
    case 3:
      computerScissors.classList.add('selected');
      computerChoice = 'scissors';
      computerChoiceEl.textContent = ' — Scissors';
      break;
    case 4:
      computerLizard.classList.add('selected');
      computerChoice = 'lizard';
      computerChoiceEl.textContent = ' — Lizard';
      break;
    case 5:
      computerSpock.classList.add('selected');
      computerChoice = 'spock';
      computerChoiceEl.textContent = ' — Spock';
      break;
    default:
      break;
  }
}

function resetGame() {
  resetSelected();
  playerScore = 0;
  playerScoreEl.textContent = playerScore;
  computerScore = 0;
  computerScoreEl.textContent = computerScore;
  resultText.textContent = '';
  computerChoiceEl.textContent = '';
  playerChoiceEl.textContent = '';
}

resetBtn.addEventListener("click", resetGame);