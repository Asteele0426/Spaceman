/*----- constants -----*/

let wordList = ['BREAD', 'GREEN', 'CRATE', 'PLANT', 'QUIET', 'BLUNT', 'CRAMP' ]
let pickWordIndex = Math.floor(Math.random() * wordList.length)
let gameWord = wordList[pickWordIndex]
let wrongGuess = 5

console.log(gameWord)

/*----- state variables -----*/
//1 array to track total guesses and 1 array to track correct guesses

let totalGuessArray = []

//let correctGuessArray = ['', '', '', '', '']
let correctGuessArray = []

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

        
        
        totalGuessArray.push(event.target.innerHTML)
        console.log(event.target.innerHTML)
        console.log(totalGuessArray)

        if (gameWordArray.includes(event.target.innerHTML) === true) {
            correctGuessArray.push(event.target.innerHTML)
            
            console.log("Correct guess Array: " + correctGuessArray.length)
            console.log("Game word Array: " + gameWordArray.length)

            if (gameWordArray.length == correctGuessArray.length) {
                alert("You Win!")
            } else {
                alert("Good Guess!")
            }

            for(let i = 0; i <gameWordArray.length; i++){
                if (gameWordArray[i] == (event.target.innerHTML)) {
                    console.log("position:" + i)
                    document.getElementById(i).textContent = event.target.innerHTML
                }
            }
        } else {
           if (wrongGuess-- < 1) {
                alert("Sorry, You Lose!")
           } else {
                alert(event.target.innerHTML + " Is incorrect! You have " + wrongGuess + " guesses left.")
           }
           
        }
    } 
})

