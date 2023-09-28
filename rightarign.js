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
}

console.log(alignRight("Two lines, I am", 10));
