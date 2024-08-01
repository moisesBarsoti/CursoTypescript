export class People {
    constructor(
        private name: string,
        private lastName: string,
        private age: number,
        private _cpf: string
    ) {}
    // Maneira antiga
    // Get - Significa pegar 
    // getCpf(): string {
    //     return this.cpf.replace(/\D/g, "");
    // }
    // // Set - Significa alterar
    // setCpf(value: string):void {
    //     this.cpf = value;
    // }

    // Nova maneira
    get Cpf(): string {
        return this._cpf.replace(/\D/g, "");
    }

    set Cpf(cpf: string) {
        this._cpf = cpf;
    }
}

export class Aluno extends People {}
export class Clientes extends People {}

const people = new People('Moisés', 'Barsoti', 19, '000.000.000-00');
people.Cpf = '000.000.000-11';
console.log(people);
console.log(people.Cpf);