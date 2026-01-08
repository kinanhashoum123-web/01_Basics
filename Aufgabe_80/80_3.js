let Modus = Number(prompt("Welchen Modus möchtest du wählen? 1 = 1-10, 2 = 1-100, 3 = 1-1000"));
let Spiel = 0;

// Zufallszahl je nach Modus
if (Modus == 1) {
    Spiel = Math.floor(Math.random() * 10) + 1;
} else if (Modus == 2) {
    Spiel = Math.floor(Math.random() * 100) + 1;
} else {
    Spiel = Math.floor(Math.random() * 1000) + 1;
}

// Bis zu 10 Versuche
for (let i = 1; i <= 10; i++) {

    let Frage = Number(prompt("Versuch " + i + ": Gib deine geschätzte Zahl ein!"));

    if (Spiel == Frage) {
        console.log("Du hast gewonnen!");
        break; // Schleife beenden
    } 
    else if (Spiel < Frage) {
        console.log("Deine Zahl ist zu hoch!");
    } 
    else {
        console.log("Deine Zahl ist zu niedrig!");
    }

    // Wenn letzter Versuch vorbei ist
    if (i === 10) {
        console.log("Du hast verloren! Die richtige Zahl war: " + Spiel);
    }
}