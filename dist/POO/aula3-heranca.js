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
exports.Clientes = exports.Aluno = exports.Pessoa = void 0;
var Pessoa = (function () {
    function Pessoa(name, lastName, age, cpf) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.cpf = cpf;
    }
    Pessoa.prototype.getAge = function () {
        return this.age;
    };
    Pessoa.prototype.getCpf = function () {
        return this.cpf;
    };
    Pessoa.prototype.getFullName = function () {
        return "".concat(this.name, " ").concat(this.lastName);
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
var Aluno = (function (_super) {
    __extends(Aluno, _super);
    function Aluno() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Aluno;
}(Pessoa));
exports.Aluno = Aluno;
var Clientes = (function (_super) {
    __extends(Clientes, _super);
    function Clientes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Clientes;
}(Pessoa));
exports.Clientes = Clientes;
var aluno = new Aluno('Laryssa', 'Barsoti', 13, '000.000.000-00');
console.log(aluno);
