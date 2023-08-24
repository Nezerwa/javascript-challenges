export function generateChatRoomNames(users: string[]): string[] {
  if (users.length === 0) {
    return [];
  } else if (users.length === 1) {
    return users.map((x) => {
      return x.split(" ").slice(0, 1);
    })[0];
  } else if (users.length >= 2) {
    users.map((elt) => {
      console.log(elt.split(" "));
    });
  }
  return [""];
}
console.log(generateChatRoomNames(["eligrand nezerwa", "kagabo peter"]));
