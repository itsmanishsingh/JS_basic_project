const randomNumber = (parseIntMath.random()*100+1);

const submnit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastrResult');
const lowOrHi = document.querySelector('.lowOrHi');  
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let preGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submnit.addEventListener('click' , function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
   if(isNaN(guess)){
    alert('Please enter a valid number');
   }else if(guess <1){
    alert('Please enter greater than 1');
   }else if(guess >100){
    alert('Please enter smaller than 100');
   }else{
        preGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over . Random number was ${randomNumber}`)
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
   }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
        endGame();
    }else if(guess < randomNumber){
        displayMessage(`Number is too low`);
    }else if(guess > randomNumber){
        displayMessage(`Number is too High`);
    }
}

function displayGuess(guess){
    userInput.value = ``;
    guessSlot.innerHTML +=`${guess}   `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    //
}

function newGame(){
    //
}
