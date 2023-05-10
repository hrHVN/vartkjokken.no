import NewDatabase from './DatabaseController/NewDataBase';
import InsertData from './DatabaseController/insertData';
import { GetTable, GetAllByUserId } from './DatabaseController/getAll';
import GetDataById from './DatabaseController/getDataById';
import UpdateData from './DatabaseController/updateData';

export default class DatabaseController {
    constructor(connection) {
        if (DatabaseController.instance == null) {
            this.connection = connection;
        }

        return DatabaseController.instance;
    }

    createNewDB(DatabaseName, callback) {
        NewDatabase(this.connection, DatabaseName, callback);
    }

    insertData(table, dataObject, callback) {
        InsertData(this.connection, table, dataObject, callback);
    }

    getTable(table, callback) {
        GetTable(this.connection, table, callback);
    }

    getAllByUserId(table, callback) {
        GetAllByUserId(this.connection, table, callback);
    }

    getDataById(table, objectId, callback) {
        GetDataById(this.connection, table, objectId, callback);
    }

    updateObject(table, id, object, callback) {
        UpdateData(this.connection, { data: object, id: id, tableName: table }, callback);
    }

    disconnect() {
        this.connection.end((err) => {
            if (err) console.error(err);
            console.log(`Database ${process.env.DB_MINHEIM} Disconected`);
        });
    }
}