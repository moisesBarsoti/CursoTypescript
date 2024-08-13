"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meuFilter = meuFilter;
function meuFilter(array, callbackfn) {
    var newArray = [];
    for (var i = 0; i < newArray.length; i++) {
        if (callbackfn(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
;
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var array1FilterOrigin = array1.filter(function (values) { return values < 5; });
console.log(array1FilterOrigin);
var arryaFilter = meuFilter(array1, function (value) { return value < 5; });
console.log(arryaFilter);
