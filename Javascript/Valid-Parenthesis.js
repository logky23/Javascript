function validParenthesis(params) {
    const stack = [];
    const pair = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    const words = params.split('');
    const n = words.length;
    for (let i = 0; i < n; i++) {
        if (pair[words[i]]) {
            stack.push(pair[words[i]]);
        } else if (stack[stack.length - 1] === words[i]) {
            stack.pop();
        } else break;
    }
    console.log(stack.length === 0);
}

validParenthesis("()[]{}");
validParenthesis("([)]");
validParenthesis("()(");
validParenthesis("((((()))))");