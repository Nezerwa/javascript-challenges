// Remove the duplicates without using set
function removeDuplicates(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if(unique.indexOf(arr[i]) == -1){
      unique.push(arr[i])
    }
  }
  return unique
}
removeDuplicates([1, 2, 3, 4, 4, 5]);
