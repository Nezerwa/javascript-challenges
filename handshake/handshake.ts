//lets create a avaribale that we are going to use to calculate the number of people
//initialize that varibale to one
//lets first find the formula of calculating the number of shakes
//we do the loop for every iteration to calculate the number of shakes
//and then compare it to the handshakes we have in paramter of the function
//initializenumber of people varibale to the value of i
//return the number of people varibale

export function getParticipants(handshakes: number): number {
  let numberOfPeople: number = 0;
  for (
    let i = 0;
    handshakes > (numberOfPeople * (numberOfPeople - 1)) / 2;
    i++
  ) {
    numberOfPeople = i;
  }
  return numberOfPeople;
}
getParticipants(1);
