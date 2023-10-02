function solve(str, idx) {
  for (let i = idx; i < str.length; i++) {
    if (str.charAt(idx) !== "(") return -1;
    else if(str.charAt(idx) === '(')
  }
}
console.log(solve("((1)23(45))(aB)", 0));
