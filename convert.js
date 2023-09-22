function rgb(r, g, b) {
  if (r > 255) {
    r = 255;
  }
  if (g > 255) {
    g = 255;
  }
  if (b > 255) {
    b = 255;
    console.log(b);
  }

  if (r < 0) {
    r = 0;
  }
  if (g < 0) {
    g = 0;
  }
  if (b < 0) {
    b = 0;
  }
  // complete this function
  const red = r.toString(16);
  const green = g.toString(16);
  const blue = b.toString(16);
  let newArray = [red, green, blue];
  let arrayOfCap = newArray.map((elt) => {
     if (elt.length === 1){
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

console.log(rgb(3,200,169));
