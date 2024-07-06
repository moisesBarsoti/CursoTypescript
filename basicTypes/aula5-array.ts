// Array com generic - Array<T> T[]
export function multiplicarArgs(...args: Array<number>): number {
    return args.reduce((acumulador, valor) => acumulador * valor, 1);
}

export function concatStrings(...args: string[]): string {
    return args.reduce((acumulador, valor) => acumulador + valor);
}

export function toUpperCase(...args: string[]): string[] {
    return args.map((valor) => valor.toUpperCase());
}

const result = multiplicarArgs(1,2,3);
const concat = concatStrings("A","B","C");
const upperCase = toUpperCase("a","b","c","d");
console.log(result);
console.log(concat);
console.log(upperCase);

export { result }