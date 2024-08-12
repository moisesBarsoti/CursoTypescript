export class Pessoa {
    constructor(
        public name: string,
        public lastName: string,
        private age: number,
        protected cpf: string
    ) {}

    getAge(): number {
        return this.age;
    }

    getCpf(): string {
        return this.cpf;
    }
    getFullName(): string {
        return `${this.name} ${this.lastName}`;
    }
}

export class Aluno extends Pessoa {}
export class Clientes extends Pessoa {}

const aluno = new Aluno('Laryssa', 'Barsoti', 13, '000.000.000-00');
console.log(aluno);