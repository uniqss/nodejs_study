// get the client
const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
    host: 'localhost',
    user: 'study',
    password: '111111',
    database: 'test',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// For pool initialization, see above
pool.query("SELECT * FROM `table`", function(err, rows, fields) {
    console.log(`err:${err}, rows:${rows}, fields:${fields} count:${rows.length}`)
    // Connection is automatically released when query resolves
})

console.log("done")
