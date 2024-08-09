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
    Object.defineProperty(People.prototype, "Cpf", {
        get: function () {
            return this._cpf.replace(/\D/g, "");
        },
        set: function (cpf) {
            this._cpf = cpf;
        },
        enumerable: false,
        configurable: true
    });
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
var people = new People('Moisés', 'Barsoti', 19, '000.000.000-00');
people.Cpf = '000.000.000-11';
console.log(people);
console.log(people.Cpf);
