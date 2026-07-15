function movingZeros(arr) {
  const n = arr.length;
  const newArr = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) newArr.push(arr[i]);
  }
  for (let k = 0; k < n; k++) {
    if (!newArr[k]) newArr[k] = 0;
  }
  console.log(newArr);
}

movingZeros([1, 2, 0, 4, 3, 0, 5, 0]);
