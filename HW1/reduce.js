Array.prototype.myReduce = function(callback, initialVal) {
    let accumulator = (initialVal === undefined) ? undefined : initialVal;
    for (let i = 0; i < this.length; i++) {
        if (accumulator !== undefined)
            accumulator = callback.call(undefined, accumulator, this[i], i, this);
        else
            accumulator = this[i];
    }
    return accumulator;
};

//tests
const numbers3 = [20, 20, 2, 3];
const total = numbers3.myReduce(function(a, b) {
    return a + b;
}, 10);
console.log(total); // 55
