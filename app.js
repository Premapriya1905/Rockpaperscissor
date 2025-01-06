const computerChoiceDis=document.getElementById("computer-choice")
const userChoiceDis=document.getElementById("user-choice")
const resultDisplay=document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")

let userChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
    userChoice=e.target.id 
    userChoiceDis.innerHTML = userChoice
    generateComputerChoice()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3)
    console.log(randomNumber)
}