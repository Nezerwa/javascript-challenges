// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.
function sumNoDuplicates(numList) {
  const count = {};
  numList.forEach((element) => {
    return count[element] ? (count[element] += 1) : (count[element] = 1);
  });
  const filtered = Object.keys(
    Object.fromEntries(
      Object.entries(count).filter(([key, value]) => value < 2)
    )
  );
  const output = filtered
    .map((elt) => parseInt(elt))
    .reduce((accumulator, currentValue) => accumulator + currentValue,0);
  return output;
}
console.log(sumNoDuplicates([3, 4, 3, 6]));
