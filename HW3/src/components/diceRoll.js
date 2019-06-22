import { DEFAULT_VALUES as DEFAULT, NODE_ELEMENTS as NODE } from "../constants";
import { initGame } from "./";
import { changePlayer } from "./";

export const diceRoll = (state, winners, players) => {
  let dice1 = Math.floor(Math.random() * 6) + 1;
  let dice2 = Math.floor(Math.random() * 6) + 1;
  let range = NODE.rangeInput.value;
  if (range == 0 || range > DEFAULT.MAX) {
    range = DEFAULT.WIN;
    NODE.rangeInput.value = DEFAULT.WIN;
  }
  NODE.diceElement1.src = `dice-${dice1}.png`;
  NODE.diceElement1.style.display = "block";
  NODE.diceElement2.src = `dice-${dice2}.png`;
  NODE.diceElement2.style.display = "block";
  if (dice1 === DEFAULT.RESET || dice2 === DEFAULT.RESET || dice2 === dice1) {
    changePlayer(state);
  } else {
    state.current += dice1 + dice2;
    document.getElementById("current-" + state.activePlayer).textContent =
      state.current;
    const winner = state.activePlayer ? players.player2 : players.player1;
    if (winner.getScore() + state.current >= range) {
      winner.setWins(winner.getWins() + 1);
      winners[winner.getName()] = winner.getWins();

      alert(
        `Player ${winner.getName()} won!!! \n Score ${winner.getScore() +
          state.current}`
      );
      localStorage.setItem("winners", JSON.stringify(winners));
      state.current = 0;
      initGame(winners, players);
    }
  }
};
