"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unirObjetos = unirObjetos;
function unirObjetos(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var obj1 = { ke1: 'Valor1' };
var obj2 = { ke2: 'Valor2' };
var uniao = unirObjetos(obj1, obj2);
console.log(uniao);
