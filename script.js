const wordArray = [
  "html",
  "css",
  "javascript",
  "web",
  "programming",
  "browser",
  "game",
  "random",
  "user",
  "player",
  "test",
  "pants",
  "hat",
  "shoes",
  "socks",
  "monkey",
  "dog",
  "cat",
  "giraffe",
  "captain",
  "dock",
  "deer",
  "dear",
  "fantastic",
  "bomb",
  "caramel",
  "chocolate",
  "hawk",
  "hundred",
  "product",
  "month",
  "year",
  "tier",
  "seed",
  "case",
  "phone",
  "button",
  "dial",
  "pad",
  "bank"
];

// Variables
var currentInput = "";
var time = 3;
var timeLeft = time;
var score = 0;
var gameStarted = false;

// Elements
var playerInput = document.getElementById("player-input");
var randomWordBox = document.getElementById("random-word-box");
var scoreBox = document.getElementById("score-box");
var timeLeftBox = document.getElementById("time-left-box");
var endGameTable = document.getElementById("end-game-table");
var scoreBoard = document.getElementById("score-board");
var playBtn = document.getElementById("play-btn");

// Start game by button click
playBtn.onclick = function() {
  endGameTable.style.display = "none";
  changeWord();
  startGame();
};

// Clear input field first & pick a random word from array
function changeWord() {
  playerInput.value = "";
  var rand = Math.floor(Math.random() * wordArray.length);
  randomWordBox.innerHTML = wordArray[rand];
}

var countDownInterval;

// Start countdown
function startGame() {
  countDownInterval = setInterval(countDown, 1000);
  randomWordBox.style.visibility = "visible";
  playerInput.style.visibility = "visible";
  playerInput.focus();
  gameStarted = true;
}

function countDown() {
  if (gameStarted) {
    if (timeLeft > 0) {
      timeLeft--;
      timeLeftBox.innerHTML = `Time: <span class='greenSpan'>${timeLeft}</span>`;
    } else {
      endGame();
    }
  }
}

// Check if user = chosen word on key stroke
function getWord() {
  currentInput = playerInput.value.toLowerCase();
  currentWord = randomWordBox.innerHTML.toLowerCase();

  if (currentInput == currentWord) {
    score++;
    scoreBox.innerHTML = `Score: <span class='greenSpan'>${score}</span>`;
    timeLeft = time;
    changeWord();
  }
}

// Finish game
function endGame() {
  clearInterval(countDownInterval);

  currentInput = "";
  playerInput.value = "";
  playerInput.blur();
  playerInput.style.visibility = "hidden";
  gameStarted = false;

  timeLeft = time;
  timeLeftBox.innerHTML = `Time: <span class='greenSpan'>${timeLeft}</span>`;

  scoreBoard.innerHTML = `<strong>Your score: <span class='greenSpan'>${score}</span></strong>`;

  randomWordBox.innerHTML = "GAME <span id='gameOverSpan'>OVER</span>";

  endGameTable.style.display = "block";

  timeLeft = time;
  score = 0;
  scoreBox.innerHTML = `Score: <span class='greenSpan'>${score}</span>`;
}
