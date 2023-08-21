export function menFromBoys(arr: number[]): number[] {
  let men = new Set<number>(
    arr.filter((item) => item % 2 === 0).sort((a, b) => a - b)
  );

  let boys = new Set<number>(
    arr.filter((item) => item % 2 !== 0).sort((a, b) => b - a)
  );
  let newarr: number[] = [...men, ...boys];
  return newarr;
}
console.log(menFromBoys([1, 2, 3, 4, 6, 4]));
