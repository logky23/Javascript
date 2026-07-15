const a = [2, 1, 5, 1, 3, 2];

function maxSumOfSubArray(arr, size) {
    const n = arr.length;
    let windowSum = 0;
    let maxSum = 0;
    for (i = 0; i < size; i++) {
        windowSum = windowSum + arr[i];
    } // first result
    maxSum = windowSum;
    for (let i = size; i < n; i++) {
        windowSum = windowSum + (arr[i] - arr[i - size]);
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}

console.log(maxSumOfSubArray(a, 3));
