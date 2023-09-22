function stray(numbers) {
  let count = {};
  numbers.forEach((element) => {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  });
  let newArray = Object.entries(count)
  let output = Object.fromEntries(
    newArray.filter(([key, value]) => value == 1)
  );
  return parseInt(Object.keys(output));
}

console.log(stray([1, 1, 3]));
