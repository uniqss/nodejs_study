
const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'study',
    password: '111111',
    database: 'test',
})
const promisePool = pool.promise();

async function query(sql) {
    const [rows, fields] = await promisePool.query(sql);
    // console.log(`rows:${rows}, fields:${fields} count:${rows.length}`)
    return {rows, fields}
}

async function preparedQuery(sql, values) {
    const [rows, fields] = await promisePool.query(sql, values);
    // console.log(`rows:${rows}, fields:${fields} count:${rows.length}`)
    return {rows, fields}
}

module.exports = { query, pool, promisePool, preparedQuery }
