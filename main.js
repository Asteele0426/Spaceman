/*----- constants -----*/

let wordList = ['bread', 'green', 'crate', 'plant', 'quiet' ]
let pickWordIndex = Math.floor(Math.random() * wordList.length)
let gameWord = wordList[pickWordIndex]
let wrongGuess = 5

console.log(gameWord)

/*----- state variables -----*/
//1 array to track total guesses and 1 array to track correct guesses

let totalGuessArray = []
let correctGuessArray = ['', '', '', '', '']

/*----- cached elements  -----*/

const startButton = document.querySelector('button')
const answerBoard = document.querySelectorAll('.box')
const letterBoard = document.getElementById('board')




/*----- event listeners -----*/

const letters = document.querySelectorAll(".flex-ctr")
console.log(letters)

letterBoard.addEventListener("click",function(event) {
console.log(event.target.innerHTML)
})

/*----- functions -----*/

//function init() {
   //let totalGuessArray {

   // }
   //let correctGuessArray {

   // }
    
//}
