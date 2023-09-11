function nameInStr(str, name) {
  str = str.toLowerCase().split("");
  name = name.toLowerCase();
  for (let i = 0; i < name.length; i++) {
    if (str.includes(name[i])) {
      str.splice(0, str.indexOf(name[i]) + 1);
    } else {
      return false;
    }
  }

  return true;
}
