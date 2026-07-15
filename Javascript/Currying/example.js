
function sum(num1) {
    return function (num2) {
        return num1 + num2;
    }
}

const sumWithTwo = sum(2);

const result = sumWithTwo(3);

console.log(result);