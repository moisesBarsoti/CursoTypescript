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
exports.RequestBuilder = exports.SubCalculadora = exports.Calculadora = void 0;
var Calculadora = (function () {
    function Calculadora(number) {
        this.number = number;
    }
    Calculadora.prototype.soma = function (n) {
        this.number += n;
        return this;
    };
    Calculadora.prototype.divisao = function (n) {
        this.number /= n;
        return this;
    };
    Calculadora.prototype.subtracao = function (n) {
        this.number -= n;
        return this;
    };
    Calculadora.prototype.multiplicacao = function (n) {
        this.number *= n;
        return this;
    };
    return Calculadora;
}());
exports.Calculadora = Calculadora;
var SubCalculadora = (function (_super) {
    __extends(SubCalculadora, _super);
    function SubCalculadora() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubCalculadora.prototype.pow = function (n) {
        var _a;
        (_a = this).number = Math.pow(_a.number, n);
        return this;
    };
    return SubCalculadora;
}(Calculadora));
exports.SubCalculadora = SubCalculadora;
var calculadora = new SubCalculadora(10);
calculadora.soma(10).pow(2);
console.log(calculadora);
var RequestBuilder = (function () {
    function RequestBuilder() {
        this.method = null;
        this.url = null;
    }
    RequestBuilder.prototype.setMethod = function (method) {
        this.method = method;
        return this;
    };
    RequestBuilder.prototype.setUrl = function (url) {
        this.url = url;
        return this;
    };
    RequestBuilder.prototype.send = function () {
        console.log("Enviando dados via ".concat(this.method, " para ").concat(this.url));
    };
    return RequestBuilder;
}());
exports.RequestBuilder = RequestBuilder;
var request = new RequestBuilder();
request.setUrl('http://www.google.com');
request.setMethod('post').send();
