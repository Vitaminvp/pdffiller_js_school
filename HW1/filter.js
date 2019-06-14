Array.prototype.myFilter = function(callback, context) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this))
            arr.push(this[i]);
    }
    return arr;
};

//tests
const numbers = [1, 20, 30, 80, 2, 9, 3];
const newNum = numbers.myFilter(function(n) {
    return n >= 10;
});
console.log(newNum); // [ 20, 30, 80 ]
