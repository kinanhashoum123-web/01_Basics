let arr = [];


for (let i = 0; i < 7; i++) {
    arr.push(Math.floor(Math.random() * 100));
}


let summe = 0;
for (let i = 0; i < arr.length; i++) {
    summe = summe + arr[i];
}


console.log("Zahlen:", arr);
console.log("Summe:", summe);