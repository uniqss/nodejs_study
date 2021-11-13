const db = require('./async_db_mysql2')

async function t_insert() {
    let sql = "insert into `table` values('hello', 200)"
    await db.query(sql)
}

async function selectAllData() {
    let sql = 'SELECT * FROM `table`'
    let allData = await db.query(sql)
    return allData
}

async function getData() {
    await t_insert();
    let allData = await selectAllData()
    console.log(`rows:${allData.rows} fields:${allData.fields}`)
    allData.rows.forEach((row, idx) => {
        console.log(row);
    })
}

getData().then(() => {
    db.pool.end()
})
