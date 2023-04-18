export default function GetAll(connection, tableName, callback) {
    connection.query(`SELECT * FROM ${tableName}`, (err, res) => {
        if (err) throw new Error(err);
        return callback(res);
    });
};