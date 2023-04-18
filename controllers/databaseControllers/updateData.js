export default function GetAll(connection, tableName, dataObject, callback) {
    let sql = `UPDATE ${tableName} SET ? WHERE id=${dataObject.id}`;
    
    connection.query(sql, (err, res) => {
        if (err) throw new Error(err);
        origiginalData = res;
    });
};