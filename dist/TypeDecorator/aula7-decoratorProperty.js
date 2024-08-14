"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnePerson = void 0;
function decorator(classPrototype, name) {
    var valueProperty;
    return {
        get: function () { return valueProperty; },
        set: function (value) { return valueProperty = value.split('').reverse().join(''); },
    };
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
    return OnePerson;
}());
exports.OnePerson = OnePerson;
var people1 = new OnePerson('Moisés', 'Barsoti', 19);
var peopleMethod = people1.metodo('Olá mundo');
console.log(peopleMethod);
