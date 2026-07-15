const a = [[1,3,4,5], [88, 66, 44, 2]];

function search(arr, target) {
    const n = arr.length;
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < arr[row].length; col++) {
            if (arr[row][col] === target) return [row, col];
        }
    }
    return [-1, -1];
}

console.log(search(a, 66));
