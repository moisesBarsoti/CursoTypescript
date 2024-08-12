// Typeannotations - Ele informa a variavel do seu dado primitivo, por exemplo:
let nome: string = 'Moisés';

// Alguns exemplos dos dados primitivos básicos:
let sobrenome: string = 'Barsoti'; // Este dado ele é uma string ou seja ele armazena textos
let idade: number = 19; // Este dado ele é um number ou seja ele armazena números
let adulto: boolean = true; // Este dado ele é um boolean ou seja ele faz um verdadeiro ou falso
let symbol: symbol = Symbol('qualquer-symbol'); // Este dado ele é um symbol ou seja ele armazena valores únicos
// let big: bigint = 10n; // O bigint ele armazena números inteiros que são muito grandes em sistemas de BD

// Observações
// Quando for fazer Typeannotations os dados tem que começar com letras minúsculas.
// Porém, quando dor fazer seus própios tipos você começa com letra maiúsculas.

// --------------------------------------------------------------------------------------------------------

// Array
let arrayOfNumbers: Array<number> = [1,2,3];
let arrayOfStrings: Array<string> = ['A','B','C'];
// Outras formas de criar Array
let arrayOfNumbers2: number[] = [1,2,3];
let arrayOfStrings2: string[] = ['A','B','C'];

// --------------------------------------------------------------------------------------------------------

// Objetos
let people: {name:string, age: number, adult?: boolean} = {
    name: 'Moisés',
    age: 19,
}

// --------------------------------------------------------------------------------------------------------

// Function
function sum(n1: number, n2: number): number {return n1 + n2;}

const result = sum(20,20);
console.log(result);