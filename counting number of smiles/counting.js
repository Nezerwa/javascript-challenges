//return the total number of smiling faces in the array
function countSmileys(arr) {
  const validFaces = [":)", ":D", ";-D", ":~)", ";~D", ":-D", ":-)", ";D", ";~)", ";)", ":~D", ";-)"];
  let filteredValid = arr.filter((item) => validFaces.indexOf(item) !== -1);
  console.log(filteredValid);
  return filteredValid.length
}

console.log(countSmileys([";~>", ":)", ";->", ";o>", ";-(", ":~(", ";-)"]));
