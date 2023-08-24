
/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
export function triangleType(a: number, b: number, c: number): number {
  const newArr: number[] = [a, b, c].sort((a, b) => a - b);
  const [x, y, z] = newArr;
  if (x + y <= z) {
    return 0;
  } else if (x * x + y * y === z * z) {
    return 2;
  } else if (x * x + y * y > z * z) {
    return 1;
  } else {
    return 3;
  }
}
console.log(triangleType(7, 3, 2));
