"use strict";
// Enum - É uma estrutura de dados não ordenada utilizada quando temos mais de uma opção
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["yellow"] = 2] = "yellow";
    // Você pode alterar o valor do índice
    Color[Color["green"] = 23] = "green";
    // Você consegue alterar o valor do índice para string
    Color["purple"] = "Purple";
})(Color || (Color = {}));
// O Enum ele também unifica com outro Enum
(function (Color) {
    Color["pink"] = "Pink";
})(Color || (Color = {}));
console.log(Color);
// function chooseColor(cor: Color): void {
//     console.log(Color[cor]);
// }
// chooseColor(Color.pink);
