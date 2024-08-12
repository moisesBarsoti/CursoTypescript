type ObterKeyFn = <O, K extends keyof O>(objeto: O, key: K) => O[K];

const obterKey: ObterKeyFn = (objeto, key) => objeto[key];

const animal = {
    color: 'Pink',
    vacinas: ["Vacina 1", "Vacina 2"],
    age: 19,
};

const vacinas = obterKey(animal, 'vacinas');
const color = obterKey(animal, 'color');

console.log(vacinas,color, obterKey(animal, 'age'));