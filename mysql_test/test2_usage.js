const ulog = require('../log4js_test/uniqs_log');
const {query, multi_query} = require("./test2.js");

if (1 == 1) {
    multi_query(function (conn) {
        conn.query("insert into test1 values(1, 'hello', 200)", function (qerr, vals, fields) {
            ulog.debug("mysql query. qerr:", qerr, " vals:", vals, " fields:", fields);
        });
        conn.query("select * from test1", function (qerr, vals, fields) {
            ulog.debug("mysql query. qerr:", qerr, " vals:", vals, " fields:", fields);
        });
        conn.query("update test1 set score = 123 where id = 1", function (qerr, vals, fields) {
            ulog.debug("mysql query. qerr:", qerr, " vals:", vals, " fields:", fields);
        });
        conn.query("delete from test1 where id = 1", function (qerr, vals, fields) {
            ulog.debug("mysql query. qerr:", qerr, " vals:", vals, " fields:", fields);
        });
    }, function (err) {
        ulog.debug("mysql query. err:", err);
    })
}

if (1 == 0) {

    query("insert into test1 values(1, 'hello', 200)",function(err,vals,fields){
        //do something
        ulog.debug("mysql query. err:", err, " vals:", vals, " fields:", fields);
    });

    query("select * from test1",function(err,vals,fields){
        //do something
        ulog.debug("mysql query. err:", err, " vals:", vals, " fields:", fields);
    });

    query("update test1 set score = 123 where id = 1",function(err,vals,fields){
        //do something
        ulog.debug("mysql query. err:", err, " vals:", vals, " fields:", fields);
    });

    query("delete from test1 where id = 1",function(err,vals,fields){
        //do something
        ulog.debug("mysql query. err:", err, " vals:", vals, " fields:", fields);
    });
}