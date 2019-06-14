function isPrimeNumber(n) {
    for (let i = 2; i < n; i++) {
        if(n % i === 0) return false;
    }
    return n > 1;
}

console.log('1',isPrimeNumber(1));
console.log('2',isPrimeNumber(2));
console.log('3',isPrimeNumber(3));
console.log('4',isPrimeNumber(4));
console.log('5',isPrimeNumber(5));
console.log('6',isPrimeNumber(6));
console.log('9',isPrimeNumber(9));
console.log('11',isPrimeNumber(11));
