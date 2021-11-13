async function main() {
    // get the client
    const mysql = require('mysql2/promise');
    // create the connection
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'study',
        password: '111111',
        database: 'test',
    });
    // query database
    const [rows, fields] = await connection.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]);
    console.log(`rows:${rows}, fields:${fields} count:${rows.length}`)
}

main()
