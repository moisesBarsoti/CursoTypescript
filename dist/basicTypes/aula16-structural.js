"use strict";
var verifyUser = function (user, sentValues) {
    return user.userName === sentValues.userName && user.password === sentValues.password;
};
var bdUser = { userName: 'Moises', password: '123455' };
var sentUser = { userName: 'Moisés', password: '123455' };
var loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
