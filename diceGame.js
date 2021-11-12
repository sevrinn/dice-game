
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
  let randomNumber = Math.floor(Math.random() * 6) + 1 
  
  //determine which player is playing
  if (player1Turn) {
    player1Dice.textContent = randomNumber
    player1Score += randomNumber
    player1Scoreboard.textContent = player1Score
    player1Dice.classList.remove("active")
    player2Dice.classList.add("active")
    turnMessage.textContent = "Player 2 Turn"
  } else {
    player2Dice.textContent = randomNumber
    player2Score += randomNumber
    player2Scoreboard.textContent = player2Score
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
    turnMessage.textContent = "Player 1 Turn"
  }

  if (player1Score >= 20 || player2Score >= 20) {
    if (player1Score > player2Score) {
      turnMessage.textContent = "Player 1 has won!"
    } else {
      turnMessage.textContent = "Player 2 has won!"
    }
    rollDice.style.display = "none"
    resetGame.style.display = "block"
  }
  player1Turn = !player1Turn

})