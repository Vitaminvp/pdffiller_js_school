import { initGame, winnersList, diceRoll, saveScore } from "./components";
import { NODE_ELEMENTS as NODE } from "./constants";

let winners = {};
const state = { current: 0, activePlayer: 0 };

let players = {};
const lStorage = localStorage.getItem("winners");
if (lStorage) {
  winners = JSON.parse(lStorage);
}
initGame(winners, players);
NODE.btnRoll.addEventListener("click", () => diceRoll(state, winners, players));

NODE.btnHold.addEventListener("click", () => saveScore(state, players));

NODE.btnNew.addEventListener("click", () => {
  state.current = 0;
  initGame(winners, players);
});

NODE.winners.addEventListener("click", () => winnersList(winners));
