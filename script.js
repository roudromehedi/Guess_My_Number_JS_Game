'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number🎉';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 5;

let secretnumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
console.log(secretnumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number 🚫';

    //////////////////When Guess is Correct////////////////////////
  } else if (secretnumber === guess) {
    document.querySelector('.message').textContent = 'Correct Guess!🎉';
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;

      document.querySelector('.highscore').textContent = highscore;
    }
    //////////////////When Guess is High////////////////////////
  } else if (guess > secretnumber) {
    document.querySelector('.message').textContent = 'Too high!';

    score--;
    document.querySelector('.score').textContent = score;
    if (score <= 0) {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'You lose, Try again!😞';
    }
    //////////////////When Guess is Low////////////////////////
  } else if (guess < secretnumber) {
    document.querySelector('.message').textContent = 'Too low!';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent =
        'You lost the game, Try again!😞';
    }
  }
});
//////////////////When start again////////////////////////
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretnumber);
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  return;
});
