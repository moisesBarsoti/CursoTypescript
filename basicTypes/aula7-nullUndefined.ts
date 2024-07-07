//  Undefined - Ele é utilizado para quando algo não foi definido

export function createPerson(firstName: string, lastName?: string): {
    firstName: string;
    lastName?: string;
} {
    return {
        firstName,
        lastName
    }
}