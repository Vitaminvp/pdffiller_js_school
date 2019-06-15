/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

const RESET_VALUE = 2;
const DEFAULT_WIN_VALUE = 100;
const DEFAULT_MAX_VALUE = 1000;

let scores = [0, 0];
let activePlayer = 0;
let current = 0;
const diceElement1 = document.querySelector(".dice-1");
const diceElement2 = document.querySelector(".dice-2");
const player1Name = document.querySelector("#name-0");
const player2Name = document.querySelector("#name-1");
let player1;
let player2;
const initGame = () => {
  document.querySelector("#current-0").textContent = 0;
  document.querySelector("#current-1").textContent = 0;
  document.querySelector("#score-0").textContent = 0;
  document.querySelector("#score-1").textContent = 0;
  diceElement1.style.display = "none";
  diceElement2.style.display = "none";
  scores = [0, 0];
  current = 0;
  player1 = new Gamer();
  player2 = new Gamer();
  [player1, player2].forEach((name, i) =>{
    let newName = prompt(`Введите Имя ${i+1}-го игрока`);
    while(!newName){
      newName = prompt(`Нужно ввести Имя ${i+1}-го игрока`);
    }
    name.name = newName;
  });
  player1Name.textContent = player1.name;
  player2Name.textContent = player2.name;
};

initGame();

document.querySelector(".btn-roll").addEventListener("click", function() {
  let dice1 = Math.floor(Math.random() * 6) + 1;
  let dice2 = Math.floor(Math.random() * 6) + 1;

  let range = document.querySelector("#range-input").value;

  if( range == 0 || range > DEFAULT_MAX_VALUE) {
    range = DEFAULT_WIN_VALUE;
    document.querySelector("#range-input").value = DEFAULT_WIN_VALUE;
  }

  diceElement1.src = `dice-${dice1}.png`;
  diceElement1.style.display = "block";

  diceElement2.src = `dice-${dice2}.png`;
  diceElement2.style.display = "block";

  if (dice1 === RESET_VALUE || dice2 === RESET_VALUE || dice2 === dice1) {
    changePlayer();
  } else {
    current += (dice1 + dice2);
    document.getElementById("current-" + activePlayer).textContent = current;
    console.log("range", range);
    if (scores[activePlayer] + current >= range) {
      alert(`Player ${activePlayer? player2.name : player1.name} won!!!`);
      initGame();
    }
  }
});

const changePlayer = () => {
  current = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  document
    .querySelector(`.player-${activePlayer}-panel`)
    .classList.toggle("active");
  activePlayer = +!activePlayer;
  diceElement1.style.display = "none";
  diceElement2.style.display = "none";
  document
    .querySelector(`.player-${activePlayer}-panel`)
    .classList.toggle("active");
};

document.querySelector(".btn-hold").addEventListener("click", function() {
  scores[activePlayer] += current;
  document.querySelector(`#score-${activePlayer}`).textContent =
    scores[activePlayer];
  changePlayer();
});

document.querySelector(".btn-new").addEventListener("click", function() {
  initGame();
});

function Gamer(name, score = 0) {
  this.name = name;
  this.score = score;
}
Gamer.prototype.getScore = function () {
  return this.score;
};
Gamer.prototype.setScore = function (score) {
  this.score = score;
};
Gamer.prototype.resetScore = function () {
  this.score = 0;
};