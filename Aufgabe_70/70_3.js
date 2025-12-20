let arr = [3, 7, 2, 4, 5];

let größteZahl = arr[0];   // Wir starten mit der ersten Zahl

for (let i of arr) {
    if (i > größteZahl) {
        größteZahl = i;   // Neue größte Zahl gefunden
    }
}

console.log(größteZahl);  // Ergebnis: 9