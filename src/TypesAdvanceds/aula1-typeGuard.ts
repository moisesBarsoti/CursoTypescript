// Type Guard -  para restringir o tipo de uma variável.

export function sum(a: unknown, b: unknown): string | number {
    return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}` 
}

console.log(sum(3,3));
console.log(sum('3','3'));

type People = {type: 'people'; name: string};
type Animal = {color: string};

type PeopleOrAnimal = People | Animal;

export class Aluno implements People {
    type: "people" = 'people';
    constructor(public name: string) {}
}

function mostrarName(obj: PeopleOrAnimal): void {
    // if ('name' in obj) console.log(obj.name);
    // if (obj instanceof Aluno) console.log(obj.name);
}

mostrarName(new Aluno('Moisés'));