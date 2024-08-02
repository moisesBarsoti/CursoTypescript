export class Escritor {
    private _ferramenta: Ferramenta | null = null;
    constructor(
        private _name: string
    ) {} 

    get name(): string {
        return this._name;
    }

    set ferramenta(ferramenta: Ferramenta | null) {
        this._ferramenta = ferramenta;
    }

    get ferramenta(): Ferramenta | null {
        return this.ferramenta;
    }

    escrever(): void {
        if(this.ferramenta === null) {
            console.log('Não posso escrever sem ferramenta');
            return;
        }
        this.ferramenta.escrever();
    }
}

export abstract class Ferramenta {
    constructor(
        private _name: string
    ) {}
    
    abstract escrever(): void;

    get name(): string {
        return this._name;
    }
}

export class Caneta extends Ferramenta {
    escrever(): void {
        console.log(`${this.name} está escrevendo...`);
    }
}

export class MaquinaDeEscrever extends Ferramenta {
    escrever(): void {
        console.log(`${this.name} está digitando...`);
    }
}

const escritor = new Escritor('Moisés');
const caneta = new Caneta('Bic');
const maquinaDeEscrever = new MaquinaDeEscrever('Máquina');

console.log(escritor.name);
console.log(caneta.name);
console.log(maquinaDeEscrever.name);