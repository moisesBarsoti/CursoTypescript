// Type Alias - Seria basicamente cria um apelido para um tipo
type age = number;
type Person = {
    name: string;
    age: number;
    wage: number;
    favoriteColor?: string;
}

type ColorRGB = "Blue" | "Pink" | "Purple";
type ColorBBY = "Brown" | "Black" | "Yellow";
type FavoriteColor = ColorBBY | ColorRGB;

const person: Person = {
    name: "Moisés",
    age: 19,
    wage: 1000,
}

export function setFavoriteColor(person:Person, color: FavoriteColor): Person {
    return {...person, favoriteColor: color};
}

console.log(setFavoriteColor(person, "Blue"));
console.log(person);