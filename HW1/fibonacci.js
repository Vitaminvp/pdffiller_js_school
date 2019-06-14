function fibonacci(num) {
    if (num <= 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);
}


const memoFib = function () {
    let memo = {};
    return function fib(n) {
        if (n in memo) {
            return memo[n];
        } else {
            if (n <= 1) {
                memo[n] = n
            } else {
                memo[n] = fib(n - 1) + fib(n - 2)
            }
            return memo[n];
        }
    }
};


