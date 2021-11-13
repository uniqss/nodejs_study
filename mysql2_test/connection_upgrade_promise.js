async function main() {

    // get the client
    const mysql = require('mysql2');
// create the connection
    const con = mysql.createConnection(
        {
            host: 'localhost',
            user: 'study',
            password: '111111',
            database: 'test',
        }
    );
    con.promise().query("SELECT * FROM `table`")
        .then(([rows, fields]) => {
            console.log(`rows:${rows}, fields:${fields} count:${rows.length}`)
        })
        .catch(console.log)
        .then(() => con.end());
}

main()
