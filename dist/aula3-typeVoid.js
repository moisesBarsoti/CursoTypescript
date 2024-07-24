"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.people = void 0;
// Void - Significa que ele não retorna nada
function semRetorno() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args.join(' '));
}
var people = {
    nome: "Moisés",
    sobrenome: "Barsoti",
};
exports.people = people;
semRetorno("Moisés", "Barsoti");
console.log("Seu nome \u00E9: ".concat(people.nome, " e o seu sobrenome \u00E9: ").concat(people.sobrenome));
