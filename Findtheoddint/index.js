function findOdd(A) {
  const count = {};
  A.forEach((element) => {
    count[element] ? (count[element] += 1) : (count[element] = 1);
  });
  const newObj = Object.entries(count)
  const filtered = Object.fromEntries( newObj.filter(([key, value])=> value % 2 !== 0))
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
