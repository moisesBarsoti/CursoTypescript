"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pilha = exports.People = void 0;
var People = (function () {
    function People(name, age) {
        this.name = name;
        this.age = age;
    }
    return People;
}());
exports.People = People;
var Pilha = (function () {
    function Pilha() {
        this.contador = 0;
        this.elementos = {};
    }
    Pilha.prototype.push = function (elemento) {
        this.elementos[this.contador] = elemento;
        this.contador++;
    };
    Pilha.prototype.pop = function () {
        if (this.isEmpty())
            return undefined;
        this.contador--;
        var elemento = this.elementos[this.contador];
        delete this.elementos[this.contador];
        return elemento;
    };
    Pilha.prototype.isEmpty = function () {
        return this.contador === 0;
    };
    Pilha.prototype.tamanho = function () {
        return this.contador;
    };
    return Pilha;
}());
exports.Pilha = Pilha;
var pilha = new Pilha();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.push(5);
while (!pilha.isEmpty()) {
    console.log(pilha.pop());
}
