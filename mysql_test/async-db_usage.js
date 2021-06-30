const { query, pool } = require('./async-db')

async function t_insert( ) {
    let sql = "insert into test1 values(1, 'hello', 200)"
    let dataList = await query( sql )
    return dataList
  }

async function selectAllData( ) {
  let sql = 'SELECT * FROM test1'
  let dataList = await query( sql )
  return dataList
}

async function getData() {
    await t_insert();
  let dataList = await selectAllData()
  console.log( dataList )
}

getData().then(()=>{pool.end()})
