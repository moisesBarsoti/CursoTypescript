"use strict";
var obterKey = function (objeto, key) { return objeto[key]; };
var animal = {
    color: 'Pink',
    vacinas: ["Vacina 1", "Vacina 2"],
    age: 19,
};
var vacinas = obterKey(animal, 'vacinas');
var color = obterKey(animal, 'color');
console.log(vacinas, color, obterKey(animal, 'age'));
