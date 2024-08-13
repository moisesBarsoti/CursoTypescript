"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = isNumber;
exports.soma = soma;
function isNumber(value) {
    return typeof value === 'number';
}
function soma() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var retorno = args.reduce(function (sum, value) {
        if (isNumber(sum) && isNumber(value)) {
            return sum + value;
        }
        return sum;
    }, 0);
    return retorno;
}
console.log(soma(1, 2, 3));
