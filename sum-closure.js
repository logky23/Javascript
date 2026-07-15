function sum(...args) {
    let result = args.reduce((acc, curr) => acc += curr);
    function inner(...params) {
        if (!params.length) return result;
        result += params.reduce((acc, curr) => acc += curr, 0);
        return inner;
    }
    return inner;
}


// sum(1, 2, 3)(1)(5, 8)();
console.log(sum(1, 2, 3)(5, 8, 3)());
