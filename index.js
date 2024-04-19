const choiceArr = ['Rock', 'Paper', 'Scissors'];
const compChoice = choiceArr[Math.floor(Math.random() * 3)];
const playerSelection = "Rock";
const looser = "You lose!";
const winner = "You win!";


function getComputerChoice() {
    return compChoice;
}
console.log(getComputerChoice());

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    if(playerSelection === choiceArr[0]) {
        if(computerSelection === choiceArr[1]) {
            return `${looser} Paper beats Rock!`;
        } else if (computerSelection === choiceArr[2]) {
            return `${winner} Rock beats Scissors!`;
        } else {
            return "Draw";
        }
    } else if (playerSelection === choiceArr[1]) {
        if (computerSelection === choiceArr[0]) {
            return `${winner} Paper beats Rock!`;
        } else if (computerSelection === choiceArr[2]) {
            return `${looser} Scissors beat Paper!`;
        } else {
            return "Draw";
        }
    } else if (playerSelection === choiceArr[2]) {
        if (computerSelection === choiceArr[0]) {
            return `${looser} Rock beats Scissors!`;
        } else if (computerSelection === choiceArr[1]) {
            return `${winner} Scissors beat Paper!`;
        } else {
            return "Draw";
        }
    }
}

// const computerSelection = getComputerChoice();
//console.log(getComputerChoice());
console.log(playRound(playerSelection, compChoice))
// console.log(playRound(playerSelection, getComputerChoice()));

/*function playGame(computerScore, playerScore) {
    if()
}
playGame();
playGame();
playGame();
playGame();
*/