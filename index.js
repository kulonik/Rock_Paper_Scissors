const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDisplay = document.getElementById('result');
const humanScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const looser = "You lose!";
const winner = "You win!";

let computerScore = 0;
let humanScore = 0;
let humanChoice;

rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));


function playRound(humanChoice) {
const choiceArr = ['rock', 'paper', 'scissors'];
let computerChoice = choiceArr[Math.floor(Math.random() * 3)];  

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
};
console.log(playRound(humanChoice));
/*

function playGame() {
    for(let i = 0; i < 5; i++) {
       // const humanSelection = getHumanChoice();
        const computerSelection = computerChoice;
        // playRound(humanSelection, computerSelection);
        playRound(computerSelection);
    }

    if(computerScore < humanScore) {
        return "You are a winner!";
    } else if (computerScore > humanScore) {
        return "You are a looser!";
    } else {
        return "You are tie!";
    }
};
*/