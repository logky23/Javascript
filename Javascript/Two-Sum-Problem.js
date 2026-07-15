function twoSumProblem(arr, expected) {
  const numObj = {};
  let result;
  for (let i = 0; i < arr.length; i++) {
    const complement = expected - arr[i];
    if (numObj[complement] !== undefined) {
      result = [numObj[complement], i];
      break;
    }
    numObj[arr[i]] = i;
  }
  console.log(result);
}

twoSumProblem([2, 7, 11, 15], 9);
