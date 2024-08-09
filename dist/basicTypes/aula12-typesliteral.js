"use strict";
var a = 100;
var b = 30;
var person = {
    name: "Moisés",
    lastName: "Barsoti",
};
function chooseColor(color) {
    return color;
}
console.log("".concat(person.name, " a sua cor \u00E9: ").concat(chooseColor("Blue")));
