function arrayLikeToArray() {
  return Array.prototype.slice.apply(arguments);
}

const result = arrayLikeToArray(1, 2, 3, 4);
console.log(result);
