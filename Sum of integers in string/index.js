function sumOfIntegersInString(s) {
  //get all numbers inside a string
  //   let match = s.match(/\d/g);
  let newArray = [];
  let newArrayOfString = s.split("");
  newArrayOfString.forEach((element) => {
    if (element.match(/\d/) !== null) {
      newArray.push(element);
    } else {
      return element;
    }
  });
  console.log(newArray);
}
console.log(
  sumOfIntegersInString(
    "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"
  )
);
