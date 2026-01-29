let anzahl = prompt("Wie viele Noten möchtest du eingeben?");
let summe = 0;

for (let i = 1; i <= anzahl; i++) {

    let note = prompt("Gib die " + i + ". Note ein:");

    while (note !== "1" && note !== "2" && note !== "3" && note !== "4" && note !== "5") {
        console.log("Ungültige Note! Bitte gib eine Note zwischen 1 und 5 ein.");
        note = prompt("Gib die " + i + ". Note ein:");
    }

    summe = summe + note * 1; 
}

let durchschnitt = summe / anzahl;
console.log("Der Durchschnitt ist: " + durchschnitt);