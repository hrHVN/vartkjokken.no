export default function GetTable(connection, tableName, callback) {
    connection.query(`SELECT * FROM ${tableName}`, (err, res) => {
        if (err) throw new Error(err);
        return callback(res);
    });
};

export function GetAllByUserId(connection, tableName, userId, callback) {
    connection.query(`SELECT * FROM ${tableName} WHERE userID=${userId}`, (err, res) => {
        if (err) throw new Error(err);
        return callback(res);
    });
};