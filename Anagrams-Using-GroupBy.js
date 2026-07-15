const res = ["bat", "tab", "ear", "are", "have"];

const groupBy = Object.groupBy(res, el => el.split("").sort().join(""));
const result = Object.values(groupBy);
console.log(result);
