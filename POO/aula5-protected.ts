// Readonly siginfica que não pode ser alterado

export class Empresa {
    // Public - Pode ser acessado de qualquer classe
    public readonly name: string;
    // Private - Só pode ser acessado dentro dessa classe
    private readonly cnpj: string;
    // Protected - Significa que pode ser acessado na classe e nas sub-classes
    protected readonly colaboradores: Colaborador[] = [];

    constructor(name: string, cnpj: string) {
        this.name = name;
        this.cnpj = cnpj;
    }

    adicionaColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador);
    }

    mostrarColaboradores(): void {
        for(const colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }
}

export class Atento extends Empresa {
    constructor () {
        super('Atento', '0000.0000.00/0001');
    }

    popColaborador(): Colaborador | null {
        const colaborador = this.colaboradores.pop();
        if (colaborador) return colaborador;
        return null
    }

}

export class Colaborador {
    constructor(
        public readonly name: string,
        public readonly sobrenome: string) {

    }
}

const empresa1 = new Atento();
const colaborador1 = new Colaborador('Moisés', 'Barsoti');
const colaborador2 = new Colaborador('Laryssa', 'Barsoti');
const colaborador3 = new Colaborador('Luciana', 'Barsoti');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
empresa1.popColaborador();
console.log(empresa1);
empresa1.mostrarColaboradores();