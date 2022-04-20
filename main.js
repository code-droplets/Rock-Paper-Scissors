const options = document.querySelectorAll(".option");
let userChoise;
const middleSection = document.getElementById("middleSection");
const bottomSection = document.getElementById("bottomSection");
let cpOptions;
let score = 0;
const playAgain = document.getElementById('playAgain');


const userChoiceOptions = {
  rock: "./images/Rock.png",
  paper: "./images/Paper.png",
  scissors: "./images/Scissors.png",
};
options.forEach((x) =>
  x.addEventListener("click", (e) => {
    userChoise = e.target.id;
    console.log(userChoise);
    userChoice();
  })
);

const userChoice = () => {
  middleSection.style.display = "none";
  bottomSection.style.display = "flex";

  // if (userChoise === 'rock') {
  //     document.getElementById("userPicked").src= "./images/Rock.png";
  // }
  // else if(userChoice === 'paper'){
  //     document.getElementById("userPicked").src= "./images/Paper.png";
  // }
  // else if(userChoice === 'scissors'){
  //     document.getElementById("userPicked").src= "./images/Scissors.png";
  // }
  document.getElementById("userPicked").src = userChoiceOptions[userChoise];
  computerPicked();
  Results(userChoise, cpOptions);
};
const computerPicked = () => {
  let computerOptions = ["rock", "paper", "scissors"];
  cpOptions = computerOptions[Math.floor(Math.random() * 3)];
  document.getElementById("computerPicked").src = userChoiceOptions[cpOptions];
  return cpOptions;
};

const Results = (userChoise, cpOptions) => {

if (userChoise === cpOptions) {
    Decission('Match Tie!')
}
if (userChoise === "rock" && cpOptions === "paper") {
    Decission('YOU Loose!') 
}
if (userChoise === "rock" && cpOptions === "scissor") {
    Decission('YOU Loose')      
}
if (userChoise === "paper" && cpOptions === "scissor") {
    Decission('YOU win!')
    Score(score + 1);
}
if (userChoise === "paper" && cpOptions === "rock") {
    Decission('YOU Loose!')         
}

if (userChoise === "scissor" && cpOptions === "scissor") {
    Decission('YOU Win!')  
   Score(score + 1);
}
if (userChoise === "scissor" && cpOptions === "paper") {
    Decission('YOU Loose!')           
}
if (userChoise === "scissor" && cpOptions === "rock") {
    Decission('YOU Loose!')           
}
if (userChoise === "paper" && cpOptions === "scissors") {
    Decission('YOU Loose!')           
}
if (userChoise === "rock" && cpOptions === "scissors") {
    Decission('YOU Win!')  
   Score(score + 1);

}
};

const Decission = (decission) => {
    document.querySelector('.resultContainer h1').innerText = decission;
}

const Score = (totalScore) => {
    score = totalScore;
    document.querySelector('.score h1').innerText = totalScore;
}

    playAgain.addEventListener('click', ()=> {
        middleSection.style.display = "flex";
    bottomSection.style.display = "none";
    })


// const computerChoice = document.getElementById('CompChoice');
// const userChoice = document.getElementById('UserChoice');
// const displayResults = document.getElementById('result');
// const choices = document.querySelectorAll('.buttons');
// const userPointsDisplay = document.getElementById('userPoints')
// const computerPointsDisplay = document.getElementById('computerPoints');
// let playerChoice;
// let cpuChoice;
// let showResult;
// let totalChance = 10;
// let userPoints = 0;
// let computerPoints = 0;

// while(totalChance > 0 ) {
//     console.log("got it ");
//     if(totalChance === 0){
//         totalChance--;
//     }
//     else{
//         alert("kain")
//         totalChance--;
//     }
// }

// const generateResults = () => {
//     if(cpuChoice === playerChoice){
//         showResult = "Match Draw!"
//     }
//     if(cpuChoice === 'rock' && playerChoice === 'paper'){
//         showResult = "You win!"
//         userPoints++;
//         totalChance--;
//     }
//     if(cpuChoice === 'rock' && playerChoice === 'scissor'){
//         showResult = "You loose!"
//         computerPoints++;
//         totalChance--;
//     }
//     if(cpuChoice === 'paper' && playerChoice === 'scissor'){
//         showResult = "You win!"
//         userPoints++;
//         totalChance--;
//     }
//     if(cpuChoice === 'paper' && playerChoice === 'rock'){
//         showResult = "You lose!"
//         computerPoints++
//         totalChance--;
//     }
//     if(cpuChoice === 'scissor' && playerChoice === 'scissor'){
//         showResult = "You win!"
//         userPoints++;
//         totalChance--;
//     }
//     if(cpuChoice === 'scissor' && playerChoice === 'paper'){
//         showResult = 'You loose!'
//         computerPoints++;
//         totalChance--;
//     }
//     displayResults.innerHTML = showResult;
//     computerPointsDisplay.innerHTML = computerPoints;
//     userPointsDisplay.innerHTML = computerPoints;
// }
// const generateCompChoice = () => {
//     const randomChoice = Math.floor(Math.random() * choices.length)+1
//     if(randomChoice === 1){
//         cpuChoice = 'rock'
//     }
//     if(randomChoice === 2){
//         cpuChoice = 'paper'
//     }
//     if(randomChoice === 3){
//         cpuChoice = 'scissor'
//     }
//     computerChoice.innerHTML = cpuChoice;
// }

// choices.forEach(x => x.addEventListener('click' , (e)=> {
//     playerChoice = e.target.id;
//     userChoice.innerHTML = playerChoice;
//     generateCompChoice();
//     generateResults();
// }));
