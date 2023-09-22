function rgb(r, g, b) {
  r = r > 255 ? 255 : r;
  g = g > 255 ? 255 : g;
  b = b > 255 ? 255 : b;
  
  r = r < 0 ? 0 : r;
  g = g < 0 ? 0 : g;
  b = b < 0 ? 0 : b; // complete this function
  const red = r.toString(16);
  const green = g.toString(16);
  const blue = b.toString(16);
  let newArray = [red, green, blue];
  let arrayOfCap = newArray.map((elt) => {
    if (elt.length === 1) {
      return `0${elt.toUpperCase()}`;
    }
    return elt.toUpperCase();
  });
  arrayOfCap = arrayOfCap.map((item, index) => {
    if (item === "0") item += "0";
    return item;
  });
  return arrayOfCap.join("");
}

console.log(rgb(3, 200, 169));
