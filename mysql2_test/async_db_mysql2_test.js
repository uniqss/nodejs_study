const db = require('./async_db_mysql2')


async function t_create_table() {
    let sql = 'CREATE TABLE IF NOT EXISTS `table`(' +
        '`id` int(11) NOT NULL AUTO_INCREMENT,' +
        ' `name` varchar(255) NOT NULL,' +
        ' `age` int(11) NOT NULL,' +
        ' `occurredTime` TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,' +
        ' `deleted` tinyint(1) NOT NULL default 0,' +
        ' PRIMARY KEY (`id`)' +
        ') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4'
    return await db.Query(sql)
}

async function t_drop_table() {
    let sql = 'drop table `table`'
    return await db.Query(sql)
}

async function t_insert100() {
    let sql = "insert into `table`(`name`, `age`) values('hello', 100)"
    await db.Query(sql)
}

async function t_insert200() {
    let sql = "insert into `table`(`name`, `age`) values('hello', 200)"
    await db.Query(sql)
}

async function selectAllData() {
    let sql = 'SELECT * FROM `table`'
    let allData = await db.Query(sql)
    return allData
}

async function selectPrepared() {
    let sql = 'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?'
    let allData = await db.PreparedQuery(sql, ['hello', 100])
    return allData
}

async function getData() {
    db.InitPool({
        host: 'localhost',
        user: 'study',
        password: '111111',
        database: 'test',
    })

    await db.Query('CREATE TABLE IF NOT EXISTS `alarms`(' +
        '`id` int(11) NOT NULL AUTO_INCREMENT,' +
        ' `topic` varchar(255) NOT NULL,' +
        ' `alarmLevel` int(11) NOT NULL,' +
        ' `desc` varchar(255) NOT NULL,' +
        ' `occurredTime` TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,' +
        ' `deleted` tinyint(1) NOT NULL default 0,' +
        ' PRIMARY KEY (`id`)' +
        ') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4');

    await t_create_table();

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
        console.log(`row:${row}, name:${row.name}, age:${row.age}`);
    })
    console.log("###################################################################")
    await t_drop_table();
}

getData().then(() => {
    db.EndPool()
})
