function printNum(num) {
    console.log(num++);
    if (num > 100) return;
    printNum(num);
}

const num = 1;
printNum(num);
