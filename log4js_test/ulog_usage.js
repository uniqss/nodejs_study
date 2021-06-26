const ulog = require('./uniqs_log');

ulog.debug("hello world debug");
ulog.info("hello world info");
ulog.warn("hello world warn.");
ulog.error("hello world error.");

function wait(ms) {
    return new Promise(resolve => setTimeout(()=>resolve(), ms));
}

// function ulog_hourly_usage(){
//     setInterval(
//         function () {
//             console.log("setInterval callback.");
//             ulog.log("hello world!");
//         }
//         , 1000*5);
// }
//
// ulog_hourly_usage();


function aaa(callback){
    ulog.debug("doing aaa");
    ulog.debug("aaa done");
    callback();
}

aaa(function (){
    ulog.debug("in aaa callback.");
    ulog.debug("hello world!");
})
