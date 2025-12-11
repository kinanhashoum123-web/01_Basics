let a = 3;
let b = 6;

let sum = 0;

if (a > b) {
  let temp = a;
  a = b;
  b = temp;
}

for (let i = a; i <= b; i++) {
  sum += i;
}

console.log("Summe von " + a + " bis " + b + " ist: " + sum);
