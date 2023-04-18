import NewDatabase from './DatabaseController/NewDataBase';
import InsertData from './DatabaseController/insertData';
import GetAll from './DatabaseController/getData';
import GetDataById from './DatabaseController/getDataById';

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

    getAll(table, callback) {
        GetData(this.connection, table, callback);
    }

    getDataById(table, objectId, callback) {
        InsertData(this.connection, table, objectId, callback);
    }
}