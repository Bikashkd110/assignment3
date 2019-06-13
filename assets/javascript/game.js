var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = []; 
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from
document.onkeyup = function(event) {
    //*** */taking user guess***
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 
    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; //computer selects random letter
    guessesSoFar.push(userGuess); //pushing user guess to guesses so far
    if (userGuess == computerGuess) {
        wins++;
        alert('Congratulation! You guesesed corrrectly. You Won!');
        guessesLeft = 10; //reseting the guesses back to 10 so that the user can play again
        guessesSoFar.length = 0; 
    }
    else if (guessesLeft == 0){
        losses++;
        alert('You did not guess the correct letter. You lost. Please try again.');
        guessesLeft = 10;
        guessesSoFar.length = 0;
    }
    else if (userGuess !== computerGuess){
        guessesLeft--; 
    }  
    // Taking the tallies and displaying them in HTML 
    
    var html = "<br>" + "<h1>The Psychic Game</h1>" + 
    "<p>Guess what letter I'm thinking of!</p>" +
    "<p id = totwins>Total Wins: " + 
    wins + 
    "</p>" +
    "<p id = totlosses>Total Losses: " + 
    losses + 
    "</p>" +
    "<p id = guessleft>Guesses Left: " + 
    guessesLeft + 
    "</p>" +
    "<p id = guesssofar>Your Guesses so far: " +
    guessesSoFar +
    "</p>"
    ;
    // Placing the html into the game ID
    document.querySelector('#game').innerHTML = html;


}
