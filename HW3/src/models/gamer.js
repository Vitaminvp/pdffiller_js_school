export function Gamer(name, wins = 0, score = 0) {
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
