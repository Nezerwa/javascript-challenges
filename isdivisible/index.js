const isDivisible = (n, ...args) => {
  return args.every((element) => n % element === 0);
};
console.log(isDivisible(3, 3, 4));
