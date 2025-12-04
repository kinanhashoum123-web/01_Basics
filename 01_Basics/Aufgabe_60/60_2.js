let sum = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {   // Bedingung: i ist ungerade
        sum += i;        // addiere i zur Summe
    }
}

console.log(sum);