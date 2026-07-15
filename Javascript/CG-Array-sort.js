const arr = [2, 100, -1, 44, 21, -1, -1, 98];

function sortArray(params) {
    const n = params.length;
    const sorted = params.filter(el => el !== -1).sort((a, b) => a - b);
    let j = 0;
    for (let i = 0; i < n; i++) {
        params[i] = params[i] === -1 ? -1 : sorted[j++];
    };
    console.log(params);
};

sortArray(arr);