function matrixAddition(a, b) {
  let newMatrix = [];
  for (let i = 0; i < a.length; i++) {
    newMatrix[i] = [];
    for (let j = 0; j < b.length; j++) {
      newMatrix[i][j] = a[i][j] + b[i][j];
    }
  }
  return newMatrix;
}
console.log(
  matrixAddition(
    [
      [1, 2, 3],
      [3, 2, 1],
      [1, 1, 1],
    ],
    [
      [2, 2, 1],
      [3, 2, 3],
      [1, 1, 3],
    ]
  )
);
