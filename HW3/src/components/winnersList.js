export const winnersList = winners => {
    let list = Object.keys(winners)
        .sort((a, b) => winners[b] - winners[a])
        .map(key => `Игрок: ${key} - побед: ${winners[key]}`)
        .join("\n");
    alert(list);
};