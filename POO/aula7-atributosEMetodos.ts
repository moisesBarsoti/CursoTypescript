// Método estático - É um método que pode ser acessado sem instanciar a classe

export class People {

    static agePadrao = 0;
    static cpfPadrao = '000.000.000-00';

    constructor(
        public name: string,
        public lastName: string,
        public age: number,
        public _cpf: string
    ) {}

    static createPeople(name: string, lastName: string): People {
        return new People(name, lastName, People.agePadrao, People.cpfPadrao);
    }
}

export class Aluno extends People {}
export class Clientes extends People {}

const people1 = new People('Moisés', 'Barsoti', 19, '000.000.000-00');
const people2 = People.createPeople('Moisés', 'Barsoti')

console.log(people1);
console.log(people2);