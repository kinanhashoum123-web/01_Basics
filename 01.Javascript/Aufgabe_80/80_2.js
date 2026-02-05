let spielerWahl = prompt("Schere, Stein oder Papier?")
let KIWahl = ["Schere", "Stein", "Papier"]
let PCWahl = Math.floor(Math.random()*3)
let computerWahl = KIWahl[PCWahl]
console.log("Du hast gewählt:", spielerWahl)
console.log("Computer hat gewählt:", computerWahl)
if(spielerWahl == computerWahl){
console.log("Es ist ein Unentschieden");
}
else if(spielerWahl == "Schere" && computerWahl == "Stein"){
console.log("Du hast verloren")
}
else if(spielerWahl == "Stein" && computerWahl == "Schere" ){
console.log("Du hast gewonnen");
}
else if(spielerWahl == "Papier" && computerWahl == "Stein" ){
console.log("Du hast gewonnen");
}
else if(spielerWahl == "Schere" && computerWahl == "Papier" ){
console.log("Du hast gewonnen");
}
else if(spielerWahl == "Stein" && computerWahl == "Papier"){
console.log("Du hast verloren")
}
else if(spielerWahl == "Papier" && computerWahl == "Schere"){
console.log("Du hast verloren")
}
