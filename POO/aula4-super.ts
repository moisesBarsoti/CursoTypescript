// Super - É a classe que está no topo ou seja a que está extendo como principal
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

export class Aluno extends Pessoa {
    getFullName(): string {
        console.log('Moisés é Lindo!!!!!!');
        return super.getFullName();
    }
}
export class Clientes extends Pessoa {}

const aluno = new Aluno('Laryssa', 'Barsoti', 13, '000.000.000-00');
console.log(aluno);
console.log(aluno.getFullName());