function sortByLength(array) {
  let count = {};
  array.forEach((string) => {
    if (count[string]) {
      count[string] = 1;
    } else {
      count[string] = string.length;
    }
  });
  const sorted = Object.fromEntries(
    Object.entries(count).sort(([, a], [, b]) => a - b)
  );
  return Object.keys(sorted)
}
console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));
