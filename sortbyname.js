function numberToWords(number) {
    const ones = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];

    
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  if(number === 0) return 'Zero'
  if(number < 20) return ones[number]
  if(number < 100){
    const ten = Math.floor(number / 10)
    const remainder = number % 10
     return tens[ten] + (remainder !== 0 ? `-${ones[remainder]}` : "");
  }
  
  if (number < 1000) {
    const hundred = Math.floor(number / 100);
    const remainder = number % 100;
    return ones[hundred] + ' hundred' + (remainder !== 0 ? ` and ${numberToWords(remainder)}` : '');
  }

}

  function sortByName(arr) {
    const change =  arr.map(numberToWords);
    change.sort()
    console.log(change);
  }

  console.log(sortByName([1, 2, 3, 4, 5, 700]))
