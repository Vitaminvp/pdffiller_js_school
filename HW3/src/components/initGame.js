import {NODE_ELEMENTS as NODE} from "../constants";
import { createPlayer } from ".";

export const initGame = (winners, players) => {

    NODE.current0.textContent = "0";
    NODE.current1.textContent = "0";
    NODE.score0.textContent = "0";
    NODE.score1.textContent = "0";
    NODE.diceElement1.style.display = "none";
    NODE.diceElement2.style.display = "none";

    players.player1 = createPlayer(1, winners, players);
    players.player2 = createPlayer(2, winners, players);
    NODE.player1Name.textContent = players.player1.getName();
    NODE.player2Name.textContent = players.player2.getName();
};