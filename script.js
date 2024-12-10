"use strict";
const number = document.querySelector(".number");
const body = document.querySelector("body");
const scoree = document.querySelector(".score");
const gueess = document.querySelector(".guess");
const check = document.querySelector(".check");

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(secretNumber);

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

check.addEventListener("click", function () {
  const guess = Number(gueess.value);

  if (!guess) {
    displayMessage("No Number!");
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    number.textContent = secretNumber;
    body.style.backgroundColor = "#60b347";
    number.style.width = "30 rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High!" : "Too Low!");
      score--;
      scoree.textContent = score;
    } else {
      displayMessage("Sorry! You lost the game.");
      scoree.textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  scoree.textContent = score;
  displayMessage("Start guessing...");
  number.textContent = "?";
  gueess.value = " ";
  body.style.backgroundColor = "#333";
  number.style.width = "15 rem";
});