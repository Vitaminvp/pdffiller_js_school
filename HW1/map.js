Array.prototype.myMap = function(callback) {
    const arr = [];
    for (let i = 0; i < this.length; i++)
        arr.push(callback(this[i], i, this));
    return arr;
};

//tests
const arrs = ['dic tanin', 'boo radley', 'hans gruber'];
const numbers2 = [1, 4, 9];

const goodT = arrs.myMap(function(n) {
    return n;
});

const squareRoot = numbers2.myMap(function(num) {
    return Math.sqrt(num);
});

console.log(goodT); // [ 'dic tanin', 'boo radley', 'hans gruber' ]
console.log(squareRoot); // [ 1, 2, 3 ]
