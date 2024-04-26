const choiceArr = ['rock', 'paper', 'scissors'];
const looser = "You lose!";
const winner = "You win!";

function getComputerChoice(compChoice) {
    return compChoice = choiceArr[Math.floor(Math.random() * 3)];;
}

function getHumanChoice() {
    let sign = prompt("Rock, paper or scissors?", "");
    return sign.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    
    if(humanChoice === choiceArr[0]) {
        if(computerChoice === choiceArr[1]) {
            computerScore++;
            return `${looser} Paper beats Rock!`;
        } else if (computerChoice === choiceArr[2]) {
            humanScore++;
            return `${winner} Rock beats Scissors!`;
        } else {
            return "Draw";
        }
    } else if (humanChoice === choiceArr[1]) {
        if (computerChoice === choiceArr[0]) {
            humanScore++;
            return `${winner} Paper beats Rock!`;
        } else if (computerChoice === choiceArr[2]) {
            computerScore++;
            return `${looser} Scissors beat Paper!`;
        } else {
            return "Draw";
        }
    } else if (humanChoice === choiceArr[2]) {
        if (computerChoice === choiceArr[0]) {
            computerScore++;
            return `${looser} Rock beats Scissors!`;
        } else if (computerChoice === choiceArr[1]) {
            humanScore++;
            return `${winner} Scissors beat Paper!`;
        } else {
            return "Draw";
        }
    }
};

    let computerScore = 0;
    let humanScore = 0;


function playGame() {

    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        console.log(humanSelection);
        const computerSelection = getComputerChoice();
        console.log(computerSelection);
        playRound(humanSelection, computerSelection);
        console.log(playRound(humanSelection, computerSelection));
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
