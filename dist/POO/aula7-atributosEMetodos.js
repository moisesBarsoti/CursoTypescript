"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clientes = exports.Aluno = exports.People = void 0;
var People = (function () {
    function People(name, lastName, age, _cpf) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this._cpf = _cpf;
    }
    People.createPeople = function (name, lastName) {
        return new People(name, lastName, People.agePadrao, People.cpfPadrao);
    };
    People.agePadrao = 0;
    People.cpfPadrao = '000.000.000-00';
    return People;
}());
exports.People = People;
var Aluno = (function (_super) {
    __extends(Aluno, _super);
    function Aluno() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Aluno;
}(People));
exports.Aluno = Aluno;
var Clientes = (function (_super) {
    __extends(Clientes, _super);
    function Clientes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Clientes;
}(People));
exports.Clientes = Clientes;
var people1 = new People('Moisés', 'Barsoti', 19, '000.000.000-00');
var people2 = People.createPeople('Moisés', 'Barsoti');
console.log(people1);
console.log(people2);
