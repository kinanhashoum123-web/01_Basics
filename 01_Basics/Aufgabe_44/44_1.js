const { access } = require("fs");

let pass = "king"
const userinput = promt("enter password:" );
if (userinput == pass) {
    console.log("access granted!");
} else {
    console.log("access denied!")
}