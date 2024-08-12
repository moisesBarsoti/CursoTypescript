interface People {
    name: string;
}

interface People {
    readonly lastName: string;
}

interface People {
    readonly enderecos: readonly string[];
}

interface People {
    age?: number;
}

const people1: People = {
    name: 'Moisés',
    lastName: 'Barsoti',
    enderecos: ['Av. Brasil'],
    age: 19
}

console.log(people1);