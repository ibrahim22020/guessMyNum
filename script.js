'use strict';
const massage = document.querySelector('.message');
let secretNumber = Math.ceil(Math.random() * 20);
const hiddenBox = document.querySelector('.number');
const myScore = document.querySelector('.score');
const againBtn = document.querySelector('.again');
const myhighScore = document.querySelector('.highscore');
let score = 20;
let highScore = 0;

const displayMassage = function (message) {
  massage.textContent = message;
};

againBtn.addEventListener('click', () => {
  secretNumber = Math.ceil(Math.random() * 20);
  document.querySelector('.guess').value = null;
  displayMassage('Start guessing...');
  //   massage.textContent = 'Start guessing...';
  score = 20;
  myScore.textContent = score;
  document.body.style.backgroundColor = '#222';
  hiddenBox.style.width = '15rem';
  hiddenBox.textContent = '?';
});

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 1) {
    if (!guess) displayMassage('⛔No number!');
    // massage.textContent = '⛔No number!';
    else if (guess === secretNumber) {
      hiddenBox.textContent = secretNumber;
      displayMassage('🎉 Correct number!');
      //   massage.textContent = '🎉 Correct number!';
      document.body.style.backgroundColor = '#60b347';
      hiddenBox.style.width = '30rem';
      if (score > highScore) {
        highScore = score;
        myhighScore.textContent = highScore;
      }
    } else if (guess !== secretNumber) {
      displayMassage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      //   massage.textContent =
      //     guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      score--;
      myScore.textContent = score;
    }
  } else displayMassage('💥 You Lost the Game');
  // massage.textContent = '💥 You Lost the Game';

  console.log(score);
});
