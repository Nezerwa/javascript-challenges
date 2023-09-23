function noBoringZeros(n) {
  const newString = n.toString().split("");
  let newArray = newString.map((element, index) => {
    if (element === "0" && newString[index + 1] === "0") element = "";
    return element;
  });

  if (newArray[newArray.length - 1] === "0" && newArray.length !== 1) {
    newArray.pop();
  }

  return parseInt(newArray.join(""));
}
console.log(noBoringZeros(0));
