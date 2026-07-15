function sum(a, b, c) {
    return a + b + c;
}

function curry(callback) {
    return function curreid(...args) {
        if (args.length === callback.length) {
           return callback(...args);
        } else {
            return function (...next) {
                return curreid(...next, ...args);
            }
        }

    }
}

console.log(curry(sum)(1)(2)(3));

