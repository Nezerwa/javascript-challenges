// Reverse in  place
// If you have a string like "I am the good boy". How can you generate "I ma eht doog yob"? Please note that the words are in place but reversed.
const reverseInPlace = (str) => {
  let newStr = str.split(" ").map((elt) => {
   return elt.split("").reverse().join(''); 
  });
  return newStr.join(' ')
};
console.log(reverseInPlace("I am the good boy"));