Spaceman Game

## User Story
- I want a space themed game 
- When page is initialized display
    - an array of all the letter in the alphabet
    - a spaceship
    - a start button
    - a black background with stars
    - 5 empty spaces that represent the word that i need to guess

- Gameplay
    - I will have 5 chances to correctly guess the letters
    - As i select letters, the game will tell me if it's part of the secret word
        - if it's part of the word it will show up in the appropriate space
        - if not part of the word, it will show highlighted in the grid
    - If i correctly guess the word, the spaceship will blast off- "You Win! wil be displayed
    - If i fail to guess the word, the spaceship will explode - "You Lose! will be displayed

- After gameplay
    - a 'Play Again' button will be displayed


## PseudoCode

- 1. Define required constants
    - Letter board - use an array - winning words
    - number of wrong guesses - 5


- 2. Define required variables used to track the state of the game
    - use a board array to represent the squares containing the letters [A, B, C,  D, ...]
    - Secret word - word that we have to guess
    - winning word - hold either true or false - if they guess the correct word, it's true because they've correctly guessed the word and cant' play again until you press play again. False - they haven't guessed the word correctly so can continue playing
    - 


- 3. Store elements on the page that will be accessed in code more than once in variables  
    (cached elements)
    - 5 spaces for guessing the letters
    - play again button
    - "Spaceman" at top
    - "Let's Play!
    - "You Win!"
    - "You Lose!"


- 4. Upon loading the app should:
    - initialize the state variables
    - initialize the board array to 26 squares each one showing one letter of the alphabet
    - Display 5 blank spaces which represent the word the player needs to guess
    - Display a spaceship image on the right side of the screen


- 5. Handle 'Start' button click
    - initialize game


- 6. Handle letter selection click
    - if guess is correct, the letter will display in the space for the word
    - if guess is incorrect, the letter will show as highlighted in the letter board


- 7.  Handle a win
    - Display "You Win!" at the top
    - Show the 'Play Again' button
    - Spaceship image will change to show a spaceship taking off


- 8. Handle a loss
    - Display "You Lose!" at the top
    - Show the 'Play Again' button
    - Spaceship image will change to show an exploded spaceship

- 9. Detect a win or loss
    - put an event listener and listen to which letter is clicked - use an id in html
    - grab the value with event.target.value and save it in a variable
    - on every click we want to compare the secret word to the word that the user is building
    -
    
    ![Wireframe 1](https://i.imgur.com/xyAtzUh.jpg)
    ![Wireframe 2](https://i.imgur.com/YuIjzUH.jpg)
    ![Wireframe 3](https://i.imgur.com/ala3wGT.jpg)
    ![Wireframe 4](https://i.imgur.com/2keT14Y.jpg)
    ![Wireframe 5](https://i.imgur.com/gBmXNjH.jpg)