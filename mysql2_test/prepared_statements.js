// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'study',
    password: '111111',
    database: 'test'
});

// execute will internally call prepare and query
connection.execute(
    'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
    ['Rick C-137', 53],
    function (err, results, fields) {
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available

        // If you execute same statement again, it will be picked from a LRU cache
        // which will save query preparation time and give better performance
    }
);

