function decorator (
    classPrototype: any, 
    nameMethod: string | symbol, 
    index: number
): any {
    console.log(classPrototype);
    console.log(nameMethod);
    console.log(index);
}

export class OnePerson {
    constructor(
        public name: string,
        public LastName: string,
        private age: number
    ) {
        this.name = name;
        this.LastName = LastName;
        this.age = age;
    }     

    metodo(@decorator msg: string): string {
        return `O nome é: ${this.name} e o sobrenome é: ${this.LastName}`;
    }

    get nameFull(): string {
        return `${this.name} ${this.LastName}`;
    }

    set nameFull(values: string) {
        const palavras = values.split(/\s+/g);
        const firstName = palavras.shift();
        if(!firstName) return;
        this.name = firstName;
        this.LastName = palavras.join(' ');
    }
}

const people1 = new OnePerson('Moisés', 'Barsoti', 19);
const peopleMethod = people1.metodo('Olá mundo');
console.log(peopleMethod);