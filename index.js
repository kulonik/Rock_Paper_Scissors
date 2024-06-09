const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDisplay = document.getElementById('result');

rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));

const looser = "You lose!";
const winner = "You win!";

function playRound(humanChoice) {
const choiceArr = ['rock', 'paper', 'scissors'];
let computerChoice = choiceArr[Math.floor(Math.random() * 3)];   
    if(humanChoice === choiceArr[0]) {
        if(computerChoice === choiceArr[1]) {
            computerScore++;
            return resultDisplay.textContent = `${looser} Paper beats Rock!`;
        } else if (computerChoice === choiceArr[2]) {
            humanScore++;
            return resultDisplay.textContent = `${winner} Rock beats Scissors!`;
        } else {
            return resultDisplay.textContent = "It\'s a draw!";
        }
    } else if (humanChoice === choiceArr[1]) {
        if (computerChoice === choiceArr[0]) {
            humanScore++;
            return resultDisplay.textContent = `${winner} Paper beats Rock!`;
        } else if (computerChoice === choiceArr[2]) {
            computerScore++;
            return resultDisplay.textContent = `${looser} Scissors beat Paper!`;
        } else {
            return resultDisplay.textContent = "It\'s a draw!";
        }
    } else if (humanChoice === choiceArr[2]) {
        if (computerChoice === choiceArr[0]) {
            computerScore++;
            return resultDisplay.textContent = `${looser} Rock beats Scissors!`;
        } else if (computerChoice === choiceArr[1]) {
            humanScore++;
            return resultDisplay.textContent = `${winner} Scissors beat Paper!`;
        } else {
            return resultDisplay.textContent = "It\'s a draw!";
        }
    }

    humanScoreDisplay.textContent = `Player Score: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
};

    let computerScore = 0;
    let humanScore = 0;
    const humanScoreDisplay = document.getElementById('player-score');
    const computerScoreDisplay = document.getElementById('computer-score');

function playGame() {

    for(let i = 0; i < 5; i++) {
       // const humanSelection = getHumanChoice();
        const computerSelection = computerChoice();
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

console.log(playGame());
