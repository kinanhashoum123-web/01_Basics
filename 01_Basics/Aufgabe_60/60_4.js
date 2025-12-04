for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue; // überspringt die Ausgabe, wenn i durch 3 teilbar ist
    }
    console.log(i);
}