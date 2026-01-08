let arr = [3, 7, 2, 4, 5];

let größteZahl = arr[0];   

for (let i of arr) {
    if (i > größteZahl) {
        größteZahl = i;   
    }
}

console.log(größteZahl);  