//game state variables
let player1Score = 0
let player2Score = 0
let player1Turn = true

//create variables that grab necessary DOM nodes 
const turnMessage = document.querySelector("#message")
const player1Scoreboard = document.querySelector("#player1Scoreboard")
const player2Scoreboard = document.querySelector("#player2Scoreboard")
const player1Dice = document.querySelector("#player1Dice")
const player2Dice = document.querySelector("#player2Dice")
const rollDice = document.querySelector("#rollbtn")
const resetGame = document.querySelector("#resetBtn")

//hook up a click event to rollDice
rollDice.addEventListener("click", () => {
  console.log(Math.floor(Math.random() * 6) + 1) 
})