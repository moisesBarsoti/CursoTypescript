"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colaborador = exports.Empresa = void 0;
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
var Colaborador = (function () {
    function Colaborador(name, sobrenome) {
        this.name = name;
        this.sobrenome = sobrenome;
    }
    return Colaborador;
}());
exports.Colaborador = Colaborador;
var empresa1 = new Empresa('Instagram', '11.111.111/0001-11');
var colaborador1 = new Colaborador('Moisés', 'Barsoti');
var colaborador2 = new Colaborador('Laryssa', 'Barsoti');
var colaborador3 = new Colaborador('Luciana', 'Barsoti');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
console.log(empresa1);
empresa1.mostrarColaboradores();
