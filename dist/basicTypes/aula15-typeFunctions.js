"use strict";
function mapStrings(array, callbackfn) {
    var newArray = [];
    for (var i = 0; i < newArray.length; i++) {
        newArray.push(callbackfn(array[i]));
    }
    return newArray;
}
var abc = ['a', 'b', 'c'];
var abcMapped = mapStrings(abc, function (item) {
    return item.toUpperCase();
});
console.log(abcMapped);
console.log(abc);
