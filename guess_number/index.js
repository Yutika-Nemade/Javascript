let randomNumber = parseInt(Math.random() * 100 + 1)

const userInput = document.querySelector('#guessField')
const submitGuess = document.querySelector('#subt')
const guessSlot = document.querySelector('.guesses')
const remainingSlot = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playgame = true

if(playgame){
   submitGuess.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value )
    validateGuess(guess)
   })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
        userInput.value = ''
    }else if(guess < 1){
        alert('Please enter a number greater than 1')
        userInput.value = ''
    }else if(guess > 100){
        alert('Please enter a number less than 100')
        userInput.value = ''
    }else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${guess}`) 
            endGame()
            remainingSlot.innerHTML = ``
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Number is too low`)
    }else if(guess > randomNumber){
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} , `
    numGuess++
    remainingSlot.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start Over</h2>`
    startOver.appendChild(p)
    playgame = false;
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remainingSlot.innerHTML = `$(11 - numGuess)`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playgame = true
    })

}