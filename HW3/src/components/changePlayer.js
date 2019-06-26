import { NODE_ELEMENTS as NODE } from "../constants";

export const changePlayer = state => {
  state.current = 0;
  document.getElementById("current-" + state.activePlayer).textContent = "0";
  console.log("state.activePlayer", state.activePlayer);
  document
    .querySelector(`.player-${state.activePlayer}-panel`)
    .classList.toggle("active");
  state.activePlayer = +!state.activePlayer;
  NODE.diceElement1.style.display = "none";
  NODE.diceElement2.style.display = "none";
  document
    .querySelector(`.player-${state.activePlayer}-panel`)
    .classList.toggle("active");
};
