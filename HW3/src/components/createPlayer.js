import  { Gamer }  from "../models";

export const createPlayer =  (i, winners, players) => {
    let newName = prompt(`Введите Имя ${i} - го игрока`);
    if (newName) newName = newName.trim();
    while (!newName || ((i === 2) && players.player1.getName() === newName)) {
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