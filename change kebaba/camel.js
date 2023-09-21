function kebabize(str) {
 let sentenceWithSpace = str.replace(/([A-Z])/g, " $1").trim().toLowerCase()
 const joinWithDash = sentenceWithSpace.split(' ').join('-')
 const output = joinWithDash.split('').filter((item)=> !item.match(/\d+/g)).join('');
 return output
}
console.log(kebabize("camelsHave3Humps"));
