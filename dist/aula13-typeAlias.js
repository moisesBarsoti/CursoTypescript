"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setFavoriteColor = setFavoriteColor;
var person = {
    name: "Moisés",
    age: 19,
    wage: 1000,
};
function setFavoriteColor(person, color) {
    return __assign(__assign({}, person), { favoriteColor: color });
}
console.log(setFavoriteColor(person, "Blue"));
console.log(person);
