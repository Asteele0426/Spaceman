/*----- constants -----*/

let wordList = ['BREAD', 'GREEN', 'CRATE', 'PLANT', 'QUIET' ]
let pickWordIndex = Math.floor(Math.random() * wordList.length)
let gameWord = wordList[pickWordIndex]
let wrongGuess = 5

console.log(gameWord)

/*----- state variables -----*/
//1 array to track total guesses and 1 array to track correct guesses

let totalGuessArray = []
let correctGuessArray = ['', '', '', '', '']

let winningWord

//create an array for the purpose of checking to see if a guess is in the gameWord array
let gameWordArray = []
for(let i = 0; i <gameWord.length; i++){
    gameWordArray[i] = gameWord[i]
}
/*----- cached elements  -----*/

const startButton = document.querySelector('button')
const answerBoard = document.querySelectorAll('.box')
const letterBoard = document.getElementById('board')




/*----- event listeners -----*/

const letters = document.querySelectorAll(".flex-ctr")



console.log(letters)

letterBoard.addEventListener("click",function(event) {
    if (totalGuessArray.includes(event.target.innerHTML) === true) {
        alert("You have already guessed this letter")
    } else {
        if(gameWord.includes(event.target.innerHTML) === true) {
            alert("Good Guess!")
        }
        totalGuessArray.push(event.target.innerHTML)
        console.log(event.target.innerHTML)
        console.log(totalGuessArray)
    } 
})


/*----- functions -----*/

//function init() {
   //let totalGuessArray {

   // }
   //let correctGuessArray {

   // }
    
//}
