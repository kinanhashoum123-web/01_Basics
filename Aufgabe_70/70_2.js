let arr = [2, 4, 6, 8];  // Unser Array

let summe = 0;              // Hier speichern wir die Summe

for (let i of arr) {
    summe = summe + i;   // Jede Zahl zur Summe hinzufügen
}

let durchschnitt = summe / arr.length;  // Summe durch Anzahl teilen

console.log(durchschnitt);  // Ergebnis: 5