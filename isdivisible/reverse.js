// Reverse a message so that the words and letters passed into it are 
// made lower case and reversed. In addition, capitalise the first letter of the
//  newly reversed words. If a number or symbol(!#,>) is
//  now in the first position of the word, no capitalisation needs to occur.


function reverseMessage(str) {
let ArrayOfStr = str.toLowerCase().split(' ').reverse()
let reversed = ArrayOfStr.map((elt)=> elt.split('').reverse().join(''))
console.log(reversed);
}
console.log(reverseMessage("This is an example of a Reversed Message!"));