export function solve(s: string) {
  let newArr = [];
  for (let i = 97; i <= 122; i++) {
    newArr.push(String.fromCharCode(i));
  }

  let arrOfCharCode: number[] = [];
  newArr.forEach((elt) => {
    arrOfCharCode.push(elt.charCodeAt(0) - 96);
  });

  let max = 0;
  let sum = 0;
  for (let c of s) {
    if ("aeiou".includes(c)) {
      max = Math.max(max, sum);
      sum = 0;
    } else {
      sum += arrOfCharCode[c.charCodeAt(0) - 97];
    }
  }

  max = Math.max(max, sum);

  return max;
}
console.log(solve("wakpyxacukthaourdyvffsamucchynfkzcyzczsyncmkvbm"));
