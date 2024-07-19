// Structural - Tipagem estruturada

type User = {userName: string, password: string};
type VerifyUserFn = (user: User, sentValues: User) => boolean;

const verifyUser: VerifyUserFn = (user, sentValues) => {
    return user.userName === sentValues.userName && user.password === sentValues.password
};

const bdUser = {userName: 'Moises', password: '123455'};
const sentUser = {userName: 'Moisés', password: '123455'};
const loggedIn = verifyUser(bdUser,sentUser);
console.log(loggedIn);