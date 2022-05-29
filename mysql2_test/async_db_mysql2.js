
const mysql = require('mysql2');

let pool = null;
function InitPool(configPoolOptions) {
    pool = mysql.createPool(configPoolOptions)
}

function EndPool() {
    pool.end()
}

async function Query(sql) {
    if (pool == null) {
        throw "call InitPool first!"
    }
    const promisePool = pool.promise();
    const [rows, fields] = await promisePool.query(sql);
    // console.log(`rows:${rows}, fields:${fields} count:${rows.length}`)
    return { rows, fields }
}

async function PreparedQuery(sql, values) {
    if (pool == null) {
        throw "call InitPool first!"
    }
    const promisePool = pool.promise();
    const [rows, fields] = await promisePool.query(sql, values);
    // console.log(`rows:${rows}, fields:${fields} count:${rows.length}`)
    return { rows, fields }
}

module.exports = { InitPool, EndPool, Query, PreparedQuery }
