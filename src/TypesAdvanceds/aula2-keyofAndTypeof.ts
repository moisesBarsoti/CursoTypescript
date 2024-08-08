type ColorObj = typeof colorObj;
type ColorKey = keyof ColorObj;

const colorObj = {
    vermelho: 'red',
    azul: 'blue',
    verde: 'green',
    rosa: 'pink'
}

function traduzirCor(cor: ColorKey, cores: typeof colorObj) {
    return cores[cor];
}

console.log(traduzirCor('vermelho', colorObj));
console.log(traduzirCor('azul', colorObj));
console.log(traduzirCor('rosa', colorObj));