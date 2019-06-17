
const RESET_VALUE = 2;
const DEFAULT_WIN_VALUE = 100;
const DEFAULT_MAX_VALUE = 1000;
let winners = {};
let activePlayer = 0;
let current = 0;
const diceElement1 = document.querySelector(".dice-1");
const diceElement2 = document.querySelector(".dice-2");
const player1Name = document.querySelector("#name-0");
const player2Name = document.querySelector("#name-1");
let player1;
let player2;
function Gamer(name, wins = 0, score = 0) {
  this.name = name;
  this.score = score;
  this.wins = wins;
}

Gamer.prototype.getName = function() {
  if(typeof this.name === 'symbol') {
    return this.name.toString();
  }
  return this.name;
};
Gamer.prototype.setScore = function(score) {
  this.score = score;
};
Gamer.prototype.getScore = function() {
  return this.score;
};
Gamer.prototype.setWins = function(wins) {
  this.wins = wins;
};
Gamer.prototype.getWins = function() {
  return this.wins;
};
Gamer.prototype.resetScore = function() {
  this.score = 0;
};
const initGame = () => {
  const lStorage = localStorage.getItem("winners");
  if (lStorage) {
    winners = JSON.parse(lStorage);
  }
  document.querySelector("#current-0").textContent = "0";
  document.querySelector("#current-1").textContent = "0";
  document.querySelector("#score-0").textContent = "0";
  document.querySelector("#score-1").textContent = "0";
  diceElement1.style.display = "none";
  diceElement2.style.display = "none";
  current = 0;

  const createPlayer =  i => {
    let newName = prompt(`Введите Имя ${i} - го игрока`);
    if (newName) newName = newName.trim();
    while (!newName) {
      newName = prompt(`Нужно ввести Имя ${i} - го игрока`);
    }
    if (winners.hasOwnProperty(newName)) {
      const isDesiredUser = confirm(
          `Это вы ${newName} выигрышей: ${winners[newName]}?`
      );
      if (isDesiredUser) {
        return new Gamer(newName, winners[newName]);
      } else {
        return new Gamer(Symbol(newName));
      }
    }
    return new Gamer(newName);
  };

  player1 = createPlayer(1);
  player2 = createPlayer(2);

  console.log("player1", player1);
  console.log("player2", player2);

  player1Name.textContent = player1.getName();
  player2Name.textContent = player2.getName();
};

initGame();

document.querySelector(".btn-roll").addEventListener("click", function() {
  let dice1 = Math.floor(Math.random() * 6) + 1;
  let dice2 = Math.floor(Math.random() * 6) + 1;
  let range = document.querySelector("#range-input").value;
  if (range == 0 || range > DEFAULT_MAX_VALUE) {
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
    current += dice1 + dice2;
    document.getElementById("current-" + activePlayer).textContent = current;
    const winner = activePlayer ? player2 : player1;
    if (winner.getScore() + current >= range) {
      winner.setWins(winner.getWins() + 1);
      winners[winner.getName()] = winner.getWins();

      alert(`Player ${winner.getName()} won!!! \n Score ${winner.getScore() + current}`);
      localStorage.setItem("winners", JSON.stringify(winners));
      initGame();
    }
  }
});

const changePlayer = () => {
  current = 0;
  document.getElementById("current-" + activePlayer).textContent = "0";
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
  const currentPlayer = activePlayer ? player2 : player1;
  currentPlayer.setScore(currentPlayer.getScore() + current);
  console.log("currentPlayer", currentPlayer);
  document.querySelector(`#score-${activePlayer}`).textContent =
      currentPlayer.getScore();
  changePlayer();
});

document.querySelector(".btn-new").addEventListener("click", function() {
  initGame();
});

document.querySelector(".winners").addEventListener("click", function() {
  let winnersList = Object.keys(winners)
    .sort((a, b) => winners[b] - winners[a])
    .map(key => `Игрок: ${key} - побед: ${winners[key]}`)
    .join("\n");
  alert(winnersList);
});
