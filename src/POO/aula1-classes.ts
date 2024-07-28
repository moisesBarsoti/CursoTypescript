// Readonly siginfica que não pode ser alterado

export class Empresa {
    public readonly name: string;
    private readonly colaboradores: Colaborador[] = [];
    protected readonly cnpj: string;

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

export class Colaborador {
    constructor(
        public readonly name: string,
        public readonly sobrenome: string) {

    }
}

const empresa1 = new Empresa('Instagram', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Moisés', 'Barsoti');
const colaborador2 = new Colaborador('Laryssa', 'Barsoti');
const colaborador3 = new Colaborador('Luciana', 'Barsoti');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
console.log(empresa1);
empresa1.mostrarColaboradores();