export class DataBase {
    static database: DataBase;

    private constructor(
        private host: string,
        private user: string,
        private password: string
    ) {}

    connect(): void {
        console.log(`Conectado: Host: ${this.host} User: ${this.user} Password: ${this.password}`);
    }

    static getDataBase(        
         host: string,
         user: string,
         password: string
        ): DataBase {
            if(DataBase.database) return DataBase.database
            DataBase.database = new DataBase(host,user,password);
            return DataBase.database;
        }
}

const db1 =  DataBase.getDataBase('Localhost', 'root', '1234');
db1.connect();
const db2 =  DataBase.getDataBase('Localhost', 'root', '1234');
db2.connect();

console.log(db1 == db2);