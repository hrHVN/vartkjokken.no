export default function InsertData(connection, tableName, fieldsObject, callback) {
    connection.query(`INSERT INTO ${tableName} ?`, fieldsObject, (err, res) => {
        if (err) throw new Error(err);
        return callback(res);
    });
};