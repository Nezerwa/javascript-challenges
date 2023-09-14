const reverseInPlace = (str) => {
  let newStr = str.split(" ").map((elt) => {
   return elt.split("").reverse().join(''); 
  });
  return newStr.join(' ')
};
console.log(reverseInPlace("I am the good boy"));