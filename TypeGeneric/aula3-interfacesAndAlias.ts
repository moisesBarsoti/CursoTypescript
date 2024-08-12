interface PeopleProtocol<T = string, U = number> {
    name: T;
    lastName: T;
    age: U;
}

const aluno: PeopleProtocol<string, number> = {
    name: 'Moisés',
    lastName: 'Barsoti',
    age: 19,
}

console.log(aluno);