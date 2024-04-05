function getComputerChoice(){
    const choiceArr = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * 3);
    return choiceArr[random];
}
getComputerChoice();
console.log(getComputerChoice());


    