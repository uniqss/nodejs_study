const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 1024,
    host: '127.0.0.1',
    user: 'root',
    password: 'toorex',
    database: 'my_db'
});


pool.getConnection(function(err, connection) {
    if (err) {
        throw err;
    } // not connected!

    // Use the connection
    connection.query("SELECT * FROM node_test", function (error, results, fields) {
        // When done with the connection, release it.
        connection.release();

        // Handle error after the release.
        if (error) throw error;

        // Don't use the connection here, it has been returned to the pool.
    });
});


