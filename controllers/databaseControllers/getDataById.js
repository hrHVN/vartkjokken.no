export default function GetDataById(connection, tableName, objectId, callback) {
    connection.query(`SELECT * FROM ${tableName} WHERE id=${objectId}`,
        (err, res) => {
            if (err) throw new Error(err);
            return callback(res);
        });
};