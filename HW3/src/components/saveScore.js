import {changePlayer} from "./changePlayer";

export const saveScore = (state, players) =>  {
    const currentPlayer = state.activePlayer ? players.player2 : players.player1;
    currentPlayer.setScore(currentPlayer.getScore() + state.current);
    document.querySelector(
        `#score-${state.activePlayer}`
    ).textContent = currentPlayer.getScore();
    changePlayer(state);
};