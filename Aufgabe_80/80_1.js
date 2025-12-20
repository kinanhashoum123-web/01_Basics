 let Question2 = "Ja" 

while (Question2 == "Ja"){

let Question1 = prompt("Drücke Enter um zu Würfeln!")

let Spielerwurf = Math.floor(Math.random() * 6 ) + 1

let KIwurf = Math.floor(Math.random() * 6 ) + 1

if (Spielerwurf == KIwurf) {
    console.log("Es ist Ein Unentschieden!");
}
 else if (KIwurf > Spielerwurf){
console.log("Du hast verloren!");
}
 else if (KIwurf < Spielerwurf){
console.log("Du hast Gewonnen!");
}

Question2 = prompt("Erneut Spielen (Ja oder Nein)?")
}