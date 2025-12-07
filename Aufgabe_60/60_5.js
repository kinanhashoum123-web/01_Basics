// Eingabe simuliert (könnte auch mit prompt abgefragt werden)
let a = 3;
let b = 6;

let sum = 0;

// Bestimme das kleinere und größere Ende
let start = Math.min(a, b);
let end = Math.max(a, b);

// Schleife von start bis end
for (let i = start; i <= end; i++) {
    sum += i;
}

console.log(`Summe von {a} bis ${b} ist: ${sum}`);