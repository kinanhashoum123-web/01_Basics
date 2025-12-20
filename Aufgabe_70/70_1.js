let arr = [];

// 2. 7 Zufallszahlen ins Array einfügen
for (let i = 0; i < 7; i++) {
    arr.push(Math.floor(Math.random() * 100));
}

// 3. Die Summe berechnen
let summe = 0;
for (let i = 0; i < arr.length; i++) {
    summe = summe + arr[i];
}

// 4. Alles ausgeben
console.log("Zahlen:", arr);
console.log("Summe:", summe);