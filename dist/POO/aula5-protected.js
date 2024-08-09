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
exports.Colaborador = exports.Atento = exports.Empresa = void 0;
var Empresa = (function () {
    function Empresa(name, cnpj) {
        this.colaboradores = [];
        this.name = name;
        this.cnpj = cnpj;
    }
    Empresa.prototype.adicionaColaborador = function (colaborador) {
        this.colaboradores.push(colaborador);
    };
    Empresa.prototype.mostrarColaboradores = function () {
        for (var _i = 0, _a = this.colaboradores; _i < _a.length; _i++) {
            var colaborador = _a[_i];
            console.log(colaborador);
        }
    };
    return Empresa;
}());
exports.Empresa = Empresa;
var Atento = (function (_super) {
    __extends(Atento, _super);
    function Atento() {
        return _super.call(this, 'Atento', '0000.0000.00/0001') || this;
    }
    Atento.prototype.popColaborador = function () {
        var colaborador = this.colaboradores.pop();
        if (colaborador)
            return colaborador;
        return null;
    };
    return Atento;
}(Empresa));
exports.Atento = Atento;
var Colaborador = (function () {
    function Colaborador(name, sobrenome) {
        this.name = name;
        this.sobrenome = sobrenome;
    }
    return Colaborador;
}());
exports.Colaborador = Colaborador;
var empresa1 = new Atento();
var colaborador1 = new Colaborador('Moisés', 'Barsoti');
var colaborador2 = new Colaborador('Laryssa', 'Barsoti');
var colaborador3 = new Colaborador('Luciana', 'Barsoti');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
empresa1.popColaborador();
console.log(empresa1);
empresa1.mostrarColaboradores();
