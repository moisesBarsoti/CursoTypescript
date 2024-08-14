function inverteNameAndColor<T extends new (...args: any) => any>(target: T): T {
    console.log('sou o decorador e recebi: ' , target);
    return class extends target {
        color: string;
        name: string;
        constructor(...args: any[]) {
            super(...args);
            this.name = this.inverte(args[0]);
            this.color = this.inverte(args[1]);
        }

        inverte(value: string): string {
            return value.split('').reverse().join('');
        } 
    }
}
@inverteNameAndColor
export class Animal {
    constructor(
        public name: string,
        public color: string
    ) {
        console.log("Sou a classe");
    }
}


const animal = new Animal('Cat','Rosa');
console.log(animal);