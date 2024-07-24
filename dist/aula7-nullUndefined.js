"use strict";
//  Undefined - Ele é utilizado para quando algo não foi definido
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPerson = createPerson;
function createPerson(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    };
}
