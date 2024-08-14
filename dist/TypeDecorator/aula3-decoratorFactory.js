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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
function inverteNameAndColor(param1, param2) {
    return function (target) {
        console.log('sou o decorador e recebi: ', target);
        return (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, args) || this;
                _this.name = _this.inverte(args[0]);
                _this.color = _this.inverte(args[1]);
                return _this;
            }
            class_1.prototype.inverte = function (value) {
                return value.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
            };
            return class_1;
        }(target));
    };
}
var Animal = (function () {
    function Animal(name, color) {
        this.name = name;
        this.color = color;
        console.log("Sou a classe");
    }
    Animal = __decorate([
        inverteNameAndColor('Valor1', 'Valor2'),
        __metadata("design:paramtypes", [String, String])
    ], Animal);
    return Animal;
}());
exports.Animal = Animal;
var animal = new Animal('Cat', 'Rosa');
console.log(animal);
