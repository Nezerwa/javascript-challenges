function alignRight(text, width) {
  const regex = /,/i;
  let newStr = "";
  let spaces = 0;
  if (text.length === width) {
    return text;
  }

  if (text.length < width) {
    spaces = " ".repeat(width - text.length);
    return spaces + text;
  }
  if (text.includes(",") && text.length > width) {
    newStr = text.split(",");
  }
  const [string1, string2] = newStr;
  //    console.log(string1);
  //    console.log(string2)
  if (string1.length === width && string2.length === width) {
    return `${string1} \n ${string2}`;
  } else if (string1.length === width && string2.length < width) {
    spaces = " ".repeat(width - string2.length - 1);
    return `${string1} + ${spaces}+${string2}`;
  }
//   console.log(newStr);
}

console.log(alignRight("Two lines, I am", 10));
