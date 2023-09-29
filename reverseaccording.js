function reverseIt(data) {
  if (typeof data === "string") {
    return data.split("").reverse().join("");
  }
  if (typeof data === "number") {
    return parseFloat(data.toString().split("").reverse().join(""));
  } else {
    return data;
  }
}
console.log(reverseIt(314159));
