"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
exports.sum = sum;
function sum(a, b) {
    return typeof a === 'number' && typeof b === 'number' ? a + b : "".concat(a).concat(b);
}
console.log(sum(3, 3));
console.log(sum('3', '3'));
var Aluno = (function () {
    function Aluno(name) {
        this.name = name;
        this.type = 'people';
    }
    return Aluno;
}());
exports.Aluno = Aluno;
function mostrarName(obj) {
}
mostrarName(new Aluno('Moisés'));
