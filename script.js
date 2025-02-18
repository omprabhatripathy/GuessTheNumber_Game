'use strict';
/*
console.log(document.querySelector('.message').textContent);  // Selects the first element with the class 'message'
document.querySelector('.message').textContent = 'Correct Number!';  // Changes the text content of the selected element

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);  // Returns the value of the input element
*/

let secretNumber = Math.trunc(Math.random()*20)+1; // Generates a random number between 0 and 1
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function() {
    // Code to be executed when the button is clicked
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = 'No number! 😢';
    }else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number! 😁';
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }else if (guess > secretNumber) {
        if(score >1){
            document.querySelector('.message').textContent = 'Too high! 😢';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'You lost the game! 😢';
        }
    }else if (guess < secretNumber) {
        if(score >1){
            document.querySelector('.message').textContent = 'Too low! 😢';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'You lost the game! 😢';
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

// Math.random() generates a random number between 0 and 20
