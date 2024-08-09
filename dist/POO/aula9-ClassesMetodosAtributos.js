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
exports.Monster = exports.Guerreira = exports.Personagem = void 0;
var Personagem = (function () {
    function Personagem(name, ataque, vida) {
        this.name = name;
        this.ataque = ataque;
        this.vida = vida;
    }
    Personagem.prototype.atacar = function (personagem) {
        this.bordao();
        personagem.perderVida(this.ataque);
    };
    Personagem.prototype.perderVida = function (forcaAtaque) {
        this.vida -= forcaAtaque;
        console.log("".concat(this.name, " agora tem ").concat(this.vida, " de vida..."));
    };
    return Personagem;
}());
exports.Personagem = Personagem;
var Guerreira = (function (_super) {
    __extends(Guerreira, _super);
    function Guerreira() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.emoji = '\u00f0';
        return _this;
    }
    Guerreira.prototype.bordao = function () {
        console.log(this.emoji + 'Guerreira ao ataque');
    };
    return Guerreira;
}(Personagem));
exports.Guerreira = Guerreira;
var Monster = (function (_super) {
    __extends(Monster, _super);
    function Monster() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.emoji = '\u00f0';
        return _this;
    }
    Monster.prototype.bordao = function () {
        console.log(this.emoji + 'Monstro ao ataque');
    };
    return Monster;
}(Personagem));
exports.Monster = Monster;
var guerreira = new Guerreira('Guerreira', 100, 1000);
var monster = new Monster('Monster', 50, 500);
guerreira.atacar(monster);
guerreira.atacar(monster);
guerreira.atacar(monster);
guerreira.atacar(monster);
monster.atacar(guerreira);
