const solve = (s) => {
  const arrOfNumbers = s.match(/\d+/g).map((item) => parseInt(item));
  const output = arrOfNumbers.sort((a, b) => b - a);
  return output[0];
};
console.log(solve("gh12cdy695m1"));
