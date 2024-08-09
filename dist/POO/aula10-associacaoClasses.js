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
exports.MaquinaDeEscrever = exports.Caneta = exports.Ferramenta = exports.Escritor = void 0;
var Escritor = (function () {
    function Escritor(_name) {
        this._name = _name;
        this._ferramenta = null;
    }
    Object.defineProperty(Escritor.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Escritor.prototype, "ferramenta", {
        get: function () {
            return this.ferramenta;
        },
        set: function (ferramenta) {
            this._ferramenta = ferramenta;
        },
        enumerable: false,
        configurable: true
    });
    Escritor.prototype.escrever = function () {
        if (this.ferramenta === null) {
            console.log('Não posso escrever sem ferramenta');
            return;
        }
        this.ferramenta.escrever();
    };
    return Escritor;
}());
exports.Escritor = Escritor;
var Ferramenta = (function () {
    function Ferramenta(_name) {
        this._name = _name;
    }
    Object.defineProperty(Ferramenta.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Ferramenta;
}());
exports.Ferramenta = Ferramenta;
var Caneta = (function (_super) {
    __extends(Caneta, _super);
    function Caneta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Caneta.prototype.escrever = function () {
        console.log("".concat(this.name, " est\u00E1 escrevendo..."));
    };
    return Caneta;
}(Ferramenta));
exports.Caneta = Caneta;
var MaquinaDeEscrever = (function (_super) {
    __extends(MaquinaDeEscrever, _super);
    function MaquinaDeEscrever() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MaquinaDeEscrever.prototype.escrever = function () {
        console.log("".concat(this.name, " est\u00E1 digitando..."));
    };
    return MaquinaDeEscrever;
}(Ferramenta));
exports.MaquinaDeEscrever = MaquinaDeEscrever;
var escritor = new Escritor('Moisés');
var caneta = new Caneta('Bic');
var maquinaDeEscrever = new MaquinaDeEscrever('Máquina');
console.log(escritor.name);
console.log(caneta.name);
console.log(maquinaDeEscrever.name);
console.log(escritor);
