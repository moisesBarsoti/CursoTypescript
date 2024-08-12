const objeto1: Record<string, string | number> = {
    name: "Moisés",
    lastName: "Barsoti",
    age: 19,
}

console.log(objeto1);

export type PeopleProtocol = {
    name?: string,
    lastName?: string,
    age?: number,
}

type PeopleRequired = Required<PeopleProtocol>  // Obrigatório
type PeoplePartial = Partial<PeopleProtocol> // Opcional
type PeopleReadonly = Readonly<PeopleProtocol>  
type PeoplePick = Pick<PeopleProtocol, 'name' | 'age'>  

const objeto2: PeopleRequired = {
    name: "Moisés",
    lastName: "Barsoti",
    age: 19,
}
console.log(objeto2);

// Extract e Exclude
type ABC = 'A'|'B'|'C';
type CDE = 'C'|'E'|'F';
type TypeExclude = Exclude<ABC, CDE>
type TypeExtract = Extract<ABC, CDE>

type AccountMongo = {
    _id: string;
    name: string;
    age: number;
}

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
    id: string,
}

const accountMongo: AccountMongo = {
    _id: 'djfuwriehguerhgu9erw83',
    name: 'Moisés',
    age: 19
}

export function mapAccount(accountMongo: AccountMongo): AccountApi {
    const {_id, ...accountData } = accountMongo;
    return {...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi)