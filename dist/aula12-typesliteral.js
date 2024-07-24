"use strict";
// Types Literal - É basicamente você utilizar valores como tipos
var a = 100;
// Não vai ser permito porque foi adicionado um valor como tipo
// a = 30
// Inserção
var b = 30;
var person = {
    name: "Moisés",
    lastName: "Barsoti",
};
function chooseColor(color) {
    return color;
}
console.log("".concat(person.name, " a sua cor \u00E9: ").concat(chooseColor("Blue")));
