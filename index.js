const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDisplay = document.getElementById('result');
const humanScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const roundDisplay = document.getElementById('round');
const looser = "You lose!";
const winner = "You win!";

let computerScore = 0;
let humanScore = 0;
let currentRound = 1;
const totalRounds = 5;

rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));


function playRound(humanChoice) {
const choiceArr = ['rock', 'paper', 'scissors'];
let computerChoice = choiceArr[Math.floor(Math.random() * 3)];  

    if (currentRound <= totalRounds) {
    if(humanChoice === 'rock') {
        if(computerChoice === 'paper') {
            computerScore++;
            resultDisplay.textContent = `${looser} Paper beats Rock!`;
            humanScoreDisplay.textContent = `Player Score: ${humanScore}`;
            computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
                } else if (computerChoice === choiceArr[2]) {
            humanScore++;
             resultDisplay.textContent = `${winner} Rock beats Scissors!`;
             humanScoreDisplay.textContent = `Player Score: ${humanScore}`;
             computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
                 } else {
            return resultDisplay.textContent = "It\'s a draw!";
        }
    } else if (humanChoice === choiceArr[1]) {
        if (computerChoice === choiceArr[0]) {
            humanScore++;
             resultDisplay.textContent = `${winner} Paper beats Rock!`;
             humanScoreDisplay.textContent = `Player Score: ${humanScore}`;
             computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
         
        } else if (computerChoice === choiceArr[2]) {
            computerScore++;
             resultDisplay.textContent = `${looser} Scissors beat Paper!`;
             humanScoreDisplay.textContent = `Player Score: ${humanScore}`;
             computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
                 } else {
             resultDisplay.textContent = "It\'s a draw!";
             humanScoreDisplay.textContent = `Player Score: ${humanScore}`;
             computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
                 }
    } else if (humanChoice === choiceArr[2]) {
        if (computerChoice === choiceArr[0]) {
            computerScore++;
             resultDisplay.textContent = `${looser} Rock beats Scissors!`;
             humanScoreDisplay.textContent = `Player Score: ${humanScore}`;
             computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
                 } else if (computerChoice === choiceArr[1]) {
            humanScore++;
             resultDisplay.textContent = `${winner} Scissors beat Paper!`;
             humanScoreDisplay.textContent = `Player Score: ${humanScore}`;
             computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
                 } else {
             resultDisplay.textContent = "It\'s a draw!";
             humanScoreDisplay.textContent = `Player Score: ${humanScore}`;
             computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
                 }
    }
    console.log(`Player Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
    humanScoreDisplay.textContent = `Player Score: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    roundDisplay.textContent = `Round: ${currentRound} of ${totalRounds}`;
    currentRound++;
    }

    if (currentRound > totalRounds) {
        concludeGame();
    }

};


function concludeGame() {
    let finalResult = '';

    if(computerScore < humanScore) {
       finalResult = "You are a winner!";
    } else if (computerScore > humanScore) {
        finalResult = "You are a looser!";
    } else {
        finalResult = "You are tie!";
    }

    resultDisplay.textContent = finalResult;
    
    const gameContainer = document.getElementById('rps-game');

    const choices = document.getElementById('choices');
    const gameInfo = document.getElementById('game-info');
    const roundRes = document.getElementById('result');
    if(choices) {
        choices.style.display = 'none';
    } if(gameInfo) {
        gameInfo.style.display = 'none';
    } if( roundRes) {
        roundRes.style.display = 'none';
    }

    const gameConclusion = document.createElement('div');
    gameConclusion.setAttribute('id', 'game-conclusion');

    let finalMessage = '';
    if(humanScore > computerScore) {
        finalMessage = 'Congratulations, you won the game!';
    } else if (humanScore < computerScore) {
        finalMessage = 'Game over, the computer wins!';
    } else {
        finalMessage = 'The game ends in a draw!';
    }

    gameConclusion.innerHTML = `
    <h2>Game Over</h2>
    <p>${finalMessage}</p>
    <p>Final Score - You: ${humanScore} | Computer: ${computerScore}</p>
    <button id="restart-btn">Restart Game</button>
    `;

    gameContainer.appendChild(gameConclusion);

    document.getElementById('restart-btn').addEventListener('click', restartGame);
};

function restartGame() {
    humanScore = 0;
    computerScore = 0;
    currentRound = 0;

    humanScoreDisplay.textContent = 'Player Score: 0';
    computerScoreDisplay.textContent = 'Computer Score: 0';
    roundDisplay.textContent = `Round: 1 of ${totalRounds}`;

    const choices = document.getElementById('choices');
    const gameInfo = document.getElementById('game-info');
    const roundRes = document.getElementById('result');

    if(choices) {
        choices.style.display = '';
    }
    if (gameInfo) {
        gameInfo.style.display = '';
    } if (roundRes) {
        roundRes.style.display = '';
    }

    const gameConclusion = document.getElementById('game-conclusion');
    if(gameConclusion) {
        gameConclusion.remove();
    }

    document.getElementById('choices').style.display = '';
    resultDisplay.textContent = 'Choose your weapon!';
}