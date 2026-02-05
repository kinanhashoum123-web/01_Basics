let count = Number(prompt("Wie viele Zahlen möchtest du eingeben?"));
let sum = 0;

for (let i = 0; i < count; i++) {
  let number = Number(prompt("Gib eine Zahl ein:"));
  sum = sum + number;
}

let average = sum / count;


average = Math.floor(average);

console.log("Der Durchschnitt ist: " + average);
