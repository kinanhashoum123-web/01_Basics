let bombs = [];
let dead = false;

function createBombs(amount) {
    while (bombs.length < amount) {
        let pos = Math.floor(Math.random() * 25) + 1;
        if (!bombs.includes(pos)) {
            bombs.push(pos);
        }
    }
}
createBombs(3);

function nearbyBombs(field) {
    if (bombs.includes(field)) {
        console.log("verloren! Bomben waren: " + bombs);
        dead = true;
        return;
    }

    let neighbors = [
        field - 5, field + 5, 
        field - 1, field + 1,
        field - 6, field - 4, 
        field + 4, field + 6  
    ];

    let count = neighbors.filter(n => bombs.includes(n)).length;

    console.log("Bomben in der Nähe: " + count);
}


while (!dead) {
    let auswahl = Number(prompt("> Feld "));

    console.log("01 02 03 04 05\n06 07 08 09 10\n11 12 13 14 15\n16 17 18 19 20\n21 22 23 24 25\n");

    nearbyBombs(auswahl);
    console.log("");
}

