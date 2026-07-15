// Approach - 1

function processStringOne(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if ( str[i] === '*' ) {
           if (result) {
                result = result.slice(0, (result.length - 1 ));
                continue;
           }
        }
        result += str[i];
    }
    return result;
}

// Approach 2
const processStringTwo = (str) => {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        str[i] == "*" ? stack.pop() : stack.push(str[i])
    }
    return stack.join("");
}


console.log(processStringOne("grr*appp**hicsz*"));
console.log(processStringTwo("grr*appp**hicsz*"));