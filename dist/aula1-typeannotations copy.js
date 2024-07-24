"use strict";
// Typeannotations - Ele informa a variavel do seu dado primitivo, por exemplo:
var nome = 'Moisés';
// Alguns exemplos dos dados primitivos básicos:
var sobrenome = 'Barsoti'; // Este dado ele é uma string ou seja ele armazena textos
var idade = 19; // Este dado ele é um number ou seja ele armazena números
var adulto = true; // Este dado ele é um boolean ou seja ele faz um verdadeiro ou falso
var symbol = Symbol('qualquer-symbol'); // Este dado ele é um symbol ou seja ele armazena valores únicos
// let big: bigint = 10n; // O bigint ele armazena números inteiros que são muito grandes em sistemas de BD
// Observações
// Quando for fazer Typeannotations os dados tem que começar com letras minúsculas.
// Porém, quando dor fazer seus própios tipos você começa com letra maiúsculas.
// --------------------------------------------------------------------------------------------------------
// Array
var arrayOfNumbers = [1, 2, 3];
var arrayOfStrings = ['A', 'B', 'C'];
// Outras formas de criar Array
var arrayOfNumbers2 = [1, 2, 3];
var arrayOfStrings2 = ['A', 'B', 'C'];
// --------------------------------------------------------------------------------------------------------
// Objetos
var people = {
    name: 'Moisés',
    age: 19,
};
// --------------------------------------------------------------------------------------------------------
// Function
function sum(n1, n2) { return n1 + n2; }
var result = sum(20, 20);
console.log(result);
