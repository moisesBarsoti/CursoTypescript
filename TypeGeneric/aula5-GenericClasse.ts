export class People<T,U> {constructor(public name: T, public age: U,) {}}

export class Pilha<T> {
    private contador = 0;
    private elementos: {[K:number]: T} = {};

    push(elemento: T): void {
        this.elementos[this.contador] = elemento;
        this.contador++;
    }

    pop(): T | void {
        if (this.isEmpty()) return undefined;

        this.contador--;
        const elemento = this.elementos[this.contador];
        delete this.elementos[this.contador];
        return elemento;
    }

    isEmpty(): boolean {
        return this.contador === 0;
    }

    tamanho(): number {
        return this.contador;
    }
}

const pilha = new Pilha();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.push(5);

while (!pilha.isEmpty()) {
    console.log(pilha.pop());
}