"use strict";
// Type Assertions - Converter um tipo para outro
// Condicional
var body = document.querySelector('body');
if (body)
    body.style.background = 'black';
// Non-Null assertion (!)
var body2 = document.querySelector('body'); // significa que esse objeto vai ser nulo - Não é aconselhável utilizar dessa forma
body2.style.background = 'red';
// Type Assertion
var body3 = document.querySelector('body');
body3.style.background = 'black';
