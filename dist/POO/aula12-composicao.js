"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motor = exports.Carro = void 0;
var Carro = (function () {
    function Carro() {
        this.motor = new Motor();
    }
    Carro.prototype.ligar = function () {
        this.motor.ligar();
    };
    Carro.prototype.acelerar = function () {
        this.motor.acelerar();
    };
    Carro.prototype.frear = function () {
        this.motor.frear();
    };
    Carro.prototype.desligar = function () {
        this.motor.desligado();
    };
    return Carro;
}());
exports.Carro = Carro;
var Motor = (function () {
    function Motor() {
    }
    Motor.prototype.ligar = function () {
        console.log('O carro está ligando');
    };
    Motor.prototype.acelerar = function () {
        console.log('O carro está acelerando');
    };
    Motor.prototype.frear = function () {
        console.log('O carro está freando');
    };
    Motor.prototype.desligado = function () {
        console.log('O carro está ligando');
    };
    return Motor;
}());
exports.Motor = Motor;
var carro1 = new Carro();
carro1.ligar();
carro1.acelerar();
carro1.frear();
carro1.desligar();
