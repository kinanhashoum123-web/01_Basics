let banana = "Banane";
let apple = "Apple";
let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

let roundedResult1 = Math.round(0.34 * applePricePerKilo * 8);
let roundedResult2 = Math.round(0.22 * bananaPricePerKilo * 17);
let roundedResult3 = Math.round(0.34 * applePricePerKilo * 1000);
let roundedResult4 = Math.round(0.22 * bananaPricePerKilo * 1000);

console.log(" 8 Äpfel: " + roundedResult1);
console.log(" 17 Bananen: " + roundedResult2);
console.log(" 1000 Äpfel: " + roundedResult3);
console.log(" 1000 Bananen: " + roundedResult4);
