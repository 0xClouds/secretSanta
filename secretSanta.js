let entrants = {};
let giftPool = [];
let santas = [];
let winnerList = {};

function enterSecretSanta(sender, gift) {
  entrants[sender] = gift;
  giftPool.push(gift);
  santas.push(sender);
}

function shuffle(arr) {
  for (let i = giftPool.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random(i + 1));
    [arr[i], arr[random]] = [arr[random], arr[i]];
  }
  return arr;
}

function secretSantaSender() {
  shuffle(giftPool);
  for (let i = 0; i < santas.length; i++) {
    winnerList[santas[i]] = giftPool[i];
  }
}

// fake function calls
enterSecretSanta("0x1", 3);
enterSecretSanta("0x2", 4);
enterSecretSanta("0x3", 5);
enterSecretSanta("0x4", 6);

secretSantaSender();

console.log(entrants);
console.log("The gifts:", giftPool);
console.log("The entrants(santas):", santas);
console.log("The gifts distributed", winnerList);
