// Void - Significa que ele não retorna nada
function semRetorno(...args: string[]): void {
    console.log(args.join(' '))
}

const people = {
    nome: "Moisés",
    sobrenome: "Barsoti",
}

semRetorno("Moisés", "Barsoti");
console.log(`Seu nome é: ${people.nome} e o seu sobrenome é: ${people.sobrenome}`);

export { people };