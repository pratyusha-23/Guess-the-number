"use strict";

//generating random number
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMesssage = function (message) {
  document.querySelector(".message").textContent = message;
};

//eventlistener is added
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //when there is no input
  if (!guess) {
    //  document.querySelector('.message').textContent = 'No number!🙅‍♂️';
    displayMesssage("No number!🙅‍♂️");
  }

  //when player wins
  else if (guess === number) {
    //  document.querySelector('.message').textContent = 'You win!!🥳';
    document.querySelector(".number").textContent = number;
    displayMesssage("You win!!🥳");
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";
    if (highScore < score) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  //when guess is wrong
  else if (guess != number) {
    if (score > 1) {
      //  document.querySelector('.message').textContent = guess > number ? 'You are high' : 'You are low';
      displayMesssage(guess > number ? "You are high" : "You are low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You lost😣'
      displayMesssage("You lost😣");
      document.querySelector(".score").textContent = 0;
    }
  }
});

//implementing reset
document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.number').textContent = number;
  score = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  //document.querySelector('.message').textContent = 'Start guessing...'
  displayMesssage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
});
