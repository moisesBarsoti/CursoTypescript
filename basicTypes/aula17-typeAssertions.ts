// Type Assertions - Converter um tipo para outro

// Condicional
const body = document.querySelector('body');
if (body) body.style.background = 'black';
// Non-Null assertion (!)
const body2 = document.querySelector('body')!; // significa que esse objeto vai ser nulo - Não é aconselhável utilizar dessa forma
body2.style.background = 'red';
// Type Assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'black';