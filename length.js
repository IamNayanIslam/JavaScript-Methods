function getLength(strOrArr) {
  let length = 0;

  while (strOrArr[length] !== undefined) {
    length++;
  }

  return length;
}

console.log(getLength("Hello World!"));
console.log(getLength([1, 2, 3, 5, 5, 7, 6, 8]));
