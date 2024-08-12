// Unknown - Ele é uma alternativa mais segura do tipo ANY
let x: unknown;
x = 10;
x = 20;
x = "Moisés";
x = 30;
const y = 20;

if(typeof x === 'number') console.log(x + y);