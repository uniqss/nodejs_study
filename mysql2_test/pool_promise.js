async function main() {
    // get the client
    const mysql = require('mysql2');
    // create the pool
    const pool = mysql.createPool({
        host: 'localhost',
        user: 'study',
        password: '111111',
        database: 'test',
    });
    // now get a Promise wrapped instance of that pool
    const promisePool = pool.promise();
    // query database using promises
    const [rows, fields] = await promisePool.query("SELECT * FROM `table`");
    console.log(`rows:${rows}, fields:${fields} count:${rows.length}`)
}

main()

