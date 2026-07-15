// simple recursive way

// function fib(n) {
//     if (n < 2) return n;
//     return fib(n - 1) + fib(n - 2);
// }


// without any modern logic;
// function fib(n) {
//     let a = 0;
//     let b = 1;
//     for (let i = 2; i <= n; i++) {
//         [a, b] = [b, a + b];
//     }
//     return n === 0 ? 0 : b;
// }


// With Memo
function fib(n, map = new Map()) {
    if (map.has(n)) return map.get(n);
    if (n < 2) return n;
    const value = fib(n - 1, map) + fib(n - 2, map);
    map.set(n, value);
    return value;
}

console.log(fib(10));
