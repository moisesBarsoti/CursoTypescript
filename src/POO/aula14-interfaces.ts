interface TypeName {
    name: string;
}

interface TypeLastName {
    lastName: string;
}

interface TypeFullName {
    fullName: () => string;
}

type TypePeople = TypeName & TypeLastName & TypeFullName;
interface TypePeople2 extends TypeName, TypeLastName, TypeFullName {}

export class People implements TypePeople {
    constructor(
        public name: string,
        public lastName: string
    ) {}

    fullName(): string {
        return this.name + ' ' + this.lastName;
    }
}


const people2 = new People('Moisés', 'Barsoti');
console.log(people2);