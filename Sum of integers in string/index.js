function sumOfIntegersInString(s) {
    //get all numbers inside a string
  let newArray = s.match(/\d/g).join('');
  console.log(newArray);
}
console.log(
  sumOfIntegersInString(
    "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"
  )
);
