const mysql = require("mysql");
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'toorex',
    database: 'node_test',
    port: 3306
});
const query = function (sql, callback) {
    pool.getConnection(function (err, conn) {
        if (err) {
            callback(err, null, null);
        } else {
            conn.query(sql, function (qerr, vals, fields) {
                //释放连接
                conn.release();
                //事件驱动回调
                callback(qerr, vals, fields);
            });
        }
    });
};

const multi_query = function (query_func, on_conn_error) {
    pool.getConnection(function (err, conn) {
        if (err) {
            on_conn_error(err);
        } else {
            query_func(conn);
            conn.release();
        }
    });
}

module.exports = {query, multi_query};
