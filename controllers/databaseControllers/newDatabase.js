export default function NewDatabase (connection, databaseName, callback) {
    connection.query(`CREATE DATABASE ${databaseName}`, (err, res) => {
        if (err) throw new Error(err);
        return callback(res);
    });
};