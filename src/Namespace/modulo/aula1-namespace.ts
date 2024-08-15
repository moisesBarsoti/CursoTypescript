namespace MyNameSpace {
    console.log(11111);
    export class PeopleFromNamespace {
        constructor(public name: string,) {}
    }
    const people = new PeopleFromNamespace('Moisés');
    console.log(people);
}

const people2 = new MyNameSpace.PeopleFromNamespace('Moisés');
console.log(people2);