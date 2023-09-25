const hero = (bullets, dragons) => {
  let calc = dragons * 2;
  if (bullets < calc) return false;
  return true;
};

console.log(hero(7, 4));
