const db = require('./async_db_mysql2')

async function t_insert100() {
    let sql = "insert into `table` values('hello', 100)"
    await db.query(sql)
}

async function t_insert200() {
    let sql = "insert into `table` values('hello', 200)"
    await db.query(sql)
}

async function selectAllData() {
    let sql = 'SELECT * FROM `table`'
    let allData = await db.query(sql)
    return allData
}

async function selectPrepared() {
    let sql = 'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?'
    let allData = await db.preparedQuery(sql, ['hello', 100])
    return allData
}

async function getData() {
    await t_insert100();
    await t_insert200();
    console.log("###################################################################")
    const allData = await selectAllData()
    console.log(`rows:${allData.rows} fields:${allData.fields}`)
    allData.rows.forEach((row, idx) => {
        console.log(row);
    })
    console.log("###################################################################")
    const someData = await selectPrepared()
    console.log(`rows:${someData.rows} fields:${someData.fields}`)
    someData.rows.forEach((row, idx) => {
        console.log(row);
    })
    console.log("###################################################################")
}

getData().then(() => {
    db.pool.end()
})
