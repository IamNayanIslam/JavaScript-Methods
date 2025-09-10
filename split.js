function customSplit(str, delimiter) {
  let result = [];
  if (delimiter === undefined) {
    result.push(str);
  }

  if (delimiter === "") {
    for (let i = 0; i < str.length; i++) {
      result.push(str[i]);
    }
  }

  let currentWord = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === delimiter) {
      result.push(currentWord);
      currentWord = "";
    } else {
      currentWord += str[i];
    }
  }
  result.push(currentWord);
  return result;
}

console.log("Test 1: String with leading/trailing spaces");
console.log(customSplit(" n a y a n  ", " "));
console.log(" n a y a n  ".split(" "));
console.log("---");

console.log("Test 2: Another delimiter");
console.log(customSplit("apple,banana,cherry", ","));
console.log("apple,banana,cherry".split(","));
console.log(
  "apple,banana,cherry".split(",").length ===
    customSplit("apple,banana,cherry", ",").length
);
