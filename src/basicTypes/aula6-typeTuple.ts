// Tuple - Seria um array com tipos bem espcíficos e tamanho fixo
const dadosCliente1: readonly [number,string] = [1, "Moisés"];
const dadosCliente2: [number,string,string] = [1, "Moisés","Barsoti"];
const dadosCliente3: [number,string,string?] = [1, "Moisés"];

dadosCliente2[0] = 13;
dadosCliente2[1] = "Laryssa";

console.log(dadosCliente1);
console.log(dadosCliente2);