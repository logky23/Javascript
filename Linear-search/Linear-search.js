const a = [1, 3, 4, 6, 7];

function linearSearch(arr, target) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

console.log(linearSearch(a, 8));
 