"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBase = void 0;
var DataBase = (function () {
    function DataBase(host, user, password) {
        this.host = host;
        this.user = user;
        this.password = password;
    }
    DataBase.prototype.connect = function () {
        console.log("Conectado: Host: ".concat(this.host, " User: ").concat(this.user, " Password: ").concat(this.password));
    };
    DataBase.getDataBase = function (host, user, password) {
        if (DataBase.database)
            return DataBase.database;
        DataBase.database = new DataBase(host, user, password);
        return DataBase.database;
    };
    return DataBase;
}());
exports.DataBase = DataBase;
var db1 = DataBase.getDataBase('Localhost', 'root', '1234');
db1.connect();
var db2 = DataBase.getDataBase('Localhost', 'root', '1234');
db2.connect();
console.log(db1 == db2);
