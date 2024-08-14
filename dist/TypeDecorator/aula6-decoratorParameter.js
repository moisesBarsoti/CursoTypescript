"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnePerson = void 0;
function decorator(classPrototype, nameMethod, index) {
    console.log(classPrototype);
    console.log(nameMethod);
    console.log(index);
}
var OnePerson = (function () {
    function OnePerson(name, LastName, age) {
        this.name = name;
        this.LastName = LastName;
        this.age = age;
        this.name = name;
        this.LastName = LastName;
        this.age = age;
    }
    OnePerson.prototype.metodo = function (msg) {
        return "O nome \u00E9: ".concat(this.name, " e o sobrenome \u00E9: ").concat(this.LastName);
    };
    Object.defineProperty(OnePerson.prototype, "nameFull", {
        get: function () {
            return "".concat(this.name, " ").concat(this.LastName);
        },
        set: function (values) {
            var palavras = values.split(/\s+/g);
            var firstName = palavras.shift();
            if (!firstName)
                return;
            this.name = firstName;
            this.LastName = palavras.join(' ');
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        __param(0, decorator),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", String)
    ], OnePerson.prototype, "metodo", null);
    return OnePerson;
}());
exports.OnePerson = OnePerson;
var people1 = new OnePerson('Moisés', 'Barsoti', 19);
var peopleMethod = people1.metodo('Olá mundo');
console.log(peopleMethod);
