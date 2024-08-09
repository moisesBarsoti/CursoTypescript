"use strict";
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["yellow"] = 2] = "yellow";
    Color[Color["green"] = 23] = "green";
    Color["purple"] = "Purple";
})(Color || (Color = {}));
(function (Color) {
    Color["pink"] = "Pink";
})(Color || (Color = {}));
console.log(Color);
