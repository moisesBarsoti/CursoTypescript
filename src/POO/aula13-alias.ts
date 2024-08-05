type TypePeople = {
    name: string;
    lastName: string;
    nameFull(): string;
}

export class People implements TypePeople {
    constructor(
        public name: string,
        public lastName: string
    ) {}
     nameFull(): string {
       return this.name + ' ' + this.lastName;
    };
}

const people1 = new People('Moisés', 'Barsoti');
console.log(people1.nameFull());