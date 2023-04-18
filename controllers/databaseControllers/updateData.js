export default function updateData(connection, dataObject, callback) {
    let data = [];

    for (const [key, value] of Object.entries(dataObject.data)) {
        data.push(`${key}=${value}`);
    }

    let sql = `
    UPDATE ${dataObject.tableName} 
    SET ${data.join(',')} 
    WHERE id=${dataObject.id}`;

    connection.query(sql, (err, res) => {
        if (err) throw new Error(err);
        callback(res);
    });
};