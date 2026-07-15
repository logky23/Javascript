function findMissingNumber(arr) {
  let sum = 0;
  const n = arr.length + 1;
  for (let i = 0; i < n - 1; i++) {
    sum = sum + arr[i];
  }
  let expSum = (n * (n + 1)) / 2;
  const missingNumber = expSum - sum;
  console.log(missingNumber);
}

findMissingNumber([3, 2, 1, 5]);

// sum of first n natural numbers ((n * (n+1))/2)
