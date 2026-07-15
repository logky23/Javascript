function sum() {
    return [].reduce.apply(arguments, [(acc, currentElement) => acc += currentElement, 0])
}

console.log(sum(1, 2, 3, 4, 5));


