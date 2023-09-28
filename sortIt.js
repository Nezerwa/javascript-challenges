function sortByName(ary) {
  // Your code here
console.log(ary);
  const numbersToWords = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "one hundred",
    200: "two hundred",
    300: "three hundred",
    400: "four hundred",
    500: "five hundred",
    600: "six hundred",
    700: "seven hundred",
    800: "eight hundred",
    900: "nine hundred",
  };

  for (let i = 21; i <= 99; i++) {
    if (i % 10 !== 0) {
      const onesDigit = i % 10;
      const tensDigit = Math.floor(i / 10) * 10;
      const word = numbersToWords[tensDigit] + "-" + numbersToWords[onesDigit];
      numbersToWords[i] = word;
    }
  }

  for (let i = 101; i <= 999; i++) {
    if (i % 100 === 0) {
      numbersToWords[i] = numbersToWords[i - (i % 100)];
    } else if (i % 10 === 0) {
      numbersToWords[i] =
        numbersToWords[i - (i % 100)] + " and " + numbersToWords[i % 10];
    } else if (i % 100 <= 20) {
      numbersToWords[i] =
        numbersToWords[i - (i % 100)] + " and " + numbersToWords[i % 100];
    } else {
      const onesDigit = i % 10;
      const tensDigit = Math.floor((i % 100) / 10) * 10;
      numbersToWords[i] =
        numbersToWords[i - (i % 100)] +
        " and " +
        numbersToWords[tensDigit] +
        "-" +
        numbersToWords[onesDigit];
    }
  }
  let arrayOfObject = [];
  ary.forEach((element) => {
    if (element in numbersToWords) {
      arrayOfObject.push({ [element]: numbersToWords[element] });
    }
  });
  let arrOfKeys = arrayOfObject
    .map((obj) => Object.values(obj))
    .flat()
    .sort();
    console.log(arrOfKeys)

  let arrayOfNumbers = [];

  arrOfKeys.forEach((elt) => {
    for (const key in numbersToWords) {
      // console.log(key);
      if (elt === numbersToWords[key]) {
        arrayOfNumbers.push(parseInt(key));
      }
    }
  });
return arrayOfNumbers
}

console.log(sortByName([285, 825, 550, 664, 601, 945, 534, 292, 348, 340]));
