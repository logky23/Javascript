function calculate(operation, params) {
    return operation.bind(this, params);
}

function printValue(params) {
    console.log(params);
    return 5;
}

const ptFunction = calculate(printValue, 2);

console.log(calculate(printValue, 2));

