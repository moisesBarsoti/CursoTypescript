"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.result = void 0;
exports.multiplicarArgs = multiplicarArgs;
exports.concatStrings = concatStrings;
exports.toUpperCase = toUpperCase;
// Array com generic - Array<T> T[]
function multiplicarArgs() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (acumulador, valor) { return acumulador * valor; }, 1);
}
function concatStrings() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (acumulador, valor) { return acumulador + valor; });
}
function toUpperCase() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.map(function (valor) { return valor.toUpperCase(); });
}
var result = multiplicarArgs(1, 2, 3);
exports.result = result;
var concat = concatStrings("A", "B", "C");
var upperCase = toUpperCase("a", "b", "c", "d");
console.log(result);
console.log(concat);
console.log(upperCase);
