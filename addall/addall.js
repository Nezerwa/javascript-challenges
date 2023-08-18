function addAll(numbers) {
  const findPermutations = (arr = []) => {
    let res = [];
    const helper = (arr2) => {
      if (arr2.length == arr.length) return res.push(arr2);
      for (let e of arr) if (!arr2.includes(e)) helper([...arr2, e]);
    };
    helper([]);
    return res;
  };

  let permutation = findPermutations(numbers);

  return permutation.map((element) => {
    return element.reduce((accumulator, currentValue) => {
      accumulator = accumulator + currentValue;
      accumulator = accumulator + currentValue;
      return accumulator;
    });
  }, 0);
}
console.log(addAll([1, 2, 3, 4]));
