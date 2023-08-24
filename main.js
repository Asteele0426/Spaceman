/*----- constants -----*/

let wordList = ['BREAD', 'GREEN', 'CRATE', 'PLANT', 'QUIET', 'BLUNT', 'CRAMP']
let pickWordIndex = Math.floor(Math.random() * wordList.length)
let gameWord = wordList[pickWordIndex]
let wrongGuess = 5

/*----- state variables -----*/

let totalGuessArray = []
let correctGuessArray = []
let gameWordArray = []

for (let i = 0; i < gameWord.length; i++) {
    gameWordArray[i] = gameWord[i]
}
/*----- cached elements  -----*/

const answerBoard = document.querySelectorAll('.box')
const letterBoard = document.getElementById('board')
const messageLabel = document.querySelector('#mainMessage')
messageLabel.style.color = 'yellow'
messageLabel.style.fontsize = "24px"

document.getElementById("restart").style.display = "none"

/*----- event listeners -----*/

const letters = document.querySelectorAll(".flex-ctr")

letterBoard.addEventListener("click", function (event) {
   if (event.target.id != "board") {
    if (totalGuessArray.includes(event.target.innerHTML) === true) {
        messageLabel.textContent = "You have already guessed this letter"

    } else {

        totalGuessArray.push(event.target.innerHTML)

        if (gameWordArray.includes(event.target.innerHTML) === true) {
            correctGuessArray.push(event.target.innerHTML)

            if (gameWordArray.length == correctGuessArray.length) {
                messageLabel.textContent = "You Win!"
                document.getElementById("restart").style.display = "block"
            } else {
                messageLabel.textContent = "Good Guess!"
            }

            for (let i = 0; i < gameWordArray.length; i++) {
                if (gameWordArray[i] == (event.target.innerHTML)) {
                    document.getElementById(i).textContent = event.target.innerHTML
                }
            }
        } else {
            if (wrongGuess-- < 1) {
                messageLabel.textContent = "Sorry, You Lose!"
                document.getElementById("restart").style.display = "block"
            } else {
                messageLabel.textContent = event.target.innerHTML + " Is incorrect! You have " + wrongGuess + " guesses left."
            }

        }
    }
}
})
