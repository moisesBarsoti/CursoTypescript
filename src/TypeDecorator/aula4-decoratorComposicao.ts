type Constructor = {
    new (...args: any): any;
}

function inverteNameAndColor(param1: string, param2: string) {
    return function (target: Constructor) {
        console.log('sou o decorador e recebi: ', target);
        return class extends target {
            color: string;
            name: string;
            constructor(...args: any[]) {
                super(...args);
                this.name = this.inverte(args[0]);
                this.color = this.inverte(args[1]);
            }
    
            inverte(value: string): string {
                return value.split('').reverse().join('')+ ' ' + param1 + ' ' + param2;
            } 
        }
    }
}

function outroDecorator(targ: Constructor) {
    console.log("Sou o outroDecorator");
    return targ;
}

@outroDecorator
@inverteNameAndColor('Valor1','Valor2')
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