function sumOfIntegersInString(s) {
  let matches = s.match(/\d+/g);
  if (!matches) return 0;
  const arrayOfNumbers = matches.map((item) => parseInt(item));
  return arrayOfNumbers.reduce(
    (accumulator, currentValue) => (accumulator = accumulator + currentValue)
  );
}
console.log(
  sumOfIntegersInString(
    "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"
  )
);
