const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const scoreDisplay = document.getElementById("score");
const restartButton = document.getElementById("restart");
const possibleChoices = document.querySelectorAll("#buttons button");

let userChoice;
let computerChoice;
let result;
let userScore = 0;
let computerScore = 0;

possibleChoices.forEach(possibleChoice =>
    possibleChoice.addEventListener("click", (e) => {
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = `<img src="aasets/${userChoice}.png" alt="${userChoice}" style="width: 20vw; height: 30vh;">`;
        generateComputerChoice();
        getResult();
        updateScore();
        checkWinner();
    })
);

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3 + 1);

    if (randomNumber === 1) {
        computerChoice = "rock";
    } else if (randomNumber === 2) {
        computerChoice = "scissor";
    } else {
        computerChoice = "paper";
    }
    computerChoiceDisplay.innerHTML = `<img src="aasets/${computerChoice}.png" alt="${computerChoice}" style="width: 20vw; height: 30vh;">`;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a tie!";
    } else if (
        (computerChoice === "rock" && userChoice === "paper") ||
        (computerChoice === "scissor" && userChoice === "rock") ||
        (computerChoice === "paper" && userChoice === "scissor")
    ) {
        result = "You win!";
        userScore++;
    } else {
        result = "You lost!";
        computerScore++;
    }
    resultDisplay.innerHTML = result;
}

function updateScore() {
    scoreDisplay.innerHTML = `${computerScore} - ${userScore}`;
}

function checkWinner() {
    if (userScore === 5 || computerScore === 5) {
        const finalWinner = userScore === 5 ? "User" : "Computer";
        resultDisplay.innerHTML = `${finalWinner} wins the game!`;
        disableButtons();
    }
}

function disableButtons() {
    possibleChoices.forEach(button => (button.disabled = true));
    restartButton.style.display = "block";
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    resultDisplay.innerHTML = "";
    userChoiceDisplay.innerHTML = "";
    computerChoiceDisplay.innerHTML = "";
    scoreDisplay.innerHTML = "0 - 0";
    possibleChoices.forEach(button => (button.disabled = false));
    restartButton.style.display = "none";
}

restartButton.addEventListener("click", resetGame);
