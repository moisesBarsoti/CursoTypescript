"use strict";
var colorObj = {
    vermelho: 'red',
    azul: 'blue',
    verde: 'green',
    rosa: 'pink'
};
function traduzirCor(cor, cores) {
    return cores[cor];
}
console.log(traduzirCor('vermelho', colorObj));
console.log(traduzirCor('azul', colorObj));
console.log(traduzirCor('rosa', colorObj));
