"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.People = void 0;
var People = (function () {
    function People(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    People.prototype.fullName = function () {
        return this.name + ' ' + this.lastName;
    };
    return People;
}());
exports.People = People;
var people2 = new People('Moisés', 'Barsoti');
console.log(people2);
