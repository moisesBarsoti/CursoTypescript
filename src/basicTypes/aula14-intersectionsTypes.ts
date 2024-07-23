type HasName = {name: string};
type HasLastName = {lastName: string};
type HasAge = {age: number};
type Person = HasName & HasLastName & HasAge;

const person: Person = {
    name: "Moisés",
    lastName: "Barsoti",
    age: 19,
};

console.log(person);

export default 1;