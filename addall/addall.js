function addAll(numbers) {
  if (numbers.length <= 1) {
    return 0;
  }
  numbers.sort((a, b) => a - b);
  const sumOfFirstNumber = numbers[0] + numbers[1];
  const newArr = [sumOfFirstNumber, ...numbers.slice(2)];
  return sumOfFirstNumber + addAll(newArr);
}

console.log(addAll([1, 2, 3, 4, 5]));
